import ChessBoard from "../../components/chessboard/Board";
import { isPathClear } from "./ispathclear";

export function rookPiece(sourceSquare: any, targetSquare: any, chessboard: any[][]): boolean {
  if (sourceSquare.piece.color === targetSquare.piece.color)
  {
    return false;
  }
  else if ((sourceSquare.row === targetSquare.row || sourceSquare.col === targetSquare.col ))
  {
    if (isPathClear(chessboard, sourceSquare,targetSquare) === true)
    {
      return true;
    }
    
  }
  
  // This function takes in the source square and target square for a move
  // This function needs to validate that this move is valid for this piece
  // Return true if move is valid
  // Return false if move is invalid
  return false;
}