// Importing libraries
import { getDoc, doc, DocumentData } from "firebase/firestore";

// Importing the database
import { db } from "../../database/initalise";

// Importing page types
import { CredentialValidation } from "../../types/login/AccountVerification";

// Async Function that takes the entered username and password and handles the login process and validation
export async function Login(username: string, password: string): Promise<CredentialValidation> {
  // Declare variable that will be returned from the function
  let confirmation: CredentialValidation;
  // Querying the database for a user that matches the entered username
  const user: string | DocumentData = await accountFinder(username);
  // Guard statement check if a user was found or not
  if (typeof user === "string") {
    confirmation = {
      valid: false,
      errored: true,
      message: user,
    };
    return Promise.resolve(confirmation);
  };
  // Guard statement to check if the entered password matches the accounts password
  if (password !== user.data().password) {
    confirmation = {
      valid: false,
      errored: true,
      message: `The username and/or password you have entered do not match an existing user. Please check your details and try again or create an account.`,
    };
    return Promise.resolve(confirmation);
  };
  // Outputting to the user that the login was successful
  confirmation = {
    valid: true,
    errored: false,
    message: "Login Successful",
  };
  return Promise.resolve(confirmation);
};

// Async function that queries the database for an account that makes the entered user and returns the account details if it exists
async function accountFinder(username: string): Promise<string | DocumentData> {
  const docUserRef = doc(db, "users", username.toUpperCase());
  let docUser;
  try {
    docUser = await getDoc(docUserRef);
  } catch (e) {
    console.log(e); //? Maybe remove this later?
    let error: string = "An unsuspected error has occurred. The database could not be reached. Please check your internet connection & try again in a few minutes.";
    return Promise.resolve(error);
  };
  if (!docUser.exists()) {
    let error: string = `The entered username '${username}' does not match an existing user. Please check that your username is correct or create an account.`;
    return Promise.resolve(error);
  };
  return Promise.resolve(docUser);
};