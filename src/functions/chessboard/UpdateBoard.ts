// Function that moves pieces around the board by setting the target square piece to the source square piece and then removing the piece from the source square
export function updateBoard(sourceSquare: any, targetSquare: any, chessboard: any[][]): any[][] {
  let newChessboard = Array.from(chessboard);
  let updateTargetSquare = newChessboard[targetSquare.row][targetSquare.col];
  updateTargetSquare.piece = sourceSquare.piece;
  let updateSourceSquare = newChessboard[sourceSquare.row][sourceSquare.col];
  updateSourceSquare.piece = {type: "Blank", color: "any"};
  return newChessboard;
}