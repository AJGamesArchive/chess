import { pawnPiece } from "./Pawn";
import { rookPiece } from "./Rook";
import { knightPiece } from "./Knight";
import { bishopPiece } from "./Bishop";
import { queenPiece } from "./Queen";
import { kingPiece } from "./King";
import { updateBoard } from "./UpdateBoard";
import { UpdatedArrays } from "../../types/chessboard/UpdatedArrays";
import { infinite } from "ionicons/icons";

const pawnValue = 100;
const knightValue = 300;
const bishopValue = 300;
const rookValue = 500;
const queenValue = 900;
const kingValue = 1000;

var bestMove: LegalMoves;
var savedPiece: any = undefined;

type Move = {
  sourceSquare : any;
  targetSquare : any;
};

type LegalMoves = {
  ID: number;
  move: Move;
};

var legalMovesList: LegalMoves[] = new Array();
var responseMovesList: LegalMoves[] = new Array();

var moveCounter: number = 0;
var responseMoveCounter: number = 0;

export function AIlegalMoves (chessboard: any[][], turn: string): LegalMoves {

  legalMovesList = [];
  responseMovesList = [];

  moveCounter = 0;
  responseMoveCounter = 0;

  const AIColor = (turn === "w") ? "white" : "black";

  var legalMoves: LegalMoves  = {
    ID: 0,
    move: {
      sourceSquare: "",
      targetSquare: "",
    },
  };

  for (let row = 0; row < chessboard.length; row++) {
    for (let col = 0; col < chessboard[row].length; col++) {
      if (chessboard[row][col].piece.type === "Pawn" && chessboard[row][col].piece.color === AIColor ){
        for (let row2 = 0; row2 < chessboard.length; row2++) {
          for (let col2 = 0; col2 < chessboard[row2].length; col2++) {
            if (pawnPiece(chessboard[row][col],chessboard[row2][col2],chessboard)=== true){ 
              if (AIlegalMovesLookAhead(chessboard[row][col], chessboard[row2][col2], chessboard, turn)) {
                // VALID AI Move
                legalMoves = {
                  ID: moveCounter,
                  move: {
                    sourceSquare: chessboard[row][col],
                    targetSquare: chessboard[row2][col2],
                  },
                };
                legalMovesList.push(legalMoves)
                moveCounter += 1;
              };
              // INVALID AI MOVE 
            };
          };
        };
      };
      if (chessboard[row][col].piece.type === "Rook" && chessboard[row][col].piece.color === AIColor ){
        for (let row2 = 0; row2 < chessboard.length; row2++) {
          for (let col2 = 0; col2 < chessboard[row2].length; col2++) {
            if (rookPiece(chessboard[row][col],chessboard[row2][col2],chessboard)=== true){ 
              if (AIlegalMovesLookAhead(chessboard[row][col], chessboard[row2][col2], chessboard, turn)) {
                // VALID AI Move
                legalMoves = {
                  ID: moveCounter,
                  move: {
                    sourceSquare: chessboard[row][col],
                    targetSquare: chessboard[row2][col2],
                  },
                };
                legalMovesList.push(legalMoves)
                moveCounter += 1;
              };
              // INVALID AI MOVE 
            };
          };
        };
      };
      if (chessboard[row][col].piece.type === "Bishop" && chessboard[row][col].piece.color === AIColor ){
        for (let row2 = 0; row2 < chessboard.length; row2++) {
          for (let col2 = 0; col2 < chessboard[row2].length; col2++) {
            if (bishopPiece(chessboard[row][col],chessboard[row2][col2],chessboard)=== true){ 
              if (AIlegalMovesLookAhead(chessboard[row][col], chessboard[row2][col2], chessboard, turn)) {
                // VALID AI Move
                legalMoves = {
                  ID: moveCounter,
                  move: {
                    sourceSquare: chessboard[row][col],
                    targetSquare: chessboard[row2][col2],
                  },
                };
                legalMovesList.push(legalMoves)
                moveCounter += 1;
              };
              // INVALID AI MOVE 
            };
          };
        };
      };
      if (chessboard[row][col].piece.type === "Knight" && chessboard[row][col].piece.color === AIColor ){
        for (let row2 = 0; row2 < chessboard.length; row2++) {
          for (let col2 = 0; col2 < chessboard[row2].length; col2++) {
            if (knightPiece(chessboard[row][col],chessboard[row2][col2])=== true){ 
              if (AIlegalMovesLookAhead(chessboard[row][col], chessboard[row2][col2], chessboard, turn)) {
                // VALID AI Move
                legalMoves = {
                  ID: moveCounter,
                  move: {
                    sourceSquare: chessboard[row][col],
                    targetSquare: chessboard[row2][col2],
                  },
                };
                legalMovesList.push(legalMoves)
                moveCounter += 1;
              };
              // INVALID AI MOVE 
            };
          };
        };
      };
      if (chessboard[row][col].piece.type === "Queen" && chessboard[row][col].piece.color === AIColor ){
        for (let row2 = 0; row2 < chessboard.length; row2++) {
          for (let col2 = 0; col2 < chessboard[row2].length; col2++) {
            if (queenPiece(chessboard[row][col],chessboard[row2][col2],chessboard)=== true){ 
              if (AIlegalMovesLookAhead(chessboard[row][col], chessboard[row2][col2], chessboard, turn)) {
                // VALID AI Move
                legalMoves = {
                  ID: moveCounter,
                  move: {
                    sourceSquare: chessboard[row][col],
                    targetSquare: chessboard[row2][col2],
                  },
                };
                legalMovesList.push(legalMoves)
                moveCounter += 1;
              };
              // INVALID AI MOVE 
            };
          };
        };
      };
      if (chessboard[row][col].piece.type === "King" && chessboard[row][col].piece.color === AIColor ){
        for (let row2 = 0; row2 < chessboard.length; row2++) {
          for (let col2 = 0; col2 < chessboard[row2].length; col2++) {
            if (kingPiece(chessboard[row][col],chessboard[row2][col2])=== true){ 
              if (AIlegalMovesLookAhead(chessboard[row][col], chessboard[row2][col2], chessboard, turn)) {
                // VALID AI Move
                legalMoves = {
                  ID: moveCounter,
                  move: {
                    sourceSquare: chessboard[row][col],
                    targetSquare: chessboard[row2][col2],
                  },
                };
                legalMovesList.push(legalMoves)
                moveCounter += 1;
              };
              // INVALID AI MOVE 
            };
          };
        };
      };
    };
  };
  const moveScore: number = Search(1, chessboard, turn, legalMovesList);
  if (moveScore <= 10800) {
    bestMove = legalMovesList[Math.floor(Math.random() * legalMovesList.length)];
  };
  return bestMove;
};

