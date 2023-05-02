import { PawnLocation } from "../../types/chessboard/PawnLocation";

// Function that looks at the chessboard to see if a pawn has made it to the end of the board
// Returns true if one has, returns the pawn color, and square it's on
export function pawnLocationChecker(chessboard: any[][]): PawnLocation {
  let evaluation: PawnLocation;
  let pawnSquare: any;
  for (let col = 0; col < chessboard[0].length; col++) {
    if (chessboard[0][col].piece.type === "Pawn") {
      pawnSquare = chessboard[0][col];
      evaluation = {
        atEnd: true,
        color: 'black',
        square: pawnSquare,
      };
      return evaluation;
    };
  };
  for (let col = 0; col < chessboard[7].length; col++) {
    if (chessboard[7][col].piece.type === "Pawn") {
      pawnSquare = chessboard[7][col];
      evaluation = {
        atEnd: true,
        color: 'white',
        square: pawnSquare,
      };
      return evaluation;
    };
  };
  evaluation = {
    atEnd: false,
    color: '',
    square: ''
  };
  return evaluation;
};