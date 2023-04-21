// function for checking if the selected piece destination is legal for the pawn
export function pawnPiece(sourceSquare: any, targetSquare: any): boolean{
  //checks if its the pawns first move and if yes allows it to move up to two squares forward
  if (sourceSquare.piece.color === "white")
  {
    if (sourceSquare.row === 1)
  {
    if ((targetSquare.piece.type !== "Blank" && ( targetSquare.col === (sourceSquare.col + 1) || targetSquare.col === (sourceSquare.col - 1 ))&& (targetSquare.row === sourceSquare.row + 1)))
    {
      // setChessboard(updateBoard(sourceSquare, targetSquare, chessboard));
      // setIsSourceSelected(false);
      return true;
    }
    else if ((targetSquare.row > sourceSquare.row && targetSquare.row < (sourceSquare.row + 3)) && (targetSquare.col === sourceSquare.col) && (targetSquare.piece.type === "Blank"))
    {
      // setChessboard(updateBoard(sourceSquare, targetSquare, chessboard));
      // setIsSourceSelected(false);
      return true;
    }
  }
  if ((targetSquare.piece.type !== "Blank" && ( targetSquare.col === (sourceSquare.col + 1) || targetSquare.col === (sourceSquare.col - 1 ))&& (targetSquare.row === sourceSquare.row + 1)))
  {
    // setChessboard(updateBoard(sourceSquare, targetSquare, chessboard));
    // setIsSourceSelected(false);
    return true;
  }
  else if ((targetSquare.row > sourceSquare.row && targetSquare.row < (sourceSquare.row + 2)) && (targetSquare.col === sourceSquare.col) && (targetSquare.piece.type === "Blank"))
  {
    // setChessboard(updateBoard(sourceSquare, targetSquare, chessboard));
    // setIsSourceSelected(false);
    return true;
  }
  }

  if (sourceSquare.piece.color === "black")
  {
    if (sourceSquare.row === 6)
    {
      if ((targetSquare.piece.type !== "Blank" && ( targetSquare.col === (sourceSquare.col + 1) || targetSquare.col === (sourceSquare.col - 1) )&& (targetSquare.row === sourceSquare.row - 1)))
      {
      // setChessboard(updateBoard(sourceSquare, targetSquare, chessboard));
      // setIsSourceSelected(false);
      return true;
      }
    else if ((targetSquare.row < sourceSquare.row && targetSquare.row > (sourceSquare.row - 3)) && (targetSquare.col === sourceSquare.col) && (targetSquare.piece.type === "Blank"))
     {
      // setChessboard(updateBoard(sourceSquare, targetSquare, chessboard));
      // setIsSourceSelected(false);
      return true;
     }
    }
    if ((targetSquare.piece.type !== "Blank" && ( targetSquare.col === (sourceSquare.col + 1) || targetSquare.col === (sourceSquare.col - 1) )&& (targetSquare.row === sourceSquare.row - 1)))
    {
    // setChessboard(updateBoard(sourceSquare, targetSquare, chessboard));
    // setIsSourceSelected(false);
    return true;
    }
    else if ((targetSquare.row < sourceSquare.row && targetSquare.row > (sourceSquare.row - 2)) && (targetSquare.col === sourceSquare.col) && (targetSquare.piece.type === "Blank"))
    {
    // setChessboard(updateBoard(sourceSquare, targetSquare, chessboard));
    // setIsSourceSelected(false);
    return true;
    }
  }
  
  return false;
}