function AIlegalMovesLookAhead(sourceSquare: any, targetSquare: any, chessboard: any[][], turn: string): boolean {

  const opponentCololr = (turn === "w") ? "black" : "white";

  // If statement to check if a piece will be taken when future move is evaluated and stores the piece getting taken
  //? System currently only works for looking 1 move into the future, does this need extending?
  if (targetSquare.piece.type !== "Blank") {
    if (savedPiece === undefined) {
      if (targetSquare.piece.type === "Pawn") {
        if (targetSquare.piece.color === "white") {
          savedPiece = {type: "Pawn", color: "white"};
        } else {
          savedPiece = {type: "Pawn", color: "black"};
        };
      };
      if (targetSquare.piece.type === "Rook") {
        if (targetSquare.piece.color === "white") {
          savedPiece = {type: "Rook", color: "white"};
        } else {
          savedPiece = {type: "Rook", color: "black"};
        };
      };
      if (targetSquare.piece.type === "Bishop") {
        if (targetSquare.piece.color === "white") {
          savedPiece = {type: "Bishop", color: "white"};
        } else {
          savedPiece = {type: "Bishop", color: "black"};
        };
      };
      if (targetSquare.piece.type === "Knight") {
        if (targetSquare.piece.color === "white") {
          savedPiece = {type: "Knight", color: "white"};
        } else {
          savedPiece = {type: "Knight", color: "black"};
        };
      };
      if (targetSquare.piece.type === "Queen") {
        if (targetSquare.piece.color === "white") {
          savedPiece = {type: "Queen", color: "white"};
        } else {
          savedPiece = {type: "Queen", color: "black"};
        };
      };
      if (targetSquare.piece.type === "King") {
        if (targetSquare.piece.color === "white") {
          savedPiece = {type: "King", color: "white"};
        } else {
          savedPiece = {type: "King", color: "black"};
        };
      };
    };
  };
  // Makes AI move on the board
  let updatedArrays: UpdatedArrays = updateBoard(sourceSquare, targetSquare, chessboard);
  let newChessboard: any[][] = updatedArrays.board;

  // Track whether the AI move is valid or not
  let validAIMove: boolean = true;

  var responseMoves: LegalMoves  = {
    ID: 0,
    move: {
      sourceSquare: "",
      targetSquare: "",
    },
  };

  // Looping Here
  LoopStart: for (let row3 = 0; row3 < newChessboard.length; row3++) {
    for (let col3 = 0; col3 < newChessboard[row3].length; col3++) {
      if (newChessboard[row3][col3].piece.type === "Pawn" && newChessboard[row3][col3].piece.color ===  opponentCololr){
        for (let row4 = 0; row4 < newChessboard.length; row4++) {
          for (let col4 = 0; col4 < newChessboard[row4].length; col4++) {
            if (pawnPiece(newChessboard[row3][col3],newChessboard[row4][col4],newChessboard)=== true){ 
              if (newChessboard[row4][col4].piece.type === "King")
              {
                validAIMove = false;
                break LoopStart;
              };
              responseMoves = {
                ID: responseMoveCounter,
                move: {
                  sourceSquare: newChessboard[row3][col3],
                  targetSquare: newChessboard[row4][col4],
                },
              };
            };
          };
        };
      };
      if (newChessboard[row3][col3].piece.type === "Rook" && newChessboard[row3][col3].piece.color ===  opponentCololr){
        for (let row4 = 0; row4 < newChessboard.length; row4++) {
          for (let col4 = 0; col4 < newChessboard[row4].length; col4++) {
            if (rookPiece(newChessboard[row3][col3],newChessboard[row4][col4],newChessboard)=== true){ 
              if (newChessboard[row4][col4].piece.type === "King")
              {
                validAIMove = false;
                break LoopStart;
              };
              responseMoves = {
                ID: responseMoveCounter,
                move: {
                  sourceSquare: newChessboard[row3][col3],
                  targetSquare: newChessboard[row4][col4],
                },
              };
            };
          };
        };
      };
      if (newChessboard[row3][col3].piece.type === "Bishop" && newChessboard[row3][col3].piece.color ===  opponentCololr){
        for (let row4 = 0; row4 < newChessboard.length; row4++) {
          for (let col4 = 0; col4 < newChessboard[row4].length; col4++) {
            if (bishopPiece(newChessboard[row3][col3],newChessboard[row4][col4],newChessboard)=== true){ 
              if (newChessboard[row4][col4].piece.type === "King")
              {
                validAIMove = false;
                break LoopStart;
              };
              responseMoves = {
                ID: responseMoveCounter,
                move: {
                  sourceSquare: newChessboard[row3][col3],
                  targetSquare: newChessboard[row4][col4],
                },
              };
            };
          };
        };
      };
      if (newChessboard[row3][col3].piece.type === "Knight" && newChessboard[row3][col3].piece.color ===  opponentCololr){
        for (let row4 = 0; row4 < newChessboard.length; row4++) {
          for (let col4 = 0; col4 < newChessboard[row4].length; col4++) {
            if (knightPiece(newChessboard[row3][col3],newChessboard[row4][col4])=== true){ 
              if (newChessboard[row4][col4].piece.type === "King")
              {
                validAIMove = false;
                break LoopStart;
              };
              responseMoves = {
                ID: responseMoveCounter,
                move: {
                  sourceSquare: newChessboard[row3][col3],
                  targetSquare: newChessboard[row4][col4],
                },
              };
            };
          };
        };
      };
      if (newChessboard[row3][col3].piece.type === "Queen" && newChessboard[row3][col3].piece.color ===  opponentCololr){
        for (let row4 = 0; row4 < newChessboard.length; row4++) {
          for (let col4 = 0; col4 < newChessboard[row4].length; col4++) {
            if (queenPiece(newChessboard[row3][col3],newChessboard[row4][col4],newChessboard)=== true){ 
              if (newChessboard[row4][col4].piece.type === "King")
              {
                validAIMove = false;
                break LoopStart;
              };
              responseMoves = {
                ID: responseMoveCounter,
                move: {
                  sourceSquare: newChessboard[row3][col3],
                  targetSquare: newChessboard[row4][col4],
                },
              };
            };
          };
        };
      };
    };
  };
  // Reverting AI move on board
  updatedArrays = updateBoard(targetSquare, sourceSquare, newChessboard);
  newChessboard = updatedArrays.board;
  // Place any taken pieces back on the board once future move has been reverted
  //? System currently only works for looking 1 move into the future, does this need extending?
  if (savedPiece !== undefined) {
    let updateSquare: any = newChessboard[targetSquare.row][targetSquare.col];
    updateSquare.piece = savedPiece;
    savedPiece = undefined;
  };
  responseMoveCounter += (validAIMove) ? 1 : 0;
  return (validAIMove) ? true : false;
};





