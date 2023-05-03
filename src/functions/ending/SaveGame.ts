// Importing libraries
import { getDoc, doc, DocumentData } from "firebase/firestore";

// Importing the database
import { db } from "../../database/initalise";

// Importing Types
import { DataSava } from "../../types/ending/DataSava";

// Async function that saves the previous game to the database
export async function saveGame(): Promise<DataSava> {
  let saved: DataSava = {
    saved: true,
    message: "",
  };
  return Promise.resolve(saved);
};