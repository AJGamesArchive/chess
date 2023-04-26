import { CheckDetails } from "../../types/chessboard/CheckDetails";
import { resetSquareColor } from "./ResetSquareColor";

// Function that either highlights the squares on the board that are in check or un-highlights the board squares that were previously in check, depending on given params
export function checkHighlight(checkState: CheckDetails, chessboard: any[][], highlightColor: string, darkSquareColor: string, huntHighlightColor: string, highlight: boolean): any[][] {
  if (highlight) {
    let kingsSquare: any = chessboard[checkState.kingInCheckSquare.row][checkState.kingInCheckSquare.col];
    kingsSquare.color = highlightColor;
    for (const square of checkState.puttingInCheckSquare) {
      let pieceSquare = chessboard[square.row][square.col];
      pieceSquare.color = huntHighlightColor;
    };
  } else {
    let kingsSquare: any = chessboard[checkState.kingInCheckSquare.row][checkState.kingInCheckSquare.col];
    kingsSquare.color = resetSquareColor("#FFFFFF", darkSquareColor, kingsSquare);
    for (const square of checkState.puttingInCheckSquare) {
      let pieceSquare = chessboard[square.row][square.col];
      pieceSquare.color = resetSquareColor("#FFFFFF", darkSquareColor, pieceSquare);
    };
  }
  return chessboard;
}