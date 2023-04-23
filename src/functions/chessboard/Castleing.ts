import { CastlePieceMove } from "../../types/chessboard/CastlePieceMove";

// Function to check if the player is trying to castle and check that it's a valid move if they are trying to castle
export function isCastleing(sourceSquare: any, targetSquare: any, chessboard: any[][], CastlePieces: CastlePieceMove): boolean {
  // Should return true if this move is allowed and false if it's not allowed
  // The source and target squares coming into this function are NOT certain to have a Rook and/or King on them nor are the pieces certain to be the same color
  // All of that will need checking
  console.log("Ethan");
  if (sourceSquare.piece.color === "white") {
    if (sourceSquare.row === 0 && sourceSquare.col === 0 && sourceSquare.piece.type === "Rook") {
      if (targetSquare.row === 0 && targetSquare.col === 4 && targetSquare.piece.type === "King") {
        return true;
      }
    }
    if (sourceSquare.row === 0 && sourceSquare.col === 4 && sourceSquare.piece.type === "King") {
      if (targetSquare.row === 0 && targetSquare.col === 0 && targetSquare.piece.type === "Rook") {
        return true;
      }
    }
    console.log(sourceSquare, targetSquare, CastlePieces)
    if (sourceSquare.row === 0 && sourceSquare.col === 7 && sourceSquare.piece.type === "Rook") {
      if (targetSquare.row === 0 && targetSquare.col === 4 && targetSquare.piece.type === "King") {
        return true;
      }
    }
    if (sourceSquare.row === 0 && sourceSquare.col === 4 && sourceSquare.piece.type === "King") {
      if (targetSquare.row === 0 && targetSquare.col === 7 && targetSquare.piece.type === "Rook") {
        return true;
      }
    }
  } else {
    if (sourceSquare.row === 7 && sourceSquare.col === 0 && sourceSquare.piece.type === "Rook") {
      if (targetSquare.row === 7 && targetSquare.col === 4 && targetSquare.piece.type === "King") {
        return true;
      }
    }
    if (sourceSquare.row === 7 && sourceSquare.col === 4 && sourceSquare.piece.type === "King") {
      if (targetSquare.row === 7 && targetSquare.col === 0 && targetSquare.piece.type === "Rook") {
        return true;
      }
    }
    if (sourceSquare.row === 7 && sourceSquare.col === 7 && sourceSquare.piece.type === "Rook") {
      if (targetSquare.row === 7 && targetSquare.col === 4 && targetSquare.piece.type === "King") {
        return true;
      }
    }
    if (sourceSquare.row === 7 && sourceSquare.col === 4 && sourceSquare.piece.type === "King") {
      if (targetSquare.row === 7 && targetSquare.col === 7 && targetSquare.piece.type === "Rook") {
        return true;
      }
    }
  }
  //TODO Current does not require the squares the pieces move to to be empty, this needs fixing
  return false;
}

// Function that makes the castleing move on the chessboard is the move is allowed
export function carryOutCastleing(turn: string, chessboard: any[][], sourceSquare: any): any[][] {
  let newChessboard = Array.from(chessboard);
  if (turn === "w" && ((sourceSquare.row === 0 && sourceSquare.col === 7) || (sourceSquare.row === 0 && sourceSquare.col === 4))) {
    let updateRookSource = newChessboard[0][7];
    let updateRookTarget = newChessboard[0][5];
    let updateKingSource = newChessboard[0][4];
    let updateKingTarget = newChessboard[0][6];
    updateKingTarget.piece = updateKingSource.piece;
    updateRookTarget.piece = updateRookSource.piece;
    updateKingSource.piece = {type: "Blank", color: "any"};
    updateRookSource.piece = {type: "Blank", color: "any"};
  } else if (turn === "b" && ((sourceSquare.row === 7 && sourceSquare.col === 7) || (sourceSquare.row === 7 && sourceSquare.col === 4))) {
    let updateRookSource = newChessboard[7][7];
    let updateRookTarget = newChessboard[7][5];
    let updateKingSource = newChessboard[7][4];
    let updateKingTarget = newChessboard[7][6];
    updateKingTarget.piece = updateKingSource.piece;
    updateRookTarget.piece = updateRookSource.piece;
    updateKingSource.piece = {type: "Blank", color: "any"};
    updateRookSource.piece = {type: "Blank", color: "any"};
  } else if (turn === "w" && ((sourceSquare.row === 0 && sourceSquare.col === 0) || (sourceSquare.row === 0 && sourceSquare.col === 4))) {
    let updateRookSource = newChessboard [0] [0];
    let updateRookTarget = newChessboard [0] [3];
    let updateKingSource = newChessboard [0] [4];
    let updateKingTarget = newChessboard [0] [2];
    updateKingTarget.piece = updateKingSource.piece;
    updateRookTarget.piece = updateRookSource.piece;
    updateKingSource.piece = {type: "Blank", color: "any"};
    updateRookSource.piece = {type: "Blank", color: "any"};
  } else if (turn === "b" && ((sourceSquare.row === 7 && sourceSquare.col === 0) || (sourceSquare.row === 7 && sourceSquare.col === 4))) {
    let updateRookSource = newChessboard [7] [0];
    let updateRookTarget = newChessboard [7] [3];
    let updateKingSource = newChessboard [7] [4];
    let updateKingTarget = newChessboard [7] [2];
    updateKingTarget.piece = updateKingSource.piece;
    updateRookTarget.piece = updateRookSource.piece;
    updateKingSource.piece = {type: "Blank", color: "any"};
    updateRookSource.piece = {type: "Blank", color: "any"};
  }
  return newChessboard;
}