function evaluate(chessboard: any [][],turn: string): number{
  const materialValues: any = {
    'Pawn': pawnValue,
    'Bishop': bishopValue,
    'Knight': knightValue,
    'Rook': rookValue,
    'Queen': queenValue,
    'King': kingValue,
  };
  let whiteEval = 0;
  let blackEval = 0;

  for (let row = 0; row < chessboard.length; row++) {
    for (let col = 0; col < chessboard[row].length; col++) {
      const square = chessboard[row][col];
      if (square.piece.type !== "Blank") {
        const materialValue = materialValues[square.piece.type];
        const pieceValue = square.piece.color === 'white' ? materialValue : -materialValue;
        if (square.piece.color === 'white') {
          whiteEval += pieceValue;
        } else if (square.piece.color === "black") {
          blackEval += pieceValue;
        }
        let ownColor: string = (turn === "w") ? "white" : "black";
        // Give higher weight to squares that contain an opponent's piece
        if (square.piece.color !== ownColor) {
          if (square.piece.color === 'white') {
            blackEval += materialValue * 0.1; // Increase the weight factor as needed
          } else {
            whiteEval += materialValue * 0.1;
          }
        }
      }
    }
  }

  const perspective = (turn === 'w') ? 1 : -1;
  return (whiteEval - blackEval) * perspective;
};
  // const materialValues :any = {
  //   'Pawn': pawnValue,
  //   'Bishop': bishopValue,
  //   'Knight': knightValue,
  //   'Rook': rookValue,
  //   'Queen': queenValue,
  //   'King' : kingValue,
  // };
  // let whiteEval = 0;
  // let blackEval = 0;

  // for (let row = 0; row < chessboard.length; row++) {
  //   for (let col = 0; col < chessboard[row].length; col++) {
  //     const square = chessboard[row][col];
  //     if (square.piece.type !== "Blank") {
  //       const materialValue = materialValues[square.piece.type];
  //       const pieceValue = square.piece.color === 'white' ? materialValue : -materialValue;
  //       if (square.piece.color === 'white') {
  //         whiteEval += pieceValue;
  //       } else if (square.piece.color === "black") {
  //         blackEval += pieceValue;
  //       }
  //     }
  //   }
  // }

  // const perspective = (turn === 'w') ? 1 : -1;
  // return (whiteEval - blackEval) * perspective;
  


