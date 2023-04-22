export function knightPiece(sourceSquare: any, targetSquare: any): boolean {
  if ((targetSquare.row === sourceSquare.row + 1 && targetSquare.col === sourceSquare.col + 2 ) || (targetSquare.row === sourceSquare.row - 1 && targetSquare.col === sourceSquare.col - 2))
  {
    return true;
    
  }
  else if ((targetSquare.col === sourceSquare.col + 1 && targetSquare.row === sourceSquare.row + 2) || (targetSquare.col === sourceSquare.col - 1 && targetSquare.row === sourceSquare.row - 2))
  {
    return true;
  } else if ((targetSquare.row === sourceSquare.row - 1 && targetSquare.col === sourceSquare.col + 2 ) || (targetSquare.row === sourceSquare.row - 2 && targetSquare.col === sourceSquare.col + 1))
  {
    return true;
    
  }
  else if ((targetSquare.col === sourceSquare.col - 2 && targetSquare.row === sourceSquare.row + 1) || (targetSquare.col === sourceSquare.col - 1 && targetSquare.row === sourceSquare.row + 2))
  {
    return true;
  }


  return false;



  // This function takes in the source square and target square for a move
  // This function needs to validate that this move is valid for this piece
  // Return true if move is valid
  // Return false if move is invalid
}