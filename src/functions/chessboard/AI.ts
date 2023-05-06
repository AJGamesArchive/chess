import { pawnPiece } from "./Pawn";
import { rookPiece } from "./Rook";
import { knightPiece } from "./Knight";
import { bishopPiece } from "./Bishop";
import { queenPiece } from "./Queen";
import { kingPiece } from "./King";

export function MoveGenerationTest (depth: number) {
    if (depth === 0){
        return 1;
    };
};

export function AIlegalMoves (chessboard: any[][], turn: string):any
{

  const legalMovesList: LegalMoves[] = new Array()
  
  type LegalMoves = {
    sourceSquare : any;
    targetSquare : any;
  };

  var legalMoves: LegalMoves  = {
    sourceSquare : {},
    targetSquare : {},
  };

  for (let row = 0; row < chessboard.length; row++) {
    for (let col = 0; col < chessboard[row].length; col++) {

      if (chessboard[row][col].piece.type === "Pawn" && chessboard[row][col].piece.color === "black" ){
        for (let row2 = 0; row2 < chessboard.length; row2++) {
          for (let col2 = 0; col2 < chessboard[row2].length; col2++) {
            if (pawnPiece(chessboard[row][col],chessboard[row2][col2])=== true){
              legalMoves = {
                sourceSquare: chessboard[row][col],
                targetSquare: chessboard[row2][col2],
              };
              legalMovesList.push(legalMoves);
              
            };
          }};
      };

      if (chessboard[row][col].piece.type === "Rook" && chessboard[row][col].piece.color === "black" ){
        for (let row2 = 0; row2 < chessboard.length; row2++) {
          for (let col2 = 0; col2 < chessboard[row2].length; col2++) {
            if (rookPiece(chessboard[row][col],chessboard[row2][col2],chessboard)=== true){
              legalMoves = {
                sourceSquare: chessboard[row][col],
                targetSquare: chessboard[row2][col2],
              };
              legalMovesList.push(legalMoves);
            };
          }};
      };

      if (chessboard[row][col].piece.type === "Knight" && chessboard[row][col].piece.color === "black" ){
        for (let row2 = 0; row2 < chessboard.length; row2++) {
          for (let col2 = 0; col2 < chessboard[row2].length; col2++) {
            if (knightPiece(chessboard[row][col],chessboard[row2][col2])=== true){
              legalMoves = {
                sourceSquare: chessboard[row][col],
                targetSquare: chessboard[row2][col2],
              };
              legalMovesList.push(legalMoves);
            };
          }};
      };

      if (chessboard[row][col].piece.type === "Bishop" && chessboard[row][col].piece.color === "black" ){
        for (let row2 = 0; row2 < chessboard.length; row2++) {
          for (let col2 = 0; col2 < chessboard[row2].length; col2++) {
            if (bishopPiece(chessboard[row][col],chessboard[row2][col2],chessboard)=== true){
              legalMoves = {
                sourceSquare: chessboard[row][col],
                targetSquare: chessboard[row2][col2],
              };
              legalMovesList.push(legalMoves);
            };
          }};
      };

      if (chessboard[row][col].piece.type === "Queen" && chessboard[row][col].piece.color === "black" ){
        for (let row2 = 0; row2 < chessboard.length; row2++) {
          for (let col2 = 0; col2 < chessboard[row2].length; col2++) {
            if (queenPiece(chessboard[row][col],chessboard[row2][col2],chessboard)=== true){
              legalMoves = {
                sourceSquare: chessboard[row][col],
                targetSquare: chessboard[row2][col2],
              };
              legalMovesList.push(legalMoves);
            };
          }};
      };

      if (chessboard[row][col].piece.type === "King" && chessboard[row][col].piece.color === "black" ){
        for (let row2 = 0; row2 < chessboard.length; row2++) {
          for (let col2 = 0; col2 < chessboard[row2].length; col2++) {
            if (kingPiece(chessboard[row][col],chessboard[row2][col2])=== true){
              legalMoves = {
                sourceSquare: chessboard[row][col],
                targetSquare: chessboard[row2][col2],
              };
              legalMovesList.push(legalMoves);
            };
          }};
      };
    };
  };
  return legalMovesList;
};