function Search (depth :any,chessboard :any[][],turn: string,moves: LegalMoves[]): number{

  if (depth === 0){
    return evaluate(chessboard,turn);
  };
  var bestEvaluation = -Infinity;
  for (let i = 0; i < moves.length; i++) {
    // If statement to check if a piece will be taken when future move is evaluated and stores the piece getting taken
    //? System currently only works for looking 1 move into the future, does this need extending?
    if (moves[i].move.targetSquare.piece.type !== "Blank") {
      if (savedPiece === undefined) {
        if (moves[i].move.targetSquare.piece.type === "Pawn") {
          if (moves[i].move.targetSquare.piece.color === "white") {
            savedPiece = {type: "Pawn", color: "white"};
          } else {
            savedPiece = {type: "Pawn", color: "black"};
          };
        };
        if (moves[i].move.targetSquare.piece.type === "Rook") {
          if (moves[i].move.targetSquare.piece.color === "white") {
            savedPiece = {type: "Rook", color: "white"};
          } else {
            savedPiece = {type: "Rook", color: "black"};
          };
        };
        if (moves[i].move.targetSquare.piece.type === "Bishop") {
          if (moves[i].move.targetSquare.piece.color === "white") {
            savedPiece = {type: "Bishop", color: "white"};
          } else {
            savedPiece = {type: "Bishop", color: "black"};
          };
        };
        if (moves[i].move.targetSquare.piece.type === "Knight") {
          if (moves[i].move.targetSquare.piece.color === "white") {
            savedPiece = {type: "Knight", color: "white"};
          } else {
            savedPiece = {type: "Knight", color: "black"};
          };
        };
        if (moves[i].move.targetSquare.piece.type === "Queen") {
          if (moves[i].move.targetSquare.piece.color === "white") {
            savedPiece = {type: "Queen", color: "white"};
          } else {
            savedPiece = {type: "Queen", color: "black"};
          };
        };
        if (moves[i].move.targetSquare.piece.type === "King") {
          if (moves[i].move.targetSquare.piece.color === "white") {
            savedPiece = {type: "King", color: "white"};
          } else {
            savedPiece = {type: "King", color: "black"};
          };
        };
      };
    };

    var evaluation = 0;

    let ownColor: string = (turn === "w") ? "white" : "black";

    if (moves[i].move.targetSquare.piece.type !== "Blank" && moves[i].move.targetSquare.piece.color !== ownColor) {
      // Assign a higher evaluation score to moves that result in a capture
      evaluation += 1000; // add a higher score for capture moves
    }

    let updatedArray: UpdatedArrays = updateBoard(moves[i].move.sourceSquare, moves[i].move.targetSquare, chessboard);
    let newChessboard: any[][] = updatedArray.board;
    evaluation += -Search(depth - 1,newChessboard,turn,moves);
    // update the bestMove based on the evaluation score
    if (evaluation > bestEvaluation) {
      bestEvaluation = evaluation;
      bestMove = moves[i];
    };
    // bestEvaluation = Math.max(evaluation, bestEvaluation);
    // If statement to save the best move based on evaluation results
    // if (bestEvaluation <= 9800 && evaluation <= 9800) {
    //   bestMove = moves[Math.floor(Math.random() * moves.length)];
    // } else if (bestEvaluation === evaluation && bestEvaluation <= 9800) {
    //   bestMove = moves[i];
    // };
    updatedArray = updateBoard(moves[i].move.targetSquare, moves[i].move.sourceSquare, chessboard);
    newChessboard = updatedArray.board;
    // Place any taken pieces back on the board once future move has been reverted
    //? System currently only works for looking 1 move into the future, does this need extending?
    if (savedPiece !== undefined) {
      let updateSquare: any = newChessboard[moves[i].move.targetSquare.row][moves[i].move.targetSquare.col];
      updateSquare.piece = savedPiece;
      savedPiece = undefined;
    };
  };
  return bestEvaluation;
};