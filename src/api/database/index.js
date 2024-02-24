import { db } from "@/main"

export default class ApiFirebase {
    collectionRef;
    constructor(collectionName) {
        this.collectionRef = db.collection(collectionName);
    }
    // 1. Получить все документы:
    getAllDocuments() {
        const arr = [];
        this.collectionRef.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                arr.push(doc.data());
                console.debug(doc.id, " => ", doc.data());
            });
        })
        .catch((error) => {
            console.error("Error getting documents: ", error);
        });
        return arr;
    }

    // 2. Записать новый документ:
    addDocument(data) {
        let result = false;
        this.collectionRef.add({
            ...data
        })
        .then((docRef) => {
            console.debug("Document written with ID: ", docRef.id);
            result = true;
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            result = false;
        });
        return result
    }

    // 3. Обновить документ:

    updateDocument(id, data) {
        let result = false;
        this.collectionRef.doc(id).update({
        ...data
        })
        .then((docRef) => {
            console.debug("Document written with ID: ", docRef.id);
            result = true;
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
            result = false;
        });
        return result
    }

    // 4. Удалить документ:

    deleteDocument(id) {
        let result = false;
        this.collectionRef.doc(id).delete()
    .then((docRef) => {
            console.debug("Document written with ID: ", docRef.id);
            result = true;
        })
    .catch((error) => {
            console.error("Error deleting document: ", error);
            result = false;
        });
        return result
    }

    // 5. Получить один документ по полю id:

    getDocumentById(id) {
        let result = null;
        this.collectionRef.doc(id).get()
    .then((doc) => {
            result = doc.data();
        })
    .catch((error) => {
            console.error("Error getting document: ", error);
        });
        return result;
    }
}