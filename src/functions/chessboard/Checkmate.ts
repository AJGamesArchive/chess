// Importing Function
import { checkEvaluation } from "./Check";
import { updateBoard } from "./UpdateBoard";

import { UpdatedArrays } from "../../types/chessboard/UpdatedArrays";
import { CheckSquare } from "../../types/chessboard/CheckDetails";

// Importing all piece movement checker functions
import { pawnPiece } from "./Pawn";
import { rookPiece } from "./Rook";
import { knightPiece } from "./Knight";
import { bishopPiece } from "./Bishop";
import { queenPiece } from "./Queen";
import { kingPiece } from "./King";

// Function that looks at the square the king in check is on and works out if it can move anywhere, returns true or false accordingly
export function checkmate(chessboard: any[][], kingSquare: any, huntingPieces: CheckSquare[]): boolean {
  // Array to store all the squares the king in check can move to
  const kingMoves: any[] = new Array(8);
  // For loops to find all the possible squares the king in check can move to and store them in array
  for (let row = 0; row < chessboard.length; row++) { 
    for (let col = 0; col < chessboard[row].length; col++) {
      if (kingPiece(chessboard[kingSquare.row][kingSquare.col],chessboard[row][col]) === true)
      {
        kingMoves.push(chessboard[row][col])
      };
    };
  };
  // Foreach loop to check if the king can move at all
  var cantMove: boolean = true;
  kingMoves.forEach((square) => {
    let updatedBoards: UpdatedArrays = updateBoard(chessboard[kingSquare.row][kingSquare.col], square, chessboard);
    let newChessboard: any[][] = updatedBoards.board;
    if (checkEvaluation(newChessboard[kingSquare.row][kingSquare.col],newChessboard[square.row][square.col],newChessboard).selfInCheck === false)
    {
      cantMove = false;
    };
    let revertedBoards = updateBoard(square, kingSquare, chessboard);
    newChessboard = revertedBoards.board;
    let updateSquare = newChessboard[square.row][square.col];
    updateSquare.piece = updatedBoards.takenPiece.piece;
  });
  // Returning false is the king can move as it is not in checkmate
  if (!cantMove) {
    return false;
  };
  // Check if there's more than 1 pieces putting the king in check
  if (huntingPieces.length < 2) {
    // Stores all the squares between te hunt piece and king in an array
    const squaresBetween: CheckSquare[] = new Array(8);
    const dx = Math.sign(kingSquare.col - huntingPieces[0].col);
    const dy = Math.sign(kingSquare.row - huntingPieces[0].row);
    // Check each cell between the start and end positions
    for (let x: number = huntingPieces[0].col + dx, y: number = huntingPieces[0].row + dy; x !== kingSquare.col|| y !== kingSquare.row; x += dx, y += dy) {
      squaresBetween.push(chessboard[y][x])
    };
    // Looping through each square between hunt piece and king to see if any of your own pieces can block the hunt pieces move
    let canBlock: boolean = false;
    squaresBetween.forEach((square) => {
      for (let row = 0; row < chessboard.length; row++) { 
        for (let col = 0; col < chessboard[row].length; col++) {
          if (chessboard[row][col].piece.type === "Rook" && chessboard[row][col].piece.color === chessboard[kingSquare.row][kingSquare.col].piece.color){
            if(rookPiece(chessboard[row][col], square, chessboard)=== true)
            {
              canBlock = true;
            }
          };
          if (chessboard[row][col].piece.type === "Bishop" && chessboard[row][col].piece.color === chessboard[kingSquare.row][kingSquare.col].piece.color){
            if(bishopPiece(chessboard[row][col], square, chessboard)=== true)
            {
              canBlock = true;
            }
          };
          if (chessboard[row][col].piece.type === "Queen" && chessboard[row][col].piece.color === chessboard[kingSquare.row][kingSquare.col].piece.color){
            if(queenPiece(chessboard[row][col], square, chessboard)=== true)
            { 
              canBlock = true;
            }
          };
          if (chessboard[row][col].piece.type === "Pawn" && chessboard[row][col].piece.color === chessboard[kingSquare.row][kingSquare.col].piece.color){
            if(pawnPiece(chessboard[row][col], square)=== true)
            {
              canBlock = true;
            }
          };
          if (chessboard[row][col].piece.type === "Knight" && chessboard[row][col].piece.color === chessboard[kingSquare.row][kingSquare.col].piece.color){
            if(knightPiece(chessboard[row][col], square)=== true)
            {
              canBlock = true;
            }
          };
        };
      };
    });
    // Returning false if a piece can block the hunt pieces move
    if (canBlock) {
      return false;
    };
    // Looping through each of your own pieces to see if they can take the hunting piece
    let canDestroy: boolean = false;
    for (let row = 0; row < chessboard.length; row++) { 
      for (let col = 0; col < chessboard[row].length; col++) {
        if (chessboard[row][col].piece.type === "Rook" && chessboard[row][col].piece.color === chessboard[kingSquare.row][kingSquare.col].piece.color){
          if(rookPiece(chessboard[row][col], chessboard[huntingPieces[0].row][huntingPieces[0].col], chessboard)=== true)
          {
            canBlock = true;
          }
        };
        if (chessboard[row][col].piece.type === "Bishop" && chessboard[row][col].piece.color === chessboard[kingSquare.row][kingSquare.col].piece.color){
          if(bishopPiece(chessboard[row][col], chessboard[huntingPieces[0].row][huntingPieces[0].col], chessboard)=== true)
          { 
            canBlock = true;
          }
        };
        if (chessboard[row][col].piece.type === "Queen" && chessboard[row][col].piece.color === chessboard[kingSquare.row][kingSquare.col].piece.color){
          if(queenPiece(chessboard[row][col], chessboard[huntingPieces[0].row][huntingPieces[0].col], chessboard)=== true)
          { 
            canBlock = true;
          }
        };
        if (chessboard[row][col].piece.type === "Pawn" && chessboard[row][col].piece.color === chessboard[kingSquare.row][kingSquare.col].piece.color){
          if(pawnPiece(chessboard[row][col], chessboard[huntingPieces[0].row][huntingPieces[0].col])=== true)
          { 
            canBlock = true;
          }
        };
        if (chessboard[row][col].piece.type === "Knight" && chessboard[row][col].piece.color === chessboard[kingSquare.row][kingSquare.col].piece.color){
          if(knightPiece(chessboard[row][col], chessboard[huntingPieces[0].row][huntingPieces[0].col])=== true)
          { 
            canBlock = true;
          }
        };
      };
    };
    // Return false if one of your piece can take the hunting piece
    if (canDestroy) {
      return false;
    };
  };
  // Returning true to say your in checkmate
  return true;
};