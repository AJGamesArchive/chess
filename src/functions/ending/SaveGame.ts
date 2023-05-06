// Importing libraries
import { getDoc, doc, DocumentData, setDoc, updateDoc } from "firebase/firestore";

// Importing the database
import { db } from "../../database/initalise";

// Importing Types
import { DataSava } from "../../types/ending/DataSava";

// Async function that saves the previous game to the database
export async function saveGame(plyOneName: string, plyOneColor: string, plyTwoName: string, plyTwoColor: string, numWhiteTaken: number, numBlackTaken: number, whoWon: string, mode: string): Promise<DataSava> {
  // Adding both player names to an array so they can be looped through
  let plyNames: any[] = [{name: plyOneName, color: plyOneColor}, {name: plyTwoName, color: plyTwoColor}];
  // Declaring function output
  let saved: DataSava = {
    saved: true,
    message: "",
  };
  // For loop to save the game data for both players
  for (let i = 0; i < plyNames.length; i++) {
    // Fetching the first users account from the database
    let docUserRef = doc(db, "users", plyNames[i].name.toUpperCase());
    let docUser;
    try {
      docUser = await getDoc(docUserRef);
    } catch (e) {
      console.log(e); //? Maybe remove this later?
      saved.saved = false;
      saved.message += `The game data could not be saved for ${plyNames[i].name}!`;
      continue;
    };
    // Ensuring that the player does have an account
    if (docUser.exists()) {
      // Retrieving players account data and updating their totals
      let docData: DocumentData = docUser.data();
      let gameNum: number = docData.total + 1;
      let wins: number = docData.wins;
      let loses: number = docData.loses;
      let draws: number = docData.draws;
      if (whoWon === "Draw") {
        draws += 1;
      } else if (whoWon === plyNames[i].name) {
        wins += 1;
      } else {
        loses += 1;
      };
      try {
        await updateDoc(doc(db, "users", plyNames[i].name.toUpperCase()), {
          total: gameNum,
          wins: wins,
          loses: loses,
          draws: draws,
        });
      } catch (e) {
        console.log(e); //? Maybe remove this later?
        saved.saved = false;
        saved.message += `The game data could not be saved for ${plyNames[i].name}!`;
        continue;
      };
      const timestamp: string = dateTime();
      // Gathering up the game data, creating a data variable for the game data, and saving it to the account
      const gameData: any = {
        id: `Game ${gameNum}`,
        mode: mode,
        plyOneName: plyNames[0].name,
        plyOneColor: plyNames[0].color,
        plyTwoName: plyNames[1].name,
        plyTwoColor: plyNames[1].color,
        whitePiecesTaken: numWhiteTaken,
        blackPiecesTaken: numBlackTaken,
        winner: whoWon,
        timestamp: timestamp,
      };
      try {
        await setDoc(doc(db, "users", plyNames[i].name.toUpperCase(), "games", `GAME ${gameNum}`), gameData)
      } catch (e) {
        console.log(e); //? Maybe remove this later?
        saved.saved = false;
        saved.message += `The game data could not be saved for ${plyNames[i].name}!`;
        continue;
      };
    };
  };
  // Add instructions to error message if an error has occurred
  if (saved.message !== "") {
    saved.message += " Please try again in a few minutes or continue without saving.";
  };
  return Promise.resolve(saved);
};

// Create string with current date and time in formate of: DD/MM/YYYY - HH/MM
function dateTime(): string {
  const today = new Date()
  const date: string = String(today.getDate()).padStart(2, "0") + "/" + String(today.getMonth() + 1).padStart(2, "0") + "/" + today.getFullYear() + " - " + String(today.getHours()).padStart(2, "0") + ":" + String(today.getMinutes()).padStart(2, "0")
  return date;
};