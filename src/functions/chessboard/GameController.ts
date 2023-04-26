// Importing Game Functions
import { resetSquareColor } from "./ResetSquareColor";
import { checkEvaluation, checkHighlight, checkHandler } from "./Check";

// Importing Movement Functions
import { isCastleing, carryOutCastleing } from "./Castleing";
import { updateBoard } from "./UpdateBoard";

// Importing Piece Function
import { pawnPiece } from "./Pawn";
import { rookPiece } from "./Rook";
import { knightPiece } from "./Knight";
import { bishopPiece } from "./Bishop";
import { queenPiece } from "./Queen";
import { kingPiece } from "./King";

// Importing Types
import { CheckDetails } from "../../types/chessboard/CheckDetails";
import { GameControl } from "../../types/chessboard/GameControl";

// Declaring variable to keep track of whether or not a source square has been selected
var isSourceSelect: boolean = false

// Declaring variables to store source and target squares selected on the board for each move
var sourceSquare: any = {row: NaN, col: NaN, piece: {type: "Blank", color: "any"}, color: ""};

// Declaring variables to store the color used to highlight squares
const highlighter: string = "#eeff00";
const checkHighlighter: string = "#ffb947";
const huntHighlighter: string = "#ff80fd";
const checkMateHighlighter: string = "#ff5454";

function nextMove(board: any[][], darkSquareColor: string): any[][] {
  // Tell the system that there is no longer a source square selected
  isSourceSelect = false;
  // Updates main game array to un-highlight the selected source square
  let newChessboard = Array.from(board);
  let updateSquare = newChessboard[sourceSquare.row][sourceSquare.col];
  updateSquare.color = resetSquareColor("#FFFFFF", darkSquareColor, updateSquare);
  return newChessboard;
}

