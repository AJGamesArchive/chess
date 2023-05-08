import { pawnPiece } from "./Pawn";
import { rookPiece } from "./Rook";
import { knightPiece } from "./Knight";
import { bishopPiece } from "./Bishop";
import { queenPiece } from "./Queen";
import { kingPiece } from "./King";
import { updateBoard } from "./UpdateBoard";
import { UpdatedArrays } from "../../types/chessboard/UpdatedArrays";
import { arrayRemove } from "firebase/firestore";

const pawnValue = 100;
const knightValue = 300;
const bishopValue = 300;
const rookValue = 500;
const queenValue = 900;

var bestMove: LegalMoves;
var savedPiece: any = undefined;

type LegalMoves = {
  sourceSquare : any;
  targetSquare : any;
};

function evaluate(chessboard: any [][],turn: string): number{

  var whiteEval = 0 
  var blackEval = 0 
  var BpawnCount = 0
  var WpawnCount = 0
  var BRookCount = 0
  var WRookCount = 0
  var BBishopCount = 0
  var WBishopCount=0
  var BQueenCount = 0;
  var WQueenCount = 0;
  var BKnightCount = 0 
  var WKnightCount = 0;
  
  for (let row = 0; row < chessboard.length; row++) {
    for (let col = 0; col < chessboard[row].length; col++) {
      if (chessboard[row][col].piece.type === "Pawn" && chessboard[row][col].piece.color === "black" )
      {
        BpawnCount += 1;
      }
      if (chessboard[row][col].piece.type === "Pawn" && chessboard[row][col].piece.color === "white" )
      {
        WpawnCount += 1;
      }
      if (chessboard[row][col].piece.type === "Rook" && chessboard[row][col].piece.color === "black" )
      {
        BRookCount += 1;
      }
      if (chessboard[row][col].piece.type === "Rook" && chessboard[row][col].piece.color === "white" )
      {
        WRookCount += 1;
      }
      if (chessboard[row][col].piece.type === "Bishop" && chessboard[row][col].piece.color === "black" )
      {
        BBishopCount += 1;
      }
      if (chessboard[row][col].piece.type === "Bishop" && chessboard[row][col].piece.color === "white" )
      {
        WBishopCount += 1;
      }
      if (chessboard[row][col].piece.type === "Queen" && chessboard[row][col].piece.color === "black" )
      {
        BQueenCount += 1;
      }
      if (chessboard[row][col].piece.type === "Queen" && chessboard[row][col].piece.color === "white" )
      {
        WQueenCount += 1;
      }
      if (chessboard[row][col].piece.type === "Knight" && chessboard[row][col].piece.color === "black" )
      {
        BKnightCount += 1;
      }
      if (chessboard[row][col].piece.type === "Knight" && chessboard[row][col].piece.color === "white" )
      {
        WKnightCount += 1;
      }
    }
  }

  whiteEval = ((WpawnCount * pawnValue) + (WBishopCount * bishopValue) + (WKnightCount * knightValue) + (WRookCount * rookValue) + (WQueenCount * queenValue))
  blackEval = ((BpawnCount * pawnValue) + (BBishopCount * bishopValue) + (BKnightCount * knightValue) + (BRookCount * rookValue) + (BQueenCount * queenValue))

  var evaluation = whiteEval - blackEval;
  var perspective = (turn === "w") ? 1 :-1

  return evaluation * perspective;
};

