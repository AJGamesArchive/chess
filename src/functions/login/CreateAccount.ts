// Importing libraries
import { getDoc, setDoc, doc, collection, query, where, getDocs } from "firebase/firestore";

// Importing the database
import { db } from "../../database/initalise";

// Importing page types
import { CredentialValidation } from "../../types/login/AccountVerification";

// Async function that takes the entered username and password and handles the account creation process and validation
export async function CreateAccount(username: string, password: string, confirmPassword: string): Promise<CredentialValidation> {
  // Declare variable that will be returned from the function
  let confirmation: CredentialValidation;
  // Guard statement to ensure user entered the same password twice
  if (password !== confirmPassword) {
    confirmation = {
      valid: false,
      errored: true,
      message: "You're passwords do not match. Please re-confirm your password.",
    };
    return Promise.resolve(confirmation);
  }
  // Retrieving an array of all the usernames currently in use from the db
  const documents: string | string[] = await retrieveUsernames();
  // Guard statement to ensure the array of usernames was retrieved successfully
  if (typeof documents === "string") {
    confirmation = {
      valid: false,
      errored: true,
      message: documents,
    };
    return Promise.resolve(confirmation);
  }
  // Guard statement to ensure the entered username is not already in use
  for (let i = 0; i < documents.length; i++) {
    if (username.toUpperCase() === documents[i]) {
      confirmation = {
        valid: false,
        errored: true,
        message: "The username you've entered is already in use. Please choose a different username.",
      };
      return Promise.resolve(confirmation);
    };
  };
  // Attempting to create the account with the entered username and password
  const creationSuccessful: boolean = await accountCreation(username, password);
  //Guard statement to ensure the account was created successfully
  if (!creationSuccessful) {
    confirmation = {
      valid: false,
      errored: true,
      message: "An unsuspected error has occurred. The database could not be reached. Please check your internet connection & try again in a few minutes.",
    };
    return Promise.resolve(confirmation);
  }
  // Outputting to the user that the account was created successfully
  confirmation = {
    valid: true,
    errored: false,
    message: `The account ${username} was created successfully. Please now login to your account.`,
  };
  return Promise.resolve(confirmation);
}

// Async function to retrieve all the existing usernames from the database
async function retrieveUsernames(): Promise<string | string[]> {
  let existingUsernames: string[] = [];
  const q = query(collection(db, "users"));
  let documents;
  try {
    documents = await getDocs(q);
  } catch (e) {
    console.log(e); //? Maybe remove this later?
    let error: string = "An unsuspected error has occurred. The database could not be reached. Please check your internet connection & try again in a few minutes.";
    return Promise.resolve(error);
  }
  documents.forEach((doc) => {
    existingUsernames.push(doc.id);
  });
  return Promise.resolve(existingUsernames);
};

// Async function to create an account in the database with the entered credentials
async function accountCreation(username: string, password: string): Promise<boolean> {
  try {
    await setDoc(doc(db, "users", username.toUpperCase()), {
      display: username,
      password: password,
      wins: 0,
      loses: 0,
      draws: 0,
    });
  } catch (e) {
    console.log(e); //? Maybe remove this later?
    return Promise.resolve(false);
  };
  return Promise.resolve(true);
};