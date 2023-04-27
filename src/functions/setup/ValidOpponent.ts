// Importing Database
import { db } from "../../database/initalise";

// Importing libraries
import { getDoc, doc } from "firebase/firestore";

// Importing types
import { CredentialValidation } from '../../types/login/AccountVerification';

// Async Function to search the database for the entered opponent
export async function ValidOpponent(username: string): Promise<CredentialValidation> {
  let confirmation: CredentialValidation;
  const docUserRef = doc(db, "users", username.toUpperCase());
  let docUser;
  try {
    docUser = await getDoc(docUserRef);
  } catch (e) {
    console.log(e); //? Maybe remove this later?
    confirmation = {
      valid: false,
      errored: true,
      message: "An unsuspected error has occurred. The database could not be reached. Please check your internet connection & try again in a few minutes.",
    }
    return Promise.resolve(confirmation);
  };
  if (!docUser.exists()) {
    confirmation = {
      valid: false,
      errored: true,
      message: "The user you searched for could not be found. Please enter a different username.",
    }
    return Promise.resolve(confirmation);
  };
  confirmation = {
    valid: true,
    errored: false,
    message: "User located successfully.",
  }
  return Promise.resolve(confirmation);
};