// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "../../Keys/FirestoreConfig";
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase & Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const firebaseAnalytics = getAnalytics(app);