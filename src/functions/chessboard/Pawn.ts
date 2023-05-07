// function for checking if the selected piece destination is legal for the pawn
import { isPathClear } from "./ispathclear";
export function pawnPiece(sourceSquare: any, targetSquare: any, chessboard: any[][]): boolean{
  
  //checks if its the pawns first move and if yes allows it to move up to two squares forward
  if (sourceSquare.piece.color === targetSquare.piece.color)
  {
    return false;
  }
  else if (sourceSquare.piece.color === "white")
  {
    if (sourceSquare.row === 1)
  {
    if ((targetSquare.piece.type !== "Blank" && ( targetSquare.col === (sourceSquare.col + 1) || targetSquare.col === (sourceSquare.col - 1 ))&& (targetSquare.row === sourceSquare.row + 1)))
    {
      return true;
    }
    else if ((targetSquare.row > sourceSquare.row && targetSquare.row < (sourceSquare.row + 3) ) && (targetSquare.col === sourceSquare.col) && (targetSquare.piece.type === "Blank"))
    {
      if (isPathClear(chessboard, sourceSquare,targetSquare) === true)
    {
      return true;
    }
    }
  }
  if ((targetSquare.piece.type !== "Blank" && ( targetSquare.col === (sourceSquare.col + 1) || targetSquare.col === (sourceSquare.col - 1 ))&& (targetSquare.row === sourceSquare.row + 1)))
  {
    return true;
  }
  else if ((targetSquare.row > sourceSquare.row && targetSquare.row < (sourceSquare.row + 2)) && (targetSquare.col === sourceSquare.col) && (targetSquare.piece.type === "Blank"))
  {
    return true;
  }
  }

  if (sourceSquare.piece.color === targetSquare.piece.color)
  {
    return false;
  }
  else if (sourceSquare.piece.color === "black")
  {
    if (sourceSquare.row === 6)
    {
      if ((targetSquare.piece.type !== "Blank" && ( targetSquare.col === (sourceSquare.col + 1) || targetSquare.col === (sourceSquare.col - 1) )&& (targetSquare.row === sourceSquare.row - 1)))
      {
      return true;
      }
    else if ((targetSquare.row < sourceSquare.row && targetSquare.row > (sourceSquare.row - 3)) && (targetSquare.col === sourceSquare.col) && (targetSquare.piece.type === "Blank"))
     {
      if (isPathClear(chessboard, sourceSquare,targetSquare) === true)
    {
      return true;
    }
     }
    }
    if ((targetSquare.piece.type !== "Blank" && ( targetSquare.col === (sourceSquare.col + 1) || targetSquare.col === (sourceSquare.col - 1) )&& (targetSquare.row === sourceSquare.row - 1)))
    {
    return true;
    }
    else if ((targetSquare.row < sourceSquare.row && targetSquare.row > (sourceSquare.row - 2)) && (targetSquare.col === sourceSquare.col) && (targetSquare.piece.type === "Blank"))
    {
    return true;
    }
  }
  
  //TODO Currently you can take piece of your own color, that needs fixing
  return false;
}