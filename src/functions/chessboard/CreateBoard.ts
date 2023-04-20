function getPiece(char: string) {
  switch (char){
    case "K":
      return {type:"King", color: "white"};
    case "Q":
        return {type: "Queen", color: "white"};
    case  "B":
        return {type: "Bishop", color: "white"};
    case "N":
        return {type: "Knight", color: "white"};
    case "R":
        return {type: "Rook", color: "white"};
    case "P":
        return {type: "Pawn", color: "white"};
    case "k":
      return {type:"King", color: "black"};
    case "q":
        return {type: "Queen", color: "black"};
    case  "b":
        return {type: "Bishop", color: "black"};
    case "n":
        return {type: "Knight", color: "black"};
    case "r":
        return {type: "Rook", color: "black"};
    case "p":
        return {type: "Pawn", color: "black"};
    default:
        return null;
  };
};

export function CreateBoard(lightSquareClr: string, darkSquareClr: string): any[][] {
  const Rows = 8;
  const Cols = 8;

  const startingPosition = [
      "RNBQKBNR",
      "PPPPPPPP",
      "        ",
      "        ",
      "        ",
      "        ",
      "pppppppp",
      "rnbqkbne"
  ];

  const lightSquare = lightSquareClr;
  const darkSquare = darkSquareClr;

  const chessBoard = new Array(Rows);

  for(let row = 0; row < Rows; row++){
      chessBoard[row] = new Array(Cols);

      for (let col = 0; col < Cols; col++){
          const isLightsquare = (row + col) % 2 ===0;
          const piece = getPiece(startingPosition[row][col]);
          const color = isLightsquare ? lightSquareClr : darkSquareClr;

          chessBoard[row][col] = {
              row,
              col,
              color,
              piece,
          };
      };
  };

  return chessBoard;
};

