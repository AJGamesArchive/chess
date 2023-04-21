export function rookPiece(sourceSquare: any, targetSquare: any): boolean {
  if ((sourceSquare.row === targetSquare.row || sourceSquare.col === targetSquare.col ))
  {
    return true;
  }
  // This function takes in the source square and target square for a move
  // This function needs to validate that this move is valid for this piece
  // Return true if move is valid
  // Return false if move is invalid
  return false;
}