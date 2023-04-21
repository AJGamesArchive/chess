export function knightPiece(sourceSquare: any, targetSquare: any): boolean {
  if ((targetSquare.row === sourceSquare.row + 1 || targetSquare.row === sourceSquare.row - 1) && (targetSquare.col === sourceSquare.col + 3 || targetSquare.col + sourceSquare.col - 3))
  {
    return true;
  }
  else if ((targetSquare.col === sourceSquare.col + 1 || targetSquare.col === sourceSquare.col - 1) && (targetSquare.row === sourceSquare.row + 3 || targetSquare.row + sourceSquare.row - 3) )
  {
    return true;
  }
  return false;
  // This function takes in the source square and target square for a move
  // This function needs to validate that this move is valid for this piece
  // Return true if move is valid
  // Return false if move is invalid
}