// Importing libraries
import { promises } from "dns";
import { getDoc, doc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../database/initalise";

// Importing page types
import { CredentialValidation } from "../../types/login/AccountVerification";

// Function that takes the entered username and password and handles the account creation process and validation
// Returns true if the account was created successfully
export function CreateAccount(username: string, password: string, confirmPassword: string): CredentialValidation {
  let confirmation: CredentialValidation;
  if (password !== confirmPassword) {
    confirmation = {
      valid: false,
      errored: true,
      message: "You're passwords do not match. Please re-confirm your password.",
    };
    return confirmation;
  }
  let documents: Promise<string | string[]> = retrieveUsernames();
  if (typeof documents === "string") {
    confirmation = {
      valid: false,
      errored: true,
      message: documents,
    };
    return confirmation;
  }
  for (let d in documents) {
    if (username.toUpperCase() === d) {
      confirmation = {
        valid: false,
        errored: true,
        message: "The username you've entered is already in use. Please choose a different username.",
      };
      return confirmation;
    }
  }


  //TODO Write code that creates the account and returns a confirmation message here

  
  //! Temporary to prevent errors, remove later
  confirmation = {
    valid: false,
    errored: false,
    message: "",
  };
  return confirmation;
}

// Async function to retrieve all the existing usernames from the database
async function retrieveUsernames() {
  let existingUsernames: string[] = [];
  const q = query(collection(db, "users"));
  let documents;
  try {
    documents = await getDocs(q);
  } catch (e) {
    let error: string = "An unsuspected error has occurred. The database could not be reached. Please try again in a few minutes.";
    return error;
  }
  documents.forEach((doc) => {
    existingUsernames.push(doc.id);
  });
  return existingUsernames;
};