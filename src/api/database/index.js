import { db } from "@/main"
import {doc, getDoc, collection, getDocs, query, where, addDoc, updateDoc, arrayUnion, arrayRemove, deleteDoc, increment } from "firebase/firestore"; 
import { developerConverter } from "./converters";

export default class ApiFirebase {
    collectionRef;
    constructor(collectionName) {
        this.collectionRef = collectionName;
    }
    // 1. Получить все документы:
    async getAllDocuments() {
        const list = [];
        const querySnapshot = await getDocs(collection(db, this.collectionRef));
        querySnapshot.forEach((doc) => {
            list.push(doc.data());
        });
        return list
    }

    // 1.1 Получить все документы удволитворяющие условию 
    async getAllDocumentsWhere(whereValue, whereSymbol, value) {
        const list = [];
        const q = query(collection(db, this.collectionRef), where(whereValue, whereSymbol, value));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            list.push(doc.data());
        });
        return list
    }

    // 2. Записать новый документ:
    async addDocument(data) {
        const docRef = await addDoc(collection(db, this.collectionRef), data);
        console.debug("Document written with ID: ", docRef.id);
        if(docRef.id) {
            return docRef;
        } else {
            return false;
        }
    }

    // // 3. Обновить документ:
    async updateDocument(id, data) {
        try {
            const ref = doc(db, this.collectionRef, id);
            await updateDoc(ref, data);
        } catch (error) {
            console.error(error);
        }
    }

    // // 3.1 Обновить документ свложенными полями(объектами):
    // async updateDocument(id, data) {
    //     try {
    //         const ref = doc(db, this.collectionRef, id);
    //         await updateDoc(ref, {
    //             "counts.projects": 21
    //         });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // // 3.2 Обновить документ добавив значение в массив:
    async updateDocumentArrayAdd(id, fieldName, value) {
        try {
            const ref = doc(db, this.collectionRef, id);
            await updateDoc(ref, {
                [fieldName]: arrayUnion(value)
            });
        } catch (error) {
            console.error(error);
        }
    }

    // // 3.3 Обновить документ удалива значение из массива:
    async updateDocumentArrayRemove(id, fieldName, value) {
        try {
            const ref = doc(db, this.collectionRef, id);
            await updateDoc(ref, {
                [fieldName]: arrayRemove(value)
            });
        } catch (error) {
            console.error(error);
        }
    }

    // // 4. Удалить документ:
    async deleteDocument(id) {
        try {
            await deleteDoc(doc(db, this.collectionRef, id));
        } catch (error) {
            console.error(error);            
        }
    }

    // 5. Получить один документ по полю id:
    async getDocumentById(id) {
        const docRef = doc(db, this.collectionRef, id).withConverter(developerConverter);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.debug("No such document!");
            return null;
        }
    }

    // 6. Инкремент значения
    async incrementValue(id, field, value) {
        const reference = doc(db, this.collectionRef, id);

        // Atomically increment the population of the city by 50.
        await updateDoc(reference, {
            [field]: increment(value)
        });
    }

    // Здесь будут атомарные транзакции(хотя транзакции сами по себе атомарные)
}