// Function to handle each move of the game and control the main flow of the game
export function GameController(
  chessboard: any[][],
  clickedSquare: any,
  turn: string,
  darkSquareColor: string,
  kingWMoved: boolean,
  kingbMoved: boolean,
  rook1WMoved: boolean,
  rook2WMoved: boolean,
  rook1BMoved: boolean,
  rook2BMoved: boolean,
): GameControl {
  // Declare variable that will be returned
  var control: GameControl;
  // If statement to check if a source square has been selected
  // If there's no source square, function will attempt to get a source square
  // If there is a source square, function will attempt to get a target square
  if (!isSourceSelect) {
    // Attempting to get a source square
    // Guard statement to check if the selected square has a piece, will return is square is empty
    if (clickedSquare.piece.type === "Blank") {
      // Return needed data
      control = {
        board: chessboard,
        switchTurn: false,
        lockBoard: false
      };
      return control;
    }
    // Guard statement to check if the correct color piece is being moved for the current player turn
    if ((clickedSquare.piece.color === "white" && turn === "b") || (clickedSquare.piece.color === "black" && turn === "w")) {
      // Return needed data
      control = {
        board: chessboard,
        switchTurn: false,
        lockBoard: false
      };
      return control;
    }
    // Tells system that a source square has been selected
    isSourceSelect = true;
    // Saves a copy of the selected source square
    sourceSquare = clickedSquare;
    // Updates main game array to highlight the selected source square
    let newChessboard = Array.from(chessboard);
    let updateSquare = newChessboard[clickedSquare.row][clickedSquare.col];
    updateSquare.color = highlighter;
    // Return needed data
    control = {
      board: newChessboard,
      switchTurn: false,
      lockBoard: false
    };
    return control;
  } else {
    // Attempting to get a target square
    // Check if the target square is the same as the source square, will unselect the source square if true
    if (clickedSquare === sourceSquare) {
      // Reset all square colors to normal
      let newChessboard = nextMove(chessboard, darkSquareColor);
      // Return needed data
      control = {
        board: newChessboard,
        switchTurn: false,
        lockBoard: false
      };
      return control;
    }
    // Check if the player is castleing;
    if (isCastleing(sourceSquare, clickedSquare, chessboard, {
      whiteKing: kingWMoved,
      blackKing: kingbMoved,
      rookOneWhite: rook1WMoved,
      rookTwoWhite: rook2WMoved,
      rookOneBlack: rook1BMoved,
      rookTwoBlack: rook2BMoved
    })) {
      // Carry out the castleing move on the chess board
      let newChessboard: any[][] = carryOutCastleing(chessboard, sourceSquare, clickedSquare, false);
      // Work out if anyone is in check and highlight the board accordingly
      let allowMove = checkHandler(newChessboard, sourceSquare, clickedSquare, checkHighlighter, darkSquareColor, huntHighlighter);
      newChessboard = allowMove.board;
      if (allowMove.allowMove) {
        // Reset all square colors to normal
        newChessboard = nextMove(newChessboard, darkSquareColor);
        // Return needed data
        control = {
          board: newChessboard,
          switchTurn: true,
          lockBoard: false
        };
      } else {
        // Return needed data
        control = {
          board: newChessboard,
          switchTurn: false,
          lockBoard: false
        };
      }
      return control;
    } else {
      // Finds what piece is being moved and calls corresponding function
      if (sourceSquare.piece.type === "Pawn") {
        // Guard statement to check if the selected move is valid, will return if move is not valid
        if (!pawnPiece(sourceSquare, clickedSquare)) {
          // Return needed data
          control = {
            board: chessboard,
            switchTurn: false,
            lockBoard: false
          };
          return control;
        }
      };
      if (sourceSquare.piece.type === "Rook") {
        // Guard statement to check if the selected move is valid, will return if move is not valid
        if (!rookPiece(sourceSquare, clickedSquare)) {
          // Return needed data
          control = {
            board: chessboard,
            switchTurn: false,
            lockBoard: false
          };
          return control;
        }
      };
      if (sourceSquare.piece.type === "Knight") {
        // Guard statement to check if the selected move is valid, will return if move is not valid
        if (!knightPiece(sourceSquare, clickedSquare)) {
          // Return needed data
          control = {
            board: chessboard,
            switchTurn: false,
            lockBoard: false
          };
          return control;
        }
      };
      if (sourceSquare.piece.type === "Bishop") {
        // Guard statement to check if the selected move is valid, will return if move is not valid
        if (!bishopPiece(sourceSquare, clickedSquare)) {
          // Return needed data
          control = {
            board: chessboard,
            switchTurn: false,
            lockBoard: false
          };
          return control;
        }
      };
      if (sourceSquare.piece.type === "Queen") {
        // Guard statement to check if the selected move is valid, will return if move is not valid
        if (!queenPiece(sourceSquare, clickedSquare)) {
          // Return needed data
          control = {
            board: chessboard,
            switchTurn: false,
            lockBoard: false
          };
          return control;
        }
      };
      if (sourceSquare.piece.type === "King") {
        // Guard statement to check if the selected move is valid, will return if move is not valid
        if (!kingPiece(sourceSquare, clickedSquare)) {
          // Return needed data
          control = {
            board: chessboard,
            switchTurn: false,
            lockBoard: false
          };
          return control;
        }
      };
      // Move the piece from the source square to the target square
      let newChessboard: any[][] = updateBoard(sourceSquare, clickedSquare, chessboard);
      // Work out if anyone is in check and highlight the board accordingly
      let allowMove = checkHandler(newChessboard, sourceSquare, clickedSquare, checkHighlighter, darkSquareColor, huntHighlighter);
      newChessboard = allowMove.board;
      if (allowMove.allowMove) {
        // Reset all square colors to normal
        newChessboard = nextMove(newChessboard, darkSquareColor);
        // Return needed data
        control = {
          board: newChessboard,
          switchTurn: true,
          lockBoard: false
        };
      } else {
        // Return needed data
        control = {
          board: newChessboard,
          switchTurn: false,
          lockBoard: false
        };
      }
      return control;
    };
  };
};