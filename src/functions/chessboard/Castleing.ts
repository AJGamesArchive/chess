import { CastlePieceMove } from "../../types/chessboard/CastlePieceMove";

// Function to check if the player is trying to castle and check that it's a valid move if they are trying to castle
export function isCastleing(sourceSquare: any, targetSquare: any, chessboard: any[][], CastlePieces: CastlePieceMove): boolean {
  // Should return true if this move is allowed and false if it's not allowed
  // The source and target squares coming into this function are NOT certain to have a Rook and/or King on them nor are the pieces certain to be the same color
  // All of that will need checking
  if (sourceSquare.piece.color === "white") {
    if (sourceSquare.row === 0 && sourceSquare.col === 0 && sourceSquare.piece.type === "Rook") {
      if (targetSquare.row === 0 && targetSquare.col === 4 && targetSquare.piece.type === "King") {
        if (chessboard[0][1].piece.type === "Blank" && chessboard[0][2].piece.type === "Blank" && chessboard[0][3].piece.type === "Blank"){
          if (CastlePieces.whiteKing === false && CastlePieces.rookOneWhite === false)
          {
            return true;
          }
        }
        
      }
    }
    if (sourceSquare.row === 0 && sourceSquare.col === 4 && sourceSquare.piece.type === "King") {
      if (targetSquare.row === 0 && targetSquare.col === 0 && targetSquare.piece.type === "Rook") {
        if (chessboard[0][1].piece.type === "Blank" && chessboard[0][2].piece.type === "Blank" && chessboard[0][3].piece.type === "Blank"){
          if (CastlePieces.whiteKing === false && CastlePieces.rookOneWhite === false)
          {
            return true;
          }
        }
      }
    }
    if (sourceSquare.row === 0 && sourceSquare.col === 7 && sourceSquare.piece.type === "Rook") {
      if (targetSquare.row === 0 && targetSquare.col === 4 && targetSquare.piece.type === "King") {
        if (chessboard[0][5].piece.type === "Blank" && chessboard[0][6].piece.type === "Blank"){
          if (CastlePieces.whiteKing === false && CastlePieces.rookTwoWhite === false)
          {
            return true;
          }
        }
      }
    }
    if (sourceSquare.row === 0 && sourceSquare.col === 4 && sourceSquare.piece.type === "King") {
      if (targetSquare.row === 0 && targetSquare.col === 7 && targetSquare.piece.type === "Rook") {
        if (chessboard[0][5].piece.type === "Blank" && chessboard[0][6].piece.type === "Blank"){
          if (CastlePieces.whiteKing === false && CastlePieces.rookTwoWhite === false)
          {
            return true;
          }
        }
        
      }
    }
  } else {
    if (sourceSquare.row === 7 && sourceSquare.col === 0 && sourceSquare.piece.type === "Rook") {
      if (targetSquare.row === 7 && targetSquare.col === 4 && targetSquare.piece.type === "King") {
        if (chessboard[7][1].piece.type === "Blank" && chessboard[7][2].piece.type === "Blank" && chessboard[7][3].piece.type === "Blank"){
          if (CastlePieces.blackKing === false && CastlePieces.rookOneBlack === false)
          {
            return true;
          }
        }
      }
    }
    if (sourceSquare.row === 7 && sourceSquare.col === 4 && sourceSquare.piece.type === "King") {
      if (targetSquare.row === 7 && targetSquare.col === 0 && targetSquare.piece.type === "Rook") {
        if (chessboard[7][1].piece.type === "Blank" && chessboard[7][2].piece.type === "Blank" && chessboard[7][3].piece.type === "Blank"){
          if (CastlePieces.blackKing === false && CastlePieces.rookOneBlack === false)
          {
             return true;
          }   
        }
      }
    }
    if (sourceSquare.row === 7 && sourceSquare.col === 7 && sourceSquare.piece.type === "Rook") {
      if (targetSquare.row === 7 && targetSquare.col === 4 && targetSquare.piece.type === "King") {
        if (chessboard[7][5].piece.type === "Blank" && chessboard[7][6].piece.type === "Blank"){
          if (CastlePieces.blackKing === false && CastlePieces.rookTwoBlack === false)
          {
            return true;
          }
        }
      }
    }
    if (sourceSquare.row === 7 && sourceSquare.col === 4 && sourceSquare.piece.type === "King") {
      if (targetSquare.row === 7 && targetSquare.col === 7 && targetSquare.piece.type === "Rook") {
        if (chessboard[7][5].piece.type === "Blank" && chessboard[7][6].piece.type === "Blank"){
          if (CastlePieces.blackKing === false && CastlePieces.rookTwoBlack === false)
          {
            return true;
          }  
        }
      }
    }
  }
  //TODO Current does not require the squares the pieces move to to be empty, this needs fixing
  return false;
}

// Function that makes the castleing move on the chessboard is the move is allowed
// Can also undo the last move if move leaves king in check
export function carryOutCastleing(chessboard: any[][], source: any, target: any, undo: boolean): any[][] {
  console.log(source.piece, target.piece, undo); //! Remove later
  let newChessboard = Array.from(chessboard);
  let updateRookSource: any;
  let updateRookTarget: any;
  let updateKingSource: any;
  let updateKingTarget: any;
  //* Top Left Castle
  if ((source.row === 0 && source.col === 0) && (target.row === 0 && target.col === 4) || (target.row === 0 && target.col === 0) && (source.row === 0 && source.col === 4)) {
    updateRookSource = newChessboard[0][0];
    updateRookTarget = newChessboard[0][3];
    updateKingSource = newChessboard[0][4];
    updateKingTarget = newChessboard[0][2];
    console.log(updateRookSource.piece, updateRookTarget.piece, updateKingSource.piece, updateKingTarget.piece); //! Remove later
  }
  //* Top Right Castle
  if ((source.row === 0 && source.col === 7) && (target.row === 0 && target.col === 4) || (target.row === 0 && target.col === 7) && (source.row === 0 && source.col === 4)) {
    updateRookSource = newChessboard[0][7];
    updateRookTarget = newChessboard[0][5];
    updateKingSource = newChessboard[0][4];
    updateKingTarget = newChessboard[0][6];
  }
  //* Bottom Left Castle
  if ((source.row === 7 && source.col === 0) && (target.row === 7 && target.col === 4) || (target.row === 7 && target.col === 0) && (source.row === 7 && source.col === 4)) {
    updateRookSource = newChessboard[7][0];
    updateRookTarget = newChessboard[7][3];
    updateKingSource = newChessboard[7][4];
    updateKingTarget = newChessboard[7][2];
  }
  //* Bottom Right Castle
  if ((source.row === 7 && source.col === 7) && (target.row === 7 && target.col === 4) || (target.row === 7 && target.col === 7) && (source.row === 7 && source.col === 4)) {
    updateRookSource = newChessboard[7][7];
    updateRookTarget = newChessboard[7][5];
    updateKingSource = newChessboard[7][4];
    updateKingTarget = newChessboard[7][6];
  }
  // Making the move or undoing the move?
  if (undo) {
    updateKingSource.piece = updateKingTarget.piece;
    updateRookSource.piece = updateRookTarget.piece;
    updateKingTarget.piece = {type: "Blank", color: "any"};
    updateRookTarget.piece = {type: "Blank", color: "any"};
  } else {
    updateKingTarget.piece = updateKingSource.piece;
    updateRookTarget.piece = updateRookSource.piece;
    updateKingSource.piece = {type: "Blank", color: "any"};
    updateRookSource.piece = {type: "Blank", color: "any"};
  }
  return newChessboard;
}
