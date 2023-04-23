import { CheckDetails } from "../../types/chessboard/CheckDetails";

// Function that takes in the current state of the game every time a move is made and works out if anyone is in check
// The source and target square from the most recent move are also passed in to check that the play isn't moving them self into check
export function checkEvaluation(sourceSquare: any, targetSquare: any, chessboard: any[][]): CheckDetails {
  // This function takes in the full chessboard as a 2D array and has to work out if anyone is in check, and by what
  // Should return a custom typed CheckDetails variable with the following values:
  // selfInCheck - This should return true if the player is moving their own king into check, else return false
  // opponentInCheck - This should return true if the most recent move has put the opponents king into check, else return false
  // colorInCheck - Should return "w" if the white king is in check, "b" if the black king is in check, "" if no king is in check
  // kingInCheckSquare - Should return the square index of whichever king is in check in the form of {row: 0, col: 0}, should return -1 if no king is in check
  // puttingInCheckSquare - Should return a custom typed array of all the square indexes of all the pieces putting the king in check, return empty if no king is in check
  // Current return statement shows the data structure that needs returning and the default state for if no king is in check
  const checkDetails: CheckDetails = {
    selfInCheck: false, 
    opponentInCheck: false,
    colorInCheck: "",
    kingInCheckSquare: {row: -1, col: -1},
    puttingInCheckSquare: []
  }
  return checkDetails;
};