export function AIlegalMoves (chessboard: any[][], turn: string): LegalMoves {
  const legalMovesList: LegalMoves[] = new Array()

  var legalMoves: LegalMoves  = {
    sourceSquare : {},
    targetSquare : {},
  };

  for (let row = 0; row < chessboard.length; row++) {
    for (let col = 0; col < chessboard[row].length; col++) {

      if (chessboard[row][col].piece.type === "Pawn" && chessboard[row][col].piece.color === "black" ){
        for (let row2 = 0; row2 < chessboard.length; row2++) {
          for (let col2 = 0; col2 < chessboard[row2].length; col2++) {
            if (pawnPiece(chessboard[row][col],chessboard[row2][col2],chessboard)=== true){
              for (let row3 = 0; row3 < chessboard.length; row3++) {
                for (let col3 = 0; col3 < chessboard[row3].length; col3++) {
                  if (chessboard[row3][col3].piece.type === "Pawn" && chessboard[row3][col3].piece.color === "white" ){
                    for (let row4 = 0; row4 < chessboard.length; row4++) {
                      for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                        if (pawnPiece(chessboard[row3][col3],chessboard[row4][col4],chessboard)=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                          continue
                              }
                               else{ 
                                legalMoves = {
                                  sourceSquare: chessboard[row][col],
                                  targetSquare: chessboard[row2][col2],
                                };
                                legalMovesList.push(legalMoves);
                              }   
                            }
                          }
                        }
                        if (chessboard[row3][col3].piece.type === "Rook" && chessboard[row3][col3].piece.color === "white" ){
                          for (let row4 = 0; row4 < chessboard.length; row4++) {
                            for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                              if (rookPiece(chessboard[row3][col3],chessboard[row4][col4],chessboard)=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                continue
                                    }
                                     else{ 
                                      legalMoves = {
                                        sourceSquare: chessboard[row][col],
                                        targetSquare: chessboard[row2][col2],
                                      };
                                      legalMovesList.push(legalMoves);
                                    }   
                                  }
                                }
                              }
                         if (chessboard[row3][col3].piece.type === "Bishop" && chessboard[row3][col3].piece.color === "white" ){
                          for (let row4 = 0; row4 < chessboard.length; row4++) {
                            for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                              if (bishopPiece(chessboard[row3][col3],chessboard[row4][col4],chessboard)=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                continue
                                    }
                                      else{ 
                                      legalMoves = {
                                        sourceSquare: chessboard[row][col],
                                        targetSquare: chessboard[row2][col2],
                                      };
                                      legalMovesList.push(legalMoves);
                                    }   
                                  }
                                }
                              } 
                          if (chessboard[row3][col3].piece.type === "Knight" && chessboard[row3][col3].piece.color === "white" ){
                            for (let row4 = 0; row4 < chessboard.length; row4++) {
                              for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                                if (knightPiece(chessboard[row3][col3],chessboard[row4][col4])=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                  continue
                                      }
                                        else{ 
                                        legalMoves = {
                                          sourceSquare: chessboard[row][col],
                                          targetSquare: chessboard[row2][col2],
                                        };
                                        legalMovesList.push(legalMoves);
                                      }   
                                    }
                                  }
                                }       
                            if (chessboard[row3][col3].piece.type === "Queen" && chessboard[row3][col3].piece.color === "white" ){
                              for (let row4 = 0; row4 < chessboard.length; row4++) {
                                for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                                  if (queenPiece(chessboard[row3][col3],chessboard[row4][col4],chessboard)=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                    continue
                                        }
                                          else{ 
                                          legalMoves = {
                                            sourceSquare: chessboard[row][col],
                                            targetSquare: chessboard[row2][col2],
                                          };
                                          legalMovesList.push(legalMoves);
                                        }   
                                      }
                                    }
                                  } 
                            if (chessboard[row3][col3].piece.type === "King" && chessboard[row3][col3].piece.color === "white" ){
                              for (let row4 = 0; row4 < chessboard.length; row4++) {
                                for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                                  if (kingPiece(chessboard[row3][col3],chessboard[row4][col4])=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                    continue
                                        }
                                          else{ 
                                          legalMoves = {
                                            sourceSquare: chessboard[row][col],
                                            targetSquare: chessboard[row2][col2],
                                          };
                                          legalMovesList.push(legalMoves);
                                        }   
                                      }
                                    }
                                  }                                        
                      }
                    }
                  }
                  
                }
              }                        
  }
  if (chessboard[row][col].piece.type === "Rook" && chessboard[row][col].piece.color === "black" ){
    for (let row2 = 0; row2 < chessboard.length; row2++) {
      for (let col2 = 0; col2 < chessboard[row2].length; col2++) {
        if (rookPiece(chessboard[row][col],chessboard[row2][col2],chessboard)=== true){
          for (let row3 = 0; row3 < chessboard.length; row3++) {
            for (let col3 = 0; col3 < chessboard[row3].length; col3++) {
              if (chessboard[row3][col3].piece.type === "Pawn" && chessboard[row3][col3].piece.color === "white" ){
                for (let row4 = 0; row4 < chessboard.length; row4++) {
                  for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                    if (pawnPiece(chessboard[row3][col3],chessboard[row4][col4],chessboard)=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                      continue
                          }
                           else{ 
                            legalMoves = {
                              sourceSquare: chessboard[row][col],
                              targetSquare: chessboard[row2][col2],
                            };
                            legalMovesList.push(legalMoves);
                          }   
                        }
                      }
                    }
                    if (chessboard[row3][col3].piece.type === "Rook" && chessboard[row3][col3].piece.color === "white" ){
                      for (let row4 = 0; row4 < chessboard.length; row4++) {
                        for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                          if (rookPiece(chessboard[row3][col3],chessboard[row4][col4],chessboard)=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                            continue
                                }
                                 else{ 
                                  legalMoves = {
                                    sourceSquare: chessboard[row][col],
                                    targetSquare: chessboard[row2][col2],
                                  };
                                  legalMovesList.push(legalMoves);
                                }   
                              }
                            }
                          }
                     if (chessboard[row3][col3].piece.type === "Bishop" && chessboard[row3][col3].piece.color === "white" ){
                            for (let row4 = 0; row4 < chessboard.length; row4++) {
                              for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                                if (bishopPiece(chessboard[row3][col3],chessboard[row4][col4],chessboard)=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                  continue
                                      }
                                       else{ 
                                        legalMoves = {
                                          sourceSquare: chessboard[row][col],
                                          targetSquare: chessboard[row2][col2],
                                        };
                                        legalMovesList.push(legalMoves);
                                      }   
                                    }
                                  }
                                } 
                      if (chessboard[row3][col3].piece.type === "Knight" && chessboard[row3][col3].piece.color === "white" ){
                                  for (let row4 = 0; row4 < chessboard.length; row4++) {
                                    for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                                      if (knightPiece(chessboard[row3][col3],chessboard[row4][col4])=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                        continue
                                            }
                                             else{ 
                                              legalMoves = {
                                                sourceSquare: chessboard[row][col],
                                                targetSquare: chessboard[row2][col2],
                                              };
                                              legalMovesList.push(legalMoves);
                                            }   
                                          }
                                        }
                                      }       
                        if (chessboard[row3][col3].piece.type === "Queen" && chessboard[row3][col3].piece.color === "white" ){
                                        for (let row4 = 0; row4 < chessboard.length; row4++) {
                                          for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                                            if (queenPiece(chessboard[row3][col3],chessboard[row4][col4],chessboard)=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                              continue
                                                  }
                                                   else{ 
                                                    legalMoves = {
                                                      sourceSquare: chessboard[row][col],
                                                      targetSquare: chessboard[row2][col2],
                                                    };
                                                    legalMovesList.push(legalMoves);
                                                  }   
                                                }
                                              }
                                            } 
                        if (chessboard[row3][col3].piece.type === "King" && chessboard[row3][col3].piece.color === "white" ){
                                              for (let row4 = 0; row4 < chessboard.length; row4++) {
                                                for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                                                  if (kingPiece(chessboard[row3][col3],chessboard[row4][col4])=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                                    continue
                                                        }
                                                         else{ 
                                                          legalMoves = {
                                                            sourceSquare: chessboard[row][col],
                                                            targetSquare: chessboard[row2][col2],
                                                          };
                                                          legalMovesList.push(legalMoves);
                                                        }   
                                                      }
                                                    }
                                                  }                                        
                  }
                }
              }
              
            }
          }                        
}
if (chessboard[row][col].piece.type === "Knight" && chessboard[row][col].piece.color === "black" ){
  for (let row2 = 0; row2 < chessboard.length; row2++) {
    for (let col2 = 0; col2 < chessboard[row2].length; col2++) {
      if (knightPiece(chessboard[row][col],chessboard[row2][col2])=== true){
        for (let row3 = 0; row3 < chessboard.length; row3++) {
          for (let col3 = 0; col3 < chessboard[row3].length; col3++) {
            if (chessboard[row3][col3].piece.type === "Pawn" && chessboard[row3][col3].piece.color === "white" ){
              for (let row4 = 0; row4 < chessboard.length; row4++) {
                for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                  if (pawnPiece(chessboard[row3][col3],chessboard[row4][col4],chessboard)=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                    continue
                        }
                         else{ 
                          legalMoves = {
                            sourceSquare: chessboard[row][col],
                            targetSquare: chessboard[row2][col2],
                          };
                          legalMovesList.push(legalMoves);
                        }   
                      }
                    }
                  }
                  if (chessboard[row3][col3].piece.type === "Rook" && chessboard[row3][col3].piece.color === "white" ){
                    for (let row4 = 0; row4 < chessboard.length; row4++) {
                      for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                        if (rookPiece(chessboard[row3][col3],chessboard[row4][col4],chessboard)=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                          continue
                              }
                               else{ 
                                legalMoves = {
                                  sourceSquare: chessboard[row][col],
                                  targetSquare: chessboard[row2][col2],
                                };
                                legalMovesList.push(legalMoves);
                              }   
                            }
                          }
                        }
                   if (chessboard[row3][col3].piece.type === "Bishop" && chessboard[row3][col3].piece.color === "white" ){
                          for (let row4 = 0; row4 < chessboard.length; row4++) {
                            for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                              if (bishopPiece(chessboard[row3][col3],chessboard[row4][col4],chessboard)=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                continue
                                    }
                                     else{ 
                                      legalMoves = {
                                        sourceSquare: chessboard[row][col],
                                        targetSquare: chessboard[row2][col2],
                                      };
                                      legalMovesList.push(legalMoves);
                                    }   
                                  }
                                }
                              } 
                    if (chessboard[row3][col3].piece.type === "Knight" && chessboard[row3][col3].piece.color === "white" ){
                                for (let row4 = 0; row4 < chessboard.length; row4++) {
                                  for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                                    if (knightPiece(chessboard[row3][col3],chessboard[row4][col4])=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                      continue
                                          }
                                           else{ 
                                            legalMoves = {
                                              sourceSquare: chessboard[row][col],
                                              targetSquare: chessboard[row2][col2],
                                            };
                                            legalMovesList.push(legalMoves);
                                          }   
                                        }
                                      }
                                    }       
                      if (chessboard[row3][col3].piece.type === "Queen" && chessboard[row3][col3].piece.color === "white" ){
                                      for (let row4 = 0; row4 < chessboard.length; row4++) {
                                        for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                                          if (queenPiece(chessboard[row3][col3],chessboard[row4][col4],chessboard)=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                            continue
                                                }
                                                 else{ 
                                                  legalMoves = {
                                                    sourceSquare: chessboard[row][col],
                                                    targetSquare: chessboard[row2][col2],
                                                  };
                                                  legalMovesList.push(legalMoves);
                                                }   
                                              }
                                            }
                                          } 
                      if (chessboard[row3][col3].piece.type === "King" && chessboard[row3][col3].piece.color === "white" ){
                                            for (let row4 = 0; row4 < chessboard.length; row4++) {
                                              for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                                                if (kingPiece(chessboard[row3][col3],chessboard[row4][col4])=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                                  continue
                                                      }
                                                       else{ 
                                                        legalMoves = {
                                                          sourceSquare: chessboard[row][col],
                                                          targetSquare: chessboard[row2][col2],
                                                        };
                                                        legalMovesList.push(legalMoves);
                                                      }   
                                                    }
                                                  }
                                                }                                        
                }
              }
            }
            
          }
        }                        
}
if (chessboard[row][col].piece.type === "Bishop" && chessboard[row][col].piece.color === "black" ){
  for (let row2 = 0; row2 < chessboard.length; row2++) {
    for (let col2 = 0; col2 < chessboard[row2].length; col2++) {
      if (bishopPiece(chessboard[row][col],chessboard[row2][col2],chessboard)=== true){
        for (let row3 = 0; row3 < chessboard.length; row3++) {
          for (let col3 = 0; col3 < chessboard[row3].length; col3++) {
            if (chessboard[row3][col3].piece.type === "Pawn" && chessboard[row3][col3].piece.color === "white" ){
              for (let row4 = 0; row4 < chessboard.length; row4++) {
                for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                  if (pawnPiece(chessboard[row3][col3],chessboard[row4][col4],chessboard)=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                    continue
                        }
                         else{ 
                          legalMoves = {
                            sourceSquare: chessboard[row][col],
                            targetSquare: chessboard[row2][col2],
                          };
                          legalMovesList.push(legalMoves);
                        }   
                      }
                    }
                  }
                  if (chessboard[row3][col3].piece.type === "Rook" && chessboard[row3][col3].piece.color === "white" ){
                    for (let row4 = 0; row4 < chessboard.length; row4++) {
                      for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                        if (rookPiece(chessboard[row3][col3],chessboard[row4][col4],chessboard)=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                          continue
                              }
                               else{ 
                                legalMoves = {
                                  sourceSquare: chessboard[row][col],
                                  targetSquare: chessboard[row2][col2],
                                };
                                legalMovesList.push(legalMoves);
                              }   
                            }
                          }
                        }
                   if (chessboard[row3][col3].piece.type === "Bishop" && chessboard[row3][col3].piece.color === "white" ){
                          for (let row4 = 0; row4 < chessboard.length; row4++) {
                            for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                              if (bishopPiece(chessboard[row3][col3],chessboard[row4][col4],chessboard)=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                continue
                                    }
                                     else{ 
                                      legalMoves = {
                                        sourceSquare: chessboard[row][col],
                                        targetSquare: chessboard[row2][col2],
                                      };
                                      legalMovesList.push(legalMoves);
                                    }   
                                  }
                                }
                              } 
                    if (chessboard[row3][col3].piece.type === "Knight" && chessboard[row3][col3].piece.color === "white" ){
                                for (let row4 = 0; row4 < chessboard.length; row4++) {
                                  for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                                    if (knightPiece(chessboard[row3][col3],chessboard[row4][col4])=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                      continue
                                          }
                                           else{ 
                                            legalMoves = {
                                              sourceSquare: chessboard[row][col],
                                              targetSquare: chessboard[row2][col2],
                                            };
                                            legalMovesList.push(legalMoves);
                                          }   
                                        }
                                      }
                                    }       
                      if (chessboard[row3][col3].piece.type === "Queen" && chessboard[row3][col3].piece.color === "white" ){
                                      for (let row4 = 0; row4 < chessboard.length; row4++) {
                                        for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                                          if (queenPiece(chessboard[row3][col3],chessboard[row4][col4],chessboard)=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                            continue
                                                }
                                                 else{ 
                                                  legalMoves = {
                                                    sourceSquare: chessboard[row][col],
                                                    targetSquare: chessboard[row2][col2],
                                                  };
                                                  legalMovesList.push(legalMoves);
                                                }   
                                              }
                                            }
                                          } 
                      if (chessboard[row3][col3].piece.type === "King" && chessboard[row3][col3].piece.color === "white" ){
                                            for (let row4 = 0; row4 < chessboard.length; row4++) {
                                              for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                                                if (kingPiece(chessboard[row3][col3],chessboard[row4][col4])=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                                  continue
                                                      }
                                                       else{ 
                                                        legalMoves = {
                                                          sourceSquare: chessboard[row][col],
                                                          targetSquare: chessboard[row2][col2],
                                                        };
                                                        legalMovesList.push(legalMoves);
                                                      }   
                                                    }
                                                  }
                                                }                                        
                }
              }
            }
            
          }
        }                        
}
if (chessboard[row][col].piece.type === "Queen" && chessboard[row][col].piece.color === "black" ){
  for (let row2 = 0; row2 < chessboard.length; row2++) {
    for (let col2 = 0; col2 < chessboard[row2].length; col2++) {
      if (queenPiece(chessboard[row][col],chessboard[row2][col2],chessboard)=== true){
        for (let row3 = 0; row3 < chessboard.length; row3++) {
          for (let col3 = 0; col3 < chessboard[row3].length; col3++) {
            if (chessboard[row3][col3].piece.type === "Pawn" && chessboard[row3][col3].piece.color === "white" ){
              for (let row4 = 0; row4 < chessboard.length; row4++) {
                for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                  if (pawnPiece(chessboard[row3][col3],chessboard[row4][col4],chessboard)=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                    continue
                        }
                         else{ 
                          legalMoves = {
                            sourceSquare: chessboard[row][col],
                            targetSquare: chessboard[row2][col2],
                          };
                          legalMovesList.push(legalMoves);
                        }   
                      }
                    }
                  }
                  if (chessboard[row3][col3].piece.type === "Rook" && chessboard[row3][col3].piece.color === "white" ){
                    for (let row4 = 0; row4 < chessboard.length; row4++) {
                      for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                        if (rookPiece(chessboard[row3][col3],chessboard[row4][col4],chessboard)=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                          continue
                              }
                               else{ 
                                legalMoves = {
                                  sourceSquare: chessboard[row][col],
                                  targetSquare: chessboard[row2][col2],
                                };
                                legalMovesList.push(legalMoves);
                              }   
                            }
                          }
                        }
                   if (chessboard[row3][col3].piece.type === "Bishop" && chessboard[row3][col3].piece.color === "white" ){
                          for (let row4 = 0; row4 < chessboard.length; row4++) {
                            for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                              if (bishopPiece(chessboard[row3][col3],chessboard[row4][col4],chessboard)=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                continue
                                    }
                                     else{ 
                                      legalMoves = {
                                        sourceSquare: chessboard[row][col],
                                        targetSquare: chessboard[row2][col2],
                                      };
                                      legalMovesList.push(legalMoves);
                                    }   
                                  }
                                }
                              } 
                    if (chessboard[row3][col3].piece.type === "Knight" && chessboard[row3][col3].piece.color === "white" ){
                                for (let row4 = 0; row4 < chessboard.length; row4++) {
                                  for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                                    if (knightPiece(chessboard[row3][col3],chessboard[row4][col4])=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                      continue
                                          }
                                           else{ 
                                            legalMoves = {
                                              sourceSquare: chessboard[row][col],
                                              targetSquare: chessboard[row2][col2],
                                            };
                                            legalMovesList.push(legalMoves);
                                          }   
                                        }
                                      }
                                    }       
                      if (chessboard[row3][col3].piece.type === "Queen" && chessboard[row3][col3].piece.color === "white" ){
                                      for (let row4 = 0; row4 < chessboard.length; row4++) {
                                        for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                                          if (queenPiece(chessboard[row3][col3],chessboard[row4][col4],chessboard)=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                            continue
                                                }
                                                 else{ 
                                                  legalMoves = {
                                                    sourceSquare: chessboard[row][col],
                                                    targetSquare: chessboard[row2][col2],
                                                  };
                                                  legalMovesList.push(legalMoves);
                                                }   
                                              }
                                            }
                                          } 
                      if (chessboard[row3][col3].piece.type === "King" && chessboard[row3][col3].piece.color === "white" ){
                                            for (let row4 = 0; row4 < chessboard.length; row4++) {
                                              for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                                                if (kingPiece(chessboard[row3][col3],chessboard[row4][col4])=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                                  continue
                                                      }
                                                       else{ 
                                                        legalMoves = {
                                                          sourceSquare: chessboard[row][col],
                                                          targetSquare: chessboard[row2][col2],
                                                        };
                                                        legalMovesList.push(legalMoves);
                                                      }   
                                                    }
                                                  }
                                                }                                        
                }
              }
            }
            
          }
        }                        
}
if (chessboard[row][col].piece.type === "King" && chessboard[row][col].piece.color === "black" ){
  for (let row2 = 0; row2 < chessboard.length; row2++) {
    for (let col2 = 0; col2 < chessboard[row2].length; col2++) {
      if (kingPiece(chessboard[row][col],chessboard[row2][col2])=== true){
        for (let row3 = 0; row3 < chessboard.length; row3++) {
          for (let col3 = 0; col3 < chessboard[row3].length; col3++) {
            if (chessboard[row3][col3].piece.type === "Pawn" && chessboard[row3][col3].piece.color === "white" ){
              for (let row4 = 0; row4 < chessboard.length; row4++) {
                for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                  if (pawnPiece(chessboard[row3][col3],chessboard[row4][col4],chessboard)=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                    continue
                        }
                         else{ 
                          legalMoves = {
                            sourceSquare: chessboard[row][col],
                            targetSquare: chessboard[row2][col2],
                          };
                          legalMovesList.push(legalMoves);
                        }   
                      }
                    }
                  }
                  if (chessboard[row3][col3].piece.type === "Rook" && chessboard[row3][col3].piece.color === "white" ){
                    for (let row4 = 0; row4 < chessboard.length; row4++) {
                      for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                        if (rookPiece(chessboard[row3][col3],chessboard[row4][col4],chessboard)=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                          continue
                              }
                               else{ 
                                legalMoves = {
                                  sourceSquare: chessboard[row][col],
                                  targetSquare: chessboard[row2][col2],
                                };
                                legalMovesList.push(legalMoves);
                              }   
                            }
                          }
                        }
                   if (chessboard[row3][col3].piece.type === "Bishop" && chessboard[row3][col3].piece.color === "white" ){
                          for (let row4 = 0; row4 < chessboard.length; row4++) {
                            for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                              if (bishopPiece(chessboard[row3][col3],chessboard[row4][col4],chessboard)=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                continue
                                    }
                                     else{ 
                                      legalMoves = {
                                        sourceSquare: chessboard[row][col],
                                        targetSquare: chessboard[row2][col2],
                                      };
                                      legalMovesList.push(legalMoves);
                                    }   
                                  }
                                }
                              } 
                    if (chessboard[row3][col3].piece.type === "Knight" && chessboard[row3][col3].piece.color === "white" ){
                                for (let row4 = 0; row4 < chessboard.length; row4++) {
                                  for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                                    if (knightPiece(chessboard[row3][col3],chessboard[row4][col4])=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                      continue
                                          }
                                           else{ 
                                            legalMoves = {
                                              sourceSquare: chessboard[row][col],
                                              targetSquare: chessboard[row2][col2],
                                            };
                                            legalMovesList.push(legalMoves);
                                          }   
                                        }
                                      }
                                    }       
                      if (chessboard[row3][col3].piece.type === "Queen" && chessboard[row3][col3].piece.color === "white" ){
                                      for (let row4 = 0; row4 < chessboard.length; row4++) {
                                        for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                                          if (queenPiece(chessboard[row3][col3],chessboard[row4][col4],chessboard)=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                            continue
                                                }
                                                 else{ 
                                                  legalMoves = {
                                                    sourceSquare: chessboard[row][col],
                                                    targetSquare: chessboard[row2][col2],
                                                  };
                                                  legalMovesList.push(legalMoves);
                                                }   
                                              }
                                            }
                                          } 
                      if (chessboard[row3][col3].piece.type === "King" && chessboard[row3][col3].piece.color === "white" ){
                                            for (let row4 = 0; row4 < chessboard.length; row4++) {
                                              for (let col4 = 0; col4 < chessboard[row4].length; col4++) {
                                                if (kingPiece(chessboard[row3][col3],chessboard[row4][col4])=== true && (chessboard[row4][col4].piece.type === "king" && chessboard[row4][col4].piece.color === "black" )){
                                                  continue
                                                      }
                                                       else{ 
                                                        legalMoves = {
                                                          sourceSquare: chessboard[row][col],
                                                          targetSquare: chessboard[row2][col2],
                                                        };
                                                        legalMovesList.push(legalMoves);
                                                      }   
                                                    }
                                                  }
                                                }                                        
                }
              }
            }
            
          }
        }                        
      }
    }
  }
  const moveScore: number = Search(1, chessboard, turn, legalMovesList);
  return bestMove;
};



