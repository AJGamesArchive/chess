export function bishopPiece(sourceSquare: any, targetSquare: any): boolean {
  if (sourceSquare.piece.color === targetSquare.piece.color)
  {
    return false;
  }
  else if(targetSquare.col === sourceSquare.col + 1 && targetSquare.row === sourceSquare.row + 1 )
  {
    return true;
  }
  else if(targetSquare.col === sourceSquare.col + 2 && targetSquare.row === sourceSquare.row + 2 )
  {
    return true;
  }
  else if(targetSquare.col === sourceSquare.col + 3 && targetSquare.row === sourceSquare.row + 3 )
  {
    return true;
  }
  else if(targetSquare.col === sourceSquare.col + 4 && targetSquare.row === sourceSquare.row + 4 )
  {
    return true;
  }
  else if(targetSquare.col === sourceSquare.col + 5 && targetSquare.row === sourceSquare.row + 5 )
  {
    return true;
  }
  else if(targetSquare.col === sourceSquare.col + 6 && targetSquare.row === sourceSquare.row + 6 )
  {
    return true;
  }
  else if(targetSquare.col === sourceSquare.col + 7 && targetSquare.row === sourceSquare.row + 7 )
  {
    return true;
  }



  else if(targetSquare.col === sourceSquare.col + 1 && targetSquare.row === sourceSquare.row - 1 )
  {
    return true;
  }else if(targetSquare.col === sourceSquare.col + 2 && targetSquare.row === sourceSquare.row - 2 )
  {
    return true;
  }else if(targetSquare.col === sourceSquare.col + 3 && targetSquare.row === sourceSquare.row - 3 )
  {
    return true;
  }else if(targetSquare.col === sourceSquare.col + 4 && targetSquare.row === sourceSquare.row - 4 )
  {
    return true;
  }else if(targetSquare.col === sourceSquare.col + 5 && targetSquare.row === sourceSquare.row - 5 )
  {
    return true;
  }else if(targetSquare.col === sourceSquare.col + 6 && targetSquare.row === sourceSquare.row - 6 )
  {
    return true;
  }else if(targetSquare.col === sourceSquare.col + 7 && targetSquare.row === sourceSquare.row - 7 )
  {
    return true;
  }
  


  else if(targetSquare.col === sourceSquare.col - 1 && targetSquare.row === sourceSquare.row + 1 )
  {
    return true;
  }else if(targetSquare.col === sourceSquare.col - 2 && targetSquare.row === sourceSquare.row + 2 )
  {
    return true;
  }else if(targetSquare.col === sourceSquare.col - 3 && targetSquare.row === sourceSquare.row + 3 )
  {
    return true;
  }else if(targetSquare.col === sourceSquare.col - 4 && targetSquare.row === sourceSquare.row + 4 )
  {
    return true;
  }else if(targetSquare.col === sourceSquare.col - 5 && targetSquare.row === sourceSquare.row + 5 )
  {
    return true;
  }else if(targetSquare.col === sourceSquare.col - 6 && targetSquare.row === sourceSquare.row + 6 )
  {
    return true;
  }else if(targetSquare.col === sourceSquare.col - 7 && targetSquare.row === sourceSquare.row + 7 )
  {
    return true;
  }
  


  else if(targetSquare.col === sourceSquare.col - 1 && targetSquare.row === sourceSquare.row - 1 )
  {
    return true;
  }else if(targetSquare.col === sourceSquare.col - 2 && targetSquare.row === sourceSquare.row - 2 )
  {
    return true;
  }else if(targetSquare.col === sourceSquare.col - 3 && targetSquare.row === sourceSquare.row - 3 )
  {
    return true;
  }else if(targetSquare.col === sourceSquare.col - 4 && targetSquare.row === sourceSquare.row - 4 )
  {
    return true;
  }else if(targetSquare.col === sourceSquare.col - 5 && targetSquare.row === sourceSquare.row - 5 )
  {
    return true;
  }else if(targetSquare.col === sourceSquare.col - 6 && targetSquare.row === sourceSquare.row - 6 )
  {
    return true;
  }else if(targetSquare.col === sourceSquare.col - 7 && targetSquare.row === sourceSquare.row - 7 )
  {
    return true;
  }
  


  // This function takes in the source square and target square for a move
  // This function needs to validate that this move is valid for this piece
  // Return true if move is valid
  // Return false if move is invalid
  return false;
}