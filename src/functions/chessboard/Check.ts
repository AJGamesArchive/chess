import { CheckDetails, CheckAllowMove } from "../../types/chessboard/CheckDetails";
import { resetSquareColor } from "./ResetSquareColor";
import { updateBoard } from "./UpdateBoard";
import { UpdatedArrays } from "../../types/chessboard/UpdatedArrays";
import { checkmate } from "./Checkmate";
import { LookupKings } from "../../types/chessboard/CheckDetails";

// Importing all piece movement checker functions
import { pawnPiece } from "./Pawn";
import { rookPiece } from "./Rook";
import { knightPiece } from "./Knight";
import { bishopPiece } from "./Bishop";
import { queenPiece } from "./Queen";

// Declaring React variable to store the state of check at the end of each move
var check: CheckDetails = ({
  selfInCheck: false, 
  opponentInCheck: false,
  colorInCheck: "",
  kingInCheckSquare: {row: -1, col: -1},
  puttingInCheckSquare: []
});

// Function to control how check if validated and output the result
export function checkHandler(chessboard: any[][], sourceSquare: any, targetSquare: any, checkHighlighter: string, darkSquareColor: string, huntHighlighter: string, checkMateHighlighter: string): CheckAllowMove {
  let newChessboard: any[][] = Array.from(chessboard);
  let allowMove: CheckAllowMove;
  // Check if any one is in check and color squares accordingly
  const checkDetails: CheckDetails = checkEvaluation(sourceSquare, targetSquare, chessboard);
  if (checkDetails.selfInCheck) {
    let updatedArray: UpdatedArrays = updateBoard(targetSquare, sourceSquare, chessboard);
    newChessboard = updatedArray.board;
    allowMove = {
      board: newChessboard,
      allowMove: false,
      checkMate: false
    };
    return allowMove;
  };
  if ((checkDetails.colorInCheck === check.colorInCheck) && check.colorInCheck !== "") {
    let updatedArray: UpdatedArrays = updateBoard(targetSquare, sourceSquare, chessboard);
    newChessboard = updatedArray.board;
    allowMove = {
      board: newChessboard,
      allowMove: false,
      checkMate: false
    };
    return allowMove;
  };
  if (checkDetails.opponentInCheck) {
    // Check if opponent is in checkmate
    const inCheckmate: boolean = checkmate(newChessboard, checkDetails.kingInCheckSquare);
    // Checks if any squares are in the check highlighter and un-highlights them
    if (check.opponentInCheck) {
      newChessboard = checkHighlight(check, newChessboard, checkHighlighter, darkSquareColor, huntHighlighter, checkMateHighlighter, inCheckmate, false);
    };
    // Highlight squares to show who is in check and where from
    newChessboard = checkHighlight(checkDetails, newChessboard, checkHighlighter, darkSquareColor, huntHighlighter, checkMateHighlighter, inCheckmate, true);
    // Save the check state from this piece move
    check = checkDetails;
    if (inCheckmate) {
      allowMove = {
        board: newChessboard,
        allowMove: true,
        checkMate: true
      };
    } else {
      allowMove = {
        board: newChessboard,
        allowMove: true,
        checkMate: false
      };
    };
  } else {
    // Checks if any squares are in the check highlighter and um-highlights them
    if (check.opponentInCheck) {
      newChessboard = checkHighlight(check, newChessboard, checkHighlighter, darkSquareColor, huntHighlighter, checkMateHighlighter, false, false);
    };
    // Save the check state from this piece move
    check = checkDetails;
    allowMove = {
      board: newChessboard,
      allowMove: true,
      checkMate: false
    };
  };
  return allowMove;
};