function Search (depth :any,chessboard :any[][],turn: string,moves: LegalMoves[]): number{
  if (depth === 0){
    return evaluate(chessboard,turn);
  };
  var bestEvaluation = -Infinity;
  for (let i = 0; i < moves.length; i++) {
    // If statement to check if a piece will be taken when future move is evaluated and stores the piece getting taken
    //? System currently only works for looking 1 move into the future, does this need extending?
    if (moves[i].targetSquare.piece.type !== "Blank") {
      if (savedPiece === undefined) {
        if (moves[i].targetSquare.piece.type === "Pawn") {
          if (moves[i].targetSquare.piece.color === "white") {
            savedPiece = {type: "Pawn", color: "white"};
          } else {
            savedPiece = {type: "Pawn", color: "black"};
          };
        };
        if (moves[i].targetSquare.piece.type === "Rook") {
          if (moves[i].targetSquare.piece.color === "white") {
            savedPiece = {type: "Rook", color: "white"};
          } else {
            savedPiece = {type: "Rook", color: "black"};
          };
        };
        if (moves[i].targetSquare.piece.type === "Bishop") {
          if (moves[i].targetSquare.piece.color === "white") {
            savedPiece = {type: "Bishop", color: "white"};
          } else {
            savedPiece = {type: "Bishop", color: "black"};
          };
        };
        if (moves[i].targetSquare.piece.type === "Knight") {
          if (moves[i].targetSquare.piece.color === "white") {
            savedPiece = {type: "Knight", color: "white"};
          } else {
            savedPiece = {type: "Knight", color: "black"};
          };
        };
        if (moves[i].targetSquare.piece.type === "Queen") {
          if (moves[i].targetSquare.piece.color === "white") {
            savedPiece = {type: "Queen", color: "white"};
          } else {
            savedPiece = {type: "Queen", color: "black"};
          };
        };
        if (moves[i].targetSquare.piece.type === "King") {
          if (moves[i].targetSquare.piece.color === "white") {
            savedPiece = {type: "King", color: "white"};
          } else {
            savedPiece = {type: "King", color: "black"};
          };
        };
      };
    };
    let updatedArray: UpdatedArrays = updateBoard(moves[i].sourceSquare, moves[i].targetSquare, chessboard);
    let newChessboard: any[][] = updatedArray.board;
    var evaluation = -Search(depth - 1,newChessboard,turn,moves);
    bestEvaluation = Math.max(evaluation, bestEvaluation);
    // If statement to save the best move based on evaluation results
    if (bestEvaluation <= 0 && evaluation <= 0) {
      bestMove = moves[Math.floor(Math.random() * moves.length)];
    } else if (bestEvaluation === evaluation && bestEvaluation >= 0) {
      bestMove = moves[i];
    };
    updatedArray = updateBoard(moves[i].targetSquare, moves[i].sourceSquare, chessboard);
    newChessboard = updatedArray.board;
    // Place any taken pieces back on the board once future move has been reverted
    //? System currently only works for looking 1 move into the future, does this need extending?
    if (savedPiece !== undefined) {
      let updateSquare: any = newChessboard[moves[i].targetSquare.row][moves[i].targetSquare.col];
      updateSquare.piece = savedPiece;
      savedPiece = undefined;
    };
  };
  return bestEvaluation;
};