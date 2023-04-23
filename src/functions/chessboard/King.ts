export function kingPiece(sourceSquare: any, targetSquare: any): boolean {
  if (sourceSquare.piece.color === targetSquare.piece.color)
  {
    return false;
  }
  else if (targetSquare.row === sourceSquare.row - 1  && targetSquare.col === sourceSquare.col - 1) 
  {
    return true;
  }
  else if (targetSquare.col === sourceSquare.col - 1   && targetSquare.row === sourceSquare.row ) 
  {
    return true;
  }
  else if (targetSquare.col === sourceSquare.col - 1 && targetSquare.row === sourceSquare.row + 1) 
  {
    return true;
  }
  else if (targetSquare.col === sourceSquare.col  && targetSquare.row === sourceSquare.row - 1) 
  {
    return true;
  }
  else if (targetSquare.col === sourceSquare.col  && targetSquare.row === sourceSquare.row + 1) 
  {
    return true;
  }
  else if (targetSquare.col === sourceSquare.col + 1 && targetSquare.row === sourceSquare.row - 1) 
  {
    return true;
  }
  else if (targetSquare.col === sourceSquare.col + 1 && targetSquare.row === sourceSquare.row ) 
  {
    return true;
  }
  else if (targetSquare.col === sourceSquare.col + 1 && targetSquare.row === sourceSquare.row + 1) 
  {
    return true;
  }

  // This function takes in the source square and target square for a move
  // This function needs to validate that this move is valid for this piece
  // Return true if move is valid
  // Return false if move is invalid
  return false;
}