// Function that takes in the current state of the game every time a move is made and works out if anyone is in check
// The source and target square from the most recent move are also passed in to check that the play isn't moving them self into check
export function checkEvaluation(sourceSquare: any, targetSquare: any, chessboard: any[][]): CheckDetails {

  let kings: LookupKings = retrieveKings(targetSquare.piece.color, chessboard);
  let ownKing: any = kings.ownKing;
  let opponentKing :any = kings.opponentKing;

  var checkDetails: CheckDetails = {
    selfInCheck: false,
    opponentInCheck: false,
    colorInCheck: "",
    kingInCheckSquare: {row: -1, col: -1},
    puttingInCheckSquare: []
  };

  for (let row = 0; row < chessboard.length; row++) { 
    for (let col = 0; col < chessboard[row].length; col++) {
      if (chessboard[row][col].piece.type === "Rook" && chessboard[row][col].piece.color === opponentKing.piece.color){
        if(rookPiece(chessboard[row][col], ownKing, chessboard)=== true)
        {
          checkDetails.selfInCheck = true
          checkDetails.opponentInCheck = false;
          checkDetails.colorInCheck = ownKing.piece.color;
          checkDetails.kingInCheckSquare = {row: ownKing.row, col: ownKing.col}
          checkDetails.puttingInCheckSquare.push({row: row, col: col});
          return checkDetails;
        }
      }
      if (chessboard[row][col].piece.type === "Knight" && chessboard[row][col].piece.color === opponentKing.piece.color){
        if(knightPiece(chessboard[row][col], ownKing)=== true)
        {
          checkDetails.selfInCheck = true
          checkDetails.opponentInCheck = false;
          checkDetails.colorInCheck = ownKing.piece.color;
          checkDetails.kingInCheckSquare = {row: ownKing.row, col: ownKing.col}
          checkDetails.puttingInCheckSquare.push({row: row, col: col});
          return checkDetails;
        }
      }
      if (chessboard[row][col].piece.type === "Pawn" && chessboard[row][col].piece.color === opponentKing.piece.color){
        if(pawnPiece(chessboard[row][col], ownKing)=== true)
        {
          checkDetails.selfInCheck = true
          checkDetails.opponentInCheck = false;
          checkDetails.colorInCheck = ownKing.piece.color;
          checkDetails.kingInCheckSquare = {row: ownKing.row, col: ownKing.col}
          checkDetails.puttingInCheckSquare.push({row: row, col: col});
          return checkDetails;
        }
      }
      if (chessboard[row][col].piece.type === "Bishop" && chessboard[row][col].piece.color === opponentKing.piece.color){
        if(bishopPiece(chessboard[row][col], ownKing, chessboard)=== true)
        {
          checkDetails.selfInCheck = true
          checkDetails.opponentInCheck = false;
          checkDetails.colorInCheck = ownKing.piece.color;
          checkDetails.kingInCheckSquare = {row: ownKing.row, col: ownKing.col}
          checkDetails.puttingInCheckSquare.push({row: row, col: col});
          return checkDetails;
        }
      }
      if (chessboard[row][col].piece.type === "Queen" && chessboard[row][col].piece.color === opponentKing.piece.color){
        if(queenPiece(chessboard[row][col], ownKing, chessboard)=== true)
        {
          checkDetails.selfInCheck = true
          checkDetails.opponentInCheck = false;
          checkDetails.colorInCheck = ownKing.piece.color;
          checkDetails.kingInCheckSquare = {row: ownKing.row, col: ownKing.col}
          checkDetails.puttingInCheckSquare.push({row: row, col: col});
          return checkDetails;
        }
      }
    }
  }

  for (let row = 0; row < chessboard.length; row++) { 
    for (let col = 0; col < chessboard[row].length; col++){
      if (chessboard[row][col].piece.type === "Rook" && chessboard[row][col].piece.color === ownKing.piece.color){
        if(rookPiece(chessboard[row][col], opponentKing, chessboard)=== true)
        {
          checkDetails.opponentInCheck = true;
          checkDetails.colorInCheck = opponentKing.piece.color;
          checkDetails.kingInCheckSquare = {row: opponentKing.row, col: opponentKing.col}
          checkDetails.puttingInCheckSquare.push({row: row, col: col});
        }
      }
      if (chessboard[row][col].piece.type === "Knight" && chessboard[row][col].piece.color === ownKing.piece.color){
        if(knightPiece(chessboard[row][col], opponentKing)=== true)
        {
          checkDetails.opponentInCheck = true;
          checkDetails.colorInCheck = opponentKing.piece.color;
          checkDetails.kingInCheckSquare = {row: opponentKing.row, col: opponentKing.col}
          checkDetails.puttingInCheckSquare.push({row: row, col: col});
        }
      }
      if (chessboard[row][col].piece.type === "Pawn" && chessboard[row][col].piece.color === ownKing.piece.color){
        if(pawnPiece(chessboard[row][col], opponentKing)=== true)
        {
          checkDetails.opponentInCheck = true;
          checkDetails.colorInCheck = opponentKing.piece.color;
          checkDetails.kingInCheckSquare = {row: opponentKing.row, col: opponentKing.col}
          checkDetails.puttingInCheckSquare.push({row: row, col: col});
        }
      }
      if (chessboard[row][col].piece.type === "Bishop" && chessboard[row][col].piece.color === ownKing.piece.color){
        if(bishopPiece(chessboard[row][col], opponentKing, chessboard)=== true)
        {
          checkDetails.opponentInCheck = true;
          checkDetails.colorInCheck = opponentKing.piece.color;
          checkDetails.kingInCheckSquare = {row: opponentKing.row, col: opponentKing.col}
          checkDetails.puttingInCheckSquare.push({row: row, col: col});
        }
      }
      if (chessboard[row][col].piece.type === "Queen" && chessboard[row][col].piece.color === ownKing.piece.color){
        if(queenPiece(chessboard[row][col], opponentKing, chessboard)=== true)
        {
          checkDetails.opponentInCheck = true;
          checkDetails.colorInCheck = opponentKing.piece.color;
          checkDetails.kingInCheckSquare = {row: opponentKing.row, col: opponentKing.col}
          checkDetails.puttingInCheckSquare.push({row: row, col: col});
        }
      }
    }
  }
  // This function takes in the full chessboard as a 2D array and has to work out if anyone is in check, and by what
  // Should return a custom typed CheckDetails variable with the following values:
  // selfInCheck - This should return true if the player is moving their own king into check, else return false
  // opponentInCheck - This should return true if the most recent move has put the opponents king into check, else return false
  // colorInCheck - Should return "w" if the white king is in check, "b" if the black king is in check, "" if no king is in check
  //                if a king is already in check and this move puts the second king into check so both kings are now in check, return the color of the FIRST king put in check
  // kingInCheckSquare - Should return the square index of whichever king is in check in the form of {row: 0, col: 0}, should return -1 if no king is in check
  // puttingInCheckSquare - Should return a custom typed array of all the square indexes of all the pieces putting the king in check, return empty if no king is in check
  // Current return statement shows the data structure that needs returning and the default state for if no king is in check
  return checkDetails;
};

