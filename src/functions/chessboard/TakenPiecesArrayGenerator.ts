import { Piece } from "../../types/chessboard/Piece";
import { resetSquareColor } from "./ResetSquareColor";

//TODO Remove unneeded code and add comments

export function createPiecesTakenArray(): Piece[][] {
  const takenPieces: Piece[][] = new Array(2);
  for (let row = 0; row < 2; row++) {
    takenPieces[row] = new Array(8);
    for (let col = 0; col < 8; col++) {
      const color = resetSquareColor('#FFFFFF', '#ff7072', {row: row, col: col})
      // const isLightSquare = (row + col) % 2 === 0;
      // const color = isLightSquare ? '#373737' : '#1e1e1e';
      takenPieces[row][col] = {
        color: color,
        piece: {
          color: 'any',
          type: 'Blank',
        },
      };
    };
  };
  return takenPieces;
};