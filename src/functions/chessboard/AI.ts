import { pawnPiece } from "./Pawn";
import { rookPiece } from "./Rook";
import { knightPiece } from "./Knight";
import { bishopPiece } from "./Bishop";
import { queenPiece } from "./Queen";
import { CheckSquare } from "../../types/chessboard/CheckDetails";
import { kingPiece } from "./King";

export function MoveGenerationTest (depth: number) {
    if (depth === 0){
        return 1;
    }
}

export function legalmoves (chessboard: any[][]):any
{

  const legalMovesList: any[] = new Array()
  
  type LegalMoves = {
    sourceSquare : CheckSquare,
    targetSquare : CheckSquare
  }

  var legalMoves: LegalMoves  = {
    sourceSquare : {row:-1 , col:-1},
    targetSquare : {row:-1,col:-1}
  };

  for (let row = 0; row < chessboard.length; row++) {
    for (let col = 0; col < chessboard[row].length; col++) {

      if (chessboard[row][col].piece.type === "Pawn"){
        for (let row2 = 0; row2 < chessboard.length; row2++) {
          for (let col2 = 0; col2 < chessboard[row2].length; col2++) {
            if (pawnPiece(chessboard[row][col],chessboard[row2][col2])=== true){
              legalMoves.sourceSquare = {row: chessboard[row][col], col: chessboard[row2][col2]}
              legalMovesList.push(legalMoves)
            }
          }}
      }

      if (chessboard[row][col].piece.type === "Rook"){
        for (let row2 = 0; row2 < chessboard.length; row2++) {
          for (let col2 = 0; col2 < chessboard[row2].length; col2++) {
            if (rookPiece(chessboard[row][col],chessboard[row2][col2],chessboard)=== true){
              legalMoves.sourceSquare = {row: chessboard[row][col], col: chessboard[row2][col2]}
              legalMovesList.push(legalMoves)
            }
          }}
      }

      if (chessboard[row][col].piece.type === "Knight"){
        for (let row2 = 0; row2 < chessboard.length; row2++) {
          for (let col2 = 0; col2 < chessboard[row2].length; col2++) {
            if (knightPiece(chessboard[row][col],chessboard[row2][col2])=== true){
              legalMoves.sourceSquare = {row: chessboard[row][col], col: chessboard[row2][col2]}
              legalMovesList.push(legalMoves)
            }
          }}
      }

      if (chessboard[row][col].piece.type === "Bishop"){
        for (let row2 = 0; row2 < chessboard.length; row2++) {
          for (let col2 = 0; col2 < chessboard[row2].length; col2++) {
            if (bishopPiece(chessboard[row][col],chessboard[row2][col2],chessboard)=== true){
              legalMoves.sourceSquare = {row: chessboard[row][col], col: chessboard[row2][col2]}
              legalMovesList.push(legalMoves)
            }
          }}
      }

      if (chessboard[row][col].piece.type === "Queen"){
        for (let row2 = 0; row2 < chessboard.length; row2++) {
          for (let col2 = 0; col2 < chessboard[row2].length; col2++) {
            if (queenPiece(chessboard[row][col],chessboard[row2][col2],chessboard)=== true){
              legalMoves.sourceSquare = {row: chessboard[row][col], col: chessboard[row2][col2]}
              legalMovesList.push(legalMoves)
            }
          }}
      }

      if (chessboard[row][col].piece.type === "King"){
        for (let row2 = 0; row2 < chessboard.length; row2++) {
          for (let col2 = 0; col2 < chessboard[row2].length; col2++) {
            if (kingPiece(chessboard[row][col],chessboard[row2][col2])=== true){
              legalMoves.sourceSquare = {row: chessboard[row][col], col: chessboard[row2][col2]}
              legalMovesList.push(legalMoves)
            }
          }}
      }
    }
  }
}

