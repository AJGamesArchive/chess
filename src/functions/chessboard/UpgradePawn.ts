// Function that upgrades a pawn to the selected piece when it reaches the end of the board
export function upgradePawn(chessboard: any[][], pawnSquare: any, upgradePiece: any): any[][] {
  let newChessboard = Array.from(chessboard);
  let updateSquare = newChessboard[pawnSquare.row][pawnSquare.col];
  updateSquare.piece.type = upgradePiece;
  return newChessboard;
};