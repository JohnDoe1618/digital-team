import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyDGqe_deYhDSaIDtgHS03qRshrpPldVFBI",
    authDomain: "profile-2f601.firebaseapp.com",
    projectId: "profile-2f601",
    storageBucket: "profile-2f601.appspot.com",
    messagingSenderId: "865328409734",
    appId: "1:865328409734:web:d27bb15db16bb92fd5f507",
    measurementId: "G-9Z8HS923LF"
};

export const run = () => {
    console.debug('[FIREBASE] - Running')
    const appBase = initializeApp(firebaseConfig);
    const db = getFirestore(appBase);
    const storage = getStorage(appBase)

    return {
        db,
        storage
    }
}

