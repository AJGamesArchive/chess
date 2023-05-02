import { UpdatedArrays } from "../../types/chessboard/UpdatedArrays";
import { Piece } from "../../types/chessboard/Piece";

// Function that moves pieces around the board by setting the target square piece to the source square piece and then removing the piece from the source square
export function updateBoard(sourceSquare: any, targetSquare: any, chessboard: any[][]): UpdatedArrays {
  let updatedArray: UpdatedArrays = {
    board: [],
    takenPiece: {
      color: '',
      piece: {
        color: 'any',
        type: 'Blank',
      },
    },
  };
  let newChessboard = Array.from(chessboard);
  let updateTargetSquare = newChessboard[targetSquare.row][targetSquare.col];
  if (updateTargetSquare.piece.type !== "Blank") {
    updatedArray.takenPiece = calcTakenPiece(updateTargetSquare);
  };
  updateTargetSquare.piece = sourceSquare.piece;
  let updateSourceSquare = newChessboard[sourceSquare.row][sourceSquare.col];
  updateSourceSquare.piece = {type: "Blank", color: "any"};
  updatedArray.board = newChessboard;
  return updatedArray;
};

// Function to calculate what piece has been taken and unlinks the reference from chessboard array
function calcTakenPiece(square: any): Piece {
  let takenPiece: Piece = {
    color: '',
    piece: {
      color: '',
      type: '',
    },
  };
  if (square.piece.color === "white") {
    takenPiece.piece.color = 'white';
  } else {
    takenPiece.piece.color = 'black';
  };
  if (square.piece.type === "Pawn") {
    takenPiece.piece.type = "Pawn";
  };
  if (square.piece.type === "Rook") {
    takenPiece.piece.type = "Rook";
  };
  if (square.piece.type === "Knight") {
    takenPiece.piece.type = "Knight";
  };
  if (square.piece.type === "Bishop") {
    takenPiece.piece.type = "Bishop";
  };
  if (square.piece.type === "Queen") {
    takenPiece.piece.type = "Queen";
  };
  if (square.piece.type === "King") {
    takenPiece.piece.type = "King";
  };
  return takenPiece;
};