// Function that returns the square of your own king and your opponents king
function retrieveKings(turn: string, chessboard: any[][]): LookupKings {
  let ownKing: any;
  let opponentKing :any;
  for (let row = 0; row < chessboard.length; row++) {
    for (let col = 0; col < chessboard[row].length; col++) {
      if (chessboard[row][col].piece.type === "King" && chessboard[row][col].piece.color === "white") {
        if (turn === "white") {
          ownKing = chessboard[row][col];
        } else {
          opponentKing = chessboard[row][col];
        };
      };
      if (chessboard[row][col].piece.type === "King" && chessboard[row][col].piece.color === "black") {
        if (turn === "black") {
          ownKing = chessboard[row][col];
        } else {
          opponentKing = chessboard[row][col];
        };
      };
    };
  };
  let kings = {
    ownKing: ownKing,
    opponentKing: opponentKing
  };
  return kings;
};

// Function that either highlights the squares on the board that are in check or un-highlights the board squares that were previously in check, depending on given params
export function checkHighlight(checkState: CheckDetails, chessboard: any[][], highlightColor: string, darkSquareColor: string, huntHighlightColor: string, checkMateHighlightColor: string, inCheckMate: boolean, highlight: boolean): any[][] {
  if (highlight) {
    let kingsSquare: any = chessboard[checkState.kingInCheckSquare.row][checkState.kingInCheckSquare.col];
    if (inCheckMate) {
      kingsSquare.color = checkMateHighlightColor;
    } else {
      kingsSquare.color = highlightColor;
    };
    for (const square of checkState.puttingInCheckSquare) {
      let pieceSquare = chessboard[square.row][square.col];
      pieceSquare.color = huntHighlightColor;
    };
  } else {
    let kingsSquare: any = chessboard[checkState.kingInCheckSquare.row][checkState.kingInCheckSquare.col];
    kingsSquare.color = resetSquareColor("#FFFFFF", darkSquareColor, kingsSquare);
    for (const square of checkState.puttingInCheckSquare) {
      let pieceSquare = chessboard[square.row][square.col];
      pieceSquare.color = resetSquareColor("#FFFFFF", darkSquareColor, pieceSquare);
    };
  };
  return chessboard;
};
