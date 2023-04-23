// Function to check if the player is trying to castle and check that it's a valid move if they are trying to castle
export function isCastleing(sourceSquare: any, targetSquare: any, chessboard: any[][]): boolean {
  // Should return true if this move is allowed and false if it's not allowed
  // The source and target squares coming into this function are NOT certain to have a Rook and/or King on them nor are the pieces certain to be the same color
  // All of that will need checking
  console.log("Checking for Castleing");
  return false;
}

// Function that makes the castleing move on the chessboard is the move is allowed
export function carryOutCastleing(turn: string, chessboard: any[][]): any[][] {
  let newChessboard = Array.from(chessboard);
  if (turn === "w") {
    let updateRookSource = newChessboard[0][7];
    let updateRookTarget = newChessboard[0][5];
    let updateKingSource = newChessboard[0][4];
    let updateKingTarget = newChessboard[0][6];
    updateKingTarget.piece = updateKingSource.piece;
    updateRookTarget.piece = updateRookSource.piece;
    updateKingSource.piece = {type: "Blank", color: "any"};
    updateRookSource = {type: "Blank", color: "any"};
  } else {
    let updateRookSource = newChessboard[7][7];
    let updateRookTarget = newChessboard[7][5];
    let updateKingSource = newChessboard[7][4];
    let updateKingTarget = newChessboard[7][6];
    updateKingTarget.piece = updateKingSource.piece;
    updateRookTarget.piece = updateRookSource.piece;
    updateKingSource.piece = {type: "Blank", color: "any"};
    updateRookSource = {type: "Blank", color: "any"};
  }
  return newChessboard;
}