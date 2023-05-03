// Importing required library's
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToast,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import { hammer, refresh, home, radioButtonOff, radioButtonOn, alertCircle, star } from 'ionicons/icons';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import './Game.css';

// Importing required paramaters
import { GlobalParams } from '../../interfaces/GlobalParams';
import { ChessGameParams } from '../../interfaces/ChessGameParams';

// Importing page components
import ChessBoard from '../../components/chessboard/Board';
import PlayerCard from '../../components/chessboard/PlayerCard';
import ActionButtons from '../../components/setup/ActionButtons';

// Importing page types
import { GameControl } from '../../types/chessboard/GameControl';
import { Piece } from '../../types/chessboard/Piece';
import { PawnLocation } from '../../types/chessboard/PawnLocation';

// Importing page functions
import { CreateBoard } from '../../functions/chessboard/CreateBoard';
import { GameController } from '../../functions/chessboard/GameController';
import { createPiecesTakenArray } from '../../functions/chessboard/TakenPiecesArrayGenerator';
import { pawnLocationChecker } from '../../functions/chessboard/PawnLocationChecker';
import { upgradePawn } from '../../functions/chessboard/UpgradePawn';

const ChessGame: React.FC = () => {

  // Setup navigation system on this page so we can call other pages
  // Powered by nav system in App.tsx
  const nav = useIonRouter();

  // Fetching imported paramaters
  const params = useParams<GlobalParams>();
  const game = useParams<ChessGameParams>();

  // Working out the color of the dark squares on the chessboard based on the selected game mode
  var darkSquareColor: string;
  if (game.mode === "PVP") {
    darkSquareColor = "#50c8ff";
  } else if (game.mode === "PVE") {
    darkSquareColor = "#42b883";
  } else {
    darkSquareColor = "#ff7072";
  }

  // React variable creates initial state of chess game and stores it in a 2D array
  const [chessboard, setChessboard] = useState(CreateBoard("#FFFFFF", darkSquareColor));

  useEffect(() => {
    setChessboard(chessboard);
  }, [chessboard]);

  // Declaring variable to keep track of who's turn it is "w" = white, "b" = black
  const [turn, setTurn] = useState<string>("w");

  // Declaring variable to control whether the board is locked or usable
  const [lockBoard, setLockBoard] = useState<boolean>(false);

  // Declaring react variables to store whether or not someone is in checkmate and display alerts accordingly
  const [checkmate, setCheckmate] = useState<boolean>(false);
  const [checkMateAlert, setCheckmateAlert] = useState<boolean>(false);
  const [checkMateMsg, setCheckmateMsg] = useState<string>("");
  
  // Declaring react variable to control the visibility of the 'End Game' action button
  const [hideEndGameBtn, setHideEndGameBtn] = useState<boolean>(true);

  // Declaring and assigning variables that will be used to power the player card UI components
  var whitePlayerName: string;
  var blackPlayerName: string;
  if (game.opponentColor === "w") {
    whitePlayerName = game.opponent;
    blackPlayerName = params.username;
  } else {
    blackPlayerName = game.opponent;
    whitePlayerName = params.username;
  };
  var whiteTurnIcon: any;
  var whiteTurnIconClr: any;
  var blackTurnIcon: any;
  var blackTurnIconClr: any;
  if (turn === "w") {
    whiteTurnIcon = radioButtonOn;
    blackTurnIcon = radioButtonOff;
    if (game.mode === "PVP") {
      whiteTurnIconClr = "primary";
    } else {
      whiteTurnIconClr = "success";
    };
    blackTurnIconClr = "medium";
  } else {
    blackTurnIcon = radioButtonOn;
    whiteTurnIcon = radioButtonOff;
    if (game.mode === "PVP") {
      blackTurnIconClr = "primary";
    } else {
      blackTurnIconClr = "success";
    };
    whiteTurnIconClr = "medium";
  };

  // Declaring React arrays to store the pieces taken of each color
  const [whitePiecesTaken, setWhitePiecesTaken] = useState<Piece[][]>(createPiecesTakenArray());
  const [blackPiecesTaken, setBlackPiecesTaken] = useState<Piece[][]>(createPiecesTakenArray());

  // Declaring react variables to control the visibility of the piece selection boxes
  const [hideWhiteSelect, setHideWhiteSelect] = useState<boolean>(true);
  const [hideBlackSelect, setHideBlackSelect] = useState<boolean>(true);

  // Declaring react variables to store the selection option from the piece selection boxes
  const [pawnSquare, setPawnSquare] = useState<any>();

  // Declaring variable to keep track of whether or not a source square has been selected
  // const [isSourceSelect, setIsSourceSelected] = useState<boolean>(false); //? Remove later if not needed in this file

  // React variables for making sure the king and rooks haven't been moved yet for castling
  const [kingWMoved, setKingWMoved] = useState<boolean>(false);
  const [kingbMoved, setKingBMoved] = useState<boolean>(false);
  const [rook1WMoved, setRook1WMoved] = useState<boolean>(false);
  const [rook2WMoved, setRook2WMoved] = useState<boolean>(false);
  const [rook1BMoved, setRook1BMoved] = useState<boolean>(false);
  const [rook2BMoved, setRook2BMoved] = useState<boolean>(false);

  // Guard statements to watch the chessboard and log when each king and rook first moves
  if (!kingWMoved) {if (chessboard[0][4].piece.type !== "King") {setKingWMoved(true)};}
  if (!kingbMoved) {if (chessboard[7][4].piece.type !== "King") {setKingBMoved(true)};}
  if (!rook1WMoved) {if (chessboard[0][0].piece.type !== "Rook") {setRook1WMoved(true)};}
  if (!rook2WMoved) {if (chessboard[0][7].piece.type !== "Rook") {setRook2WMoved(true)};}
  if (!rook1BMoved) {if (chessboard[7][0].piece.type !== "Rook") {setRook1BMoved(true)};}
  if (!rook2BMoved) {if (chessboard[7][7].piece.type !== "Rook") {setRook2BMoved(true)};}

  // Declaring variables to store the color used to highlight squares
  // const [highlighter] = useState<string>("#eeff00"); //? Remove these later if not needed in this file
  // const [checkHighlighter, setCheckHighlighter] = useState<string>("#ffb947");
  // const [huntHighlighter, setHuntHighlighter] = useState<string>("#ff80fd");
  // const [checkMateHighlighter, setCheckMateHighlighter] = useState<string>("#ff5454");

  // Declaring React variable to store the state of check at the end of each move
  // const [check, setCheck] = useState<CheckDetails>({ //? Remove later if not needed in this file?
  //   selfInCheck: false, 
  //   opponentInCheck: false,
  //   colorInCheck: "",
  //   kingInCheckSquare: {row: -1, col: -1},
  //   puttingInCheckSquare: []
  // });

  // Declaring variables to store source and target squares selected on the board for each move
  // const [sourceSquare, setSourceSquare] = useState({row: NaN, col: NaN, piece: {type: "Blank", color: "any"}, color: ""}); //? Remove this if not needed in this file
  //const [targetSquare, setTargetSquare] = useState({row: NaN, col: NaN, piece: {type: "Blank", color: "any"}, color: ""}); //? May not need this variable???

  // Function that handles what happens each time a board square is clicked
  function onSquareClick(square: any) {
    // Carry out the requested move only if no one is in check mate
    if (!checkmate) {
      let controls: GameControl = GameController(
        chessboard, 
        square, 
        turn,
        darkSquareColor,
        whitePiecesTaken,
        blackPiecesTaken,
        kingWMoved,
        kingbMoved,
        rook1WMoved,
        rook2WMoved,
        rook1BMoved,
        rook2BMoved,
      );
      // Update the state of the board
      setChessboard(controls.board);
      setLockBoard(controls.lockBoard);
      setWhitePiecesTaken(controls.whiteTaken);
      setBlackPiecesTaken(controls.blackTaken);
      setCheckmate(controls.checkMate);
      // Switch turns only if no one is in checkmate
      if(!controls.checkMate) {
        let pawnEvaluation: PawnLocation = pawnLocationChecker(chessboard);
        if (pawnEvaluation.atEnd) {
          setPawnSquare(pawnEvaluation.square);
          setLockBoard(true);
          if (pawnEvaluation.color === "white") {
            setHideWhiteSelect(false);
            return;
          } else {
            setHideBlackSelect(false);
            return;
          };
        };
        if (controls.switchTurn) {
          // Switch to the other players turn if current player has moved
          if (turn === "w") {
            setTurn("b");
          } else {
            setTurn("w");
          };
        };
        return;
      } else {
        // Work out who is in checkmate and display a an alert to the users
        let whoInCheckMate: string;
        if (turn === "w") {
          whoInCheckMate = blackPlayerName;
        } else {
          whoInCheckMate = whitePlayerName;
        };
        setCheckmateMsg(`${whoInCheckMate} is in Checkmate!`);
        setCheckmateAlert(true);
        setHideEndGameBtn(false);
        return;
      };
    };
    // If statement to check if a source square has been selected
    // If there's no source square, function will attempt to get a source square
    // If there is a source square, function will attempt to get a target square
    // if (!isSourceSelect) {
      // // Attempting to get a source square
      // // Guard statement to check if the selected square has a piece, will return is square is empty
      // if (square.piece.type === "Blank") {return;}
      // // Guard statement to check if the correct color piece is being moved for the current player turn
      // if ((square.piece.color === "white" && turn === "b") || (square.piece.color === "black" && turn === "w")) {return;}
      // // Tells system that a source square has been selected
      // setIsSourceSelected(true);
      // // Saves a copy of the selected source square
      // setSourceSquare(square);
      // // Updates main game array to highlight the selected source square
      // let newChessboard = Array.from(chessboard);
      // let updateSquare = newChessboard[square.row][square.col];
      // updateSquare.color = highlighter;
      // setChessboard(newChessboard);
      // return;
    // } else {
      // // Attempting to get a target square
      // // Check if the target square is the same as the source square, will unselect the source square if true
      // if (square === sourceSquare) {
      //   // Tell the system that there is no longer a source square selected
      //   setIsSourceSelected(false);
      //   // Updates main game array to un-highlight the selected source square
      //   let newChessboard = Array.from(chessboard);
      //   let updateSquare = newChessboard[sourceSquare.row][sourceSquare.col];
      //   updateSquare.color = resetSquareColor("#FFFFFF", darkSquareColor, updateSquare);
      //   setChessboard(newChessboard);
      //   return;
      // }
      // // Check if the player is castleing;
      // if (isCastleing(sourceSquare, square, chessboard, {
      //   whiteKing: kingWMoved,
      //   blackKing: kingbMoved,
      //   rookOneWhite: rook1WMoved,
      //   rookTwoWhite: rook2WMoved,
      //   rookOneBlack: rook1BMoved,
      //   rookTwoBlack: rook2BMoved
      // })) {
      //   // Carry out the castleing move on the chess board
      //   let newChessboard: any[][] = carryOutCastleing(chessboard, sourceSquare, square, false);
      //   // Check if any one is in check and color squares accordingly
      //   const checkDetails: CheckDetails = checkEvaluation(sourceSquare, square, newChessboard);
      //   if (checkDetails.selfInCheck) {newChessboard = carryOutCastleing(chessboard, sourceSquare, square, true);return;}
      //   if ((checkDetails.colorInCheck === check.colorInCheck) && check.colorInCheck !== "") {newChessboard = carryOutCastleing(chessboard, sourceSquare, square, true);return;}
      //   if (checkDetails.opponentInCheck) {
      //     // Checks if any squares are in the check highlighter and highlights them
      //     if (check.opponentInCheck) {
      //       newChessboard = checkHighlight(check, newChessboard, checkHighlighter, darkSquareColor, huntHighlighter, false);
      //     };
      //     // Highlight squares to show who is in check and where from
      //     newChessboard = checkHighlight(checkDetails, newChessboard, checkHighlighter, darkSquareColor, huntHighlighter, true);
      //   } else {
      //     // Checks if any squares are in the check highlighter and highlights them
      //     if (check.opponentInCheck) {
      //       newChessboard = checkHighlight(check, newChessboard, checkHighlighter, darkSquareColor, huntHighlighter, false);
      //     };
      //   };
      //   // Save the check state from this piece move
      //   setCheck(checkDetails);
      //   // Update chessboard GUI
      //   setChessboard(newChessboard);
      // } else {
      //   // Finds what piece is being moved and calls corresponding function
      //   if (sourceSquare.piece.type === "Pawn") {
      //     // Guard statement to check if the selected move is valid, will return if move is not valid
      //     if (!pawnPiece(sourceSquare, square)) {return;}
      //   };
      //   if (sourceSquare.piece.type === "Rook") {
      //     // Guard statement to check if the selected move is valid, will return if move is not valid
      //     if (!rookPiece(sourceSquare, square)) {return;}
      //   };
      //   if (sourceSquare.piece.type === "Knight") {
      //     // Guard statement to check if the selected move is valid, will return if move is not valid
      //     if (!knightPiece(sourceSquare, square)) {return;}
      //   };
      //   if (sourceSquare.piece.type === "Bishop") {
      //     // Guard statement to check if the selected move is valid, will return if move is not valid
      //     if (!bishopPiece(sourceSquare, square)) {return;}
      //   };
      //   if (sourceSquare.piece.type === "Queen") {
      //     // Guard statement to check if the selected move is valid, will return if move is not valid
      //     if (!queenPiece(sourceSquare, square)) {return;}
      //   };
      //   if (sourceSquare.piece.type === "King") {
      //     // Guard statement to check if the selected move is valid, will return if move is not valid
      //     if (!kingPiece(sourceSquare, square)) {return;}
      //   };
      //   // Move the piece from the source square to the target square
      //   let newChessboard: any[][] = updateBoard(sourceSquare, square, chessboard);
      //   // Check if any one is in check and color squares accordingly
      //   const checkDetails: CheckDetails = checkEvaluation(sourceSquare, square, newChessboard);
      //   if (checkDetails.selfInCheck) {newChessboard = updateBoard(square, sourceSquare, chessboard);return;}
      //   if ((checkDetails.colorInCheck === check.colorInCheck) && check.colorInCheck !== "") {newChessboard = updateBoard(square, sourceSquare, chessboard);return;}
      //   if (checkDetails.opponentInCheck) {
      //     // Checks if any squares are in the check highlighter and un-highlights them
      //     if (check.opponentInCheck) {
      //       newChessboard = checkHighlight(check, newChessboard, checkHighlighter, darkSquareColor, huntHighlighter, false);
      //     };
      //     // Highlight squares to show who is in check and where from
      //     newChessboard = checkHighlight(checkDetails, newChessboard, checkHighlighter, darkSquareColor, huntHighlighter, true);
      //   } else {
      //     // Checks if any squares are in the check highlighter and um-highlights them
      //     if (check.opponentInCheck) {
      //       newChessboard = checkHighlight(check, newChessboard, checkHighlighter, darkSquareColor, huntHighlighter, false);
      //     };
      //   };
      //   // Save the check state from this piece move
      //   setCheck(checkDetails);
      //   // Update chessboard GUI
      //   setChessboard(newChessboard);
      // };
      // // Tell the system that there is no longer a source square selected
      // setIsSourceSelected(false);
      // // Updates main game array to un-highlight the selected source square
      // let newChessboard = Array.from(chessboard);
      // let updateSquare = newChessboard[sourceSquare.row][sourceSquare.col];
      // updateSquare.color = resetSquareColor("#FFFFFF", darkSquareColor, updateSquare);
      // setChessboard(newChessboard);
      // // Switch to the other players turn
      // if (turn === "w") {
      //   setTurn("b");
      // } else {
      //   setTurn("w");
      // }
      // return;
    // }
    // console.log("Something Went Wrong!"); //! Remove this later
    // return; //! And remove this if it cannot be triggered
  };

  // Function that finishes the game and sends you to the results page
  function finishGame() {
    // Gather up the game results
    let isDraw: string = "n"; //TODO Make this dynamic once drawing is implemented
    let winnerName: string;
    let winnerColor: string;
    let loserName: string;
    let loserColor: string;
    if (turn === "w") {
      winnerName = whitePlayerName;
      winnerColor = "White";
      loserName = blackPlayerName;
      loserColor = "Black";
    } else {
      winnerName = blackPlayerName;
      winnerColor = "Black";
      loserName = whitePlayerName;
      loserColor = "White";
    };
    let numWhiteTaken: number = 0;
    for (let row = 0; row < whitePiecesTaken.length; row++) {
      for (let col = 0; col < whitePiecesTaken[row].length; col++) {
        if (whitePiecesTaken[row][col].piece.type !== "Blank") {
          numWhiteTaken += 1;
        };
      };
    };
    let numBlackTaken: number = 0;
    for (let row = 0; row < blackPiecesTaken.length; row++) {
      for (let col = 0; col < blackPiecesTaken[row].length; col++) {
        if (blackPiecesTaken[row][col].piece.type !== "Blank") {
          numBlackTaken += 1;
        };
      };
    };
    nav.push(`/ending/${params.username}/${game.mode}/${game.opponent}/${game.opponentColor}/${winnerName}/${winnerColor}/${loserName}/${loserColor}/${numWhiteTaken}/${numBlackTaken}/${isDraw}`);
    return;
  };

  // Function that handles swapping out a pawn that's reached the end of the board for another selected piece
  function swapOutPawn(selection: string) {
    setHideWhiteSelect(true);
    setHideBlackSelect(true);
    let newChessboard = upgradePawn(chessboard, pawnSquare, selection);
    if (turn === "w") {
      setTurn("b");
    } else {
      setTurn("w");
    };
    setChessboard(newChessboard);
    setLockBoard(false);
    return;
  };

  // IF statement to render page GUI differently depending on what game mode is selected
  return (
    <IonPage id="game-page">
      {
        /*
          Page Header Code
          Contains a page title
        */
      }
      <IonHeader>
        <IonToolbar>
          <IonTitle className="game-header">
            Chess: <IonText color="primary">{params.username}</IonText> VS <IonText color="primary">{game.opponent}</IonText>!
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className="game-header">
              Chess: <IonText color="primary">{params.username}</IonText> VS <IonText color="primary">{game.opponent}</IonText>!
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        {
          /*
            Page Content Code
          */
        }

        <PlayerCard
          cardImage='/assets/images/ChessPieces/white-Pawn.png'
          playerName={whitePlayerName}
          turnIcon={whiteTurnIcon}
          turnIconClr={whiteTurnIconClr}
          takenPieces={whitePiecesTaken}
        />

        <IonCard hidden={hideBlackSelect}>
          <IonItem lines="none">
            <IonAvatar slot="start">
              <IonImg src="/assets/images/ChessPieces/black-Pawn.png"/>
            </IonAvatar>
            <IonLabel>
              <IonText className='game-card-header'>
                Swap For:
              </IonText>
            </IonLabel>
            <IonSelect interface="alert" slot="end" placeholder={"Select"} onIonChange={(e: any) => {;
              swapOutPawn(e.detail.value);
            }}>
              <IonSelectOption value='Rook'>Rook</IonSelectOption>
              <IonSelectOption value='Knight'>Knight</IonSelectOption>
              <IonSelectOption value='Bishop'>Bishop</IonSelectOption>
              <IonSelectOption value='Queen'>Queen</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonCard>

        <ChessBoard
          board={chessboard}
          locked={lockBoard}
          onSquareClick={onSquareClick}
        />

        <IonCard hidden={hideWhiteSelect}>
          <IonItem lines="none">
            <IonAvatar slot="start">
              <IonImg src="/assets/images/ChessPieces/white-Pawn.png"/>
            </IonAvatar>
            <IonLabel>
              <IonText className='game-card-header'>
                Swap For:
              </IonText>
            </IonLabel>
            <IonSelect interface="alert" slot="end" placeholder={"Select"} onIonChange={(e: any) => {
              swapOutPawn(e.detail.value);
            }}>
              <IonSelectOption value='Rook'>Rook</IonSelectOption>
              <IonSelectOption value='Knight'>Knight</IonSelectOption>
              <IonSelectOption value='Bishop'>Bishop</IonSelectOption>
              <IonSelectOption value='Queen'>Queen</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonCard>

        <PlayerCard
          cardImage='/assets/images/ChessPieces/black-Pawn.png'
          playerName={blackPlayerName}
          turnIcon={blackTurnIcon}
          turnIconClr={blackTurnIconClr}
          takenPieces={blackPiecesTaken}
        />

        <ActionButtons
          canDisable={false}
          disabled={false}
          canHide={true}
          hidden={hideEndGameBtn}
          buttonName={`Finish`}
          buttonText={`Finish Game`}
          buttonIcon={star}
          buttonColor={`yellow`}
          buttonTextColor={`warning`}
          onButtonClick={finishGame}
        />

        <IonToast
          isOpen={checkMateAlert}
          onDidPresent={() => {}}
          onDidDismiss={() => setCheckmateAlert(false)}
          message={checkMateMsg}
          icon={alertCircle}
          color="medium"
          position="middle"
          buttons={[
            {
              text: "Ok",
              role: "cancel",
              handler: () => {}
            }
          ]}
        />

        {
          /*
            ! Temporary buttons to aid with development
          */
        }

        <IonCard hidden={false}>
          <IonItem lines="none">
            <IonButton slot="start" fill="clear" color="secondary" onClick={() => {
              console.log(chessboard);
            }}>
              <IonIcon icon={hammer}></IonIcon>
            </IonButton>
            <IonButton slot="start" fill="clear" color="secondary" onClick={() => {
              window.location.reload();
            }}>
              <IonIcon icon={refresh}></IonIcon>
            </IonButton>
            <IonButton slot="start" fill="clear" color="secondary" onClick={() => {
              nav.push(`/mainMenu/${params.username}`);
            }}>
              <IonIcon icon={home}></IonIcon>
            </IonButton>
            <IonButton slot="start" fill="clear" color="warning" disabled={false} onClick={() => {
              nav.push(`/ending/${params.username}/${game.mode}/${game.opponent}/${game.opponentColor}/Alex/White/Computer/Black/12/9/n`);
            }}>
              <IonIcon icon={star}></IonIcon>
            </IonButton>
          </IonItem>
        </IonCard>

      </IonContent>
    </IonPage>
  );
  // if (game.mode === "PVP") {
  //   // JSX code for generating the chess game GUI for PVP mode
  //   return (
  //     <IonPage id="game-page">
  //       {
  //         /*
  //           Page Header Code
  //           Contains a page title
  //         */
  //       }
  //       <IonHeader>
  //         <IonToolbar>
  //           <IonTitle className="game-header">
  //             Chess: <IonText color="primary">{params.username}</IonText> VS <IonText color="primary">{game.opponent}</IonText>!
  //           </IonTitle>
  //         </IonToolbar>
  //       </IonHeader>
  //       <IonContent fullscreen>

  //         <IonHeader collapse="condense">
  //           <IonToolbar>
  //             <IonTitle size="large" className="game-header">
  //               Chess: <IonText color="primary">{params.username}</IonText> VS <IonText color="primary">{game.opponent}</IonText>!
  //             </IonTitle>
  //           </IonToolbar>
  //         </IonHeader>

  //         {
  //           /*
  //             Page Content Code
  //           */
  //         }

  //         <PlayerCard
  //           cardImage='/assets/images/ChessPieces/white-Pawn.png'
  //           playerName={whitePlayerName}
  //           turnIcon={whiteTurnIcon}
  //           turnIconClr={whiteTurnIconClr}
  //           takenPieces={whitePiecesTaken}
  //         />

  //         <ChessBoard
  //           board={chessboard}
  //           locked={lockBoard}
  //           onSquareClick={onSquareClick}
  //         />

  //         <PlayerCard
  //           cardImage='/assets/images/ChessPieces/black-Pawn.png'
  //           playerName={blackPlayerName}
  //           turnIcon={blackTurnIcon}
  //           turnIconClr={blackTurnIconClr}
  //           takenPieces={blackPiecesTaken}
  //         />

  //         {
  //           /*
  //             ! Temporary buttons to aid with development
  //           */
  //         }

  //         <IonCard hidden={false}>
  //           <IonItem lines="full">
  //             DEV Action Buttons
  //           </IonItem>
  //           <IonItem lines="full">
  //             Print Current Game State/Array To Console
  //             <IonButton slot="end" fill="clear" color="secondary" onClick={() => {
  //               console.log(chessboard);
  //             }}>
  //               <IonIcon icon={hammer}></IonIcon>
  //             </IonButton>
  //           </IonItem>
  //           <IonItem lines="full">
  //             Reload/Reset Game
  //             <IonButton slot="end" fill="clear" color="secondary" onClick={() => {
  //               window.location.reload();
  //             }}>
  //               <IonIcon icon={refresh}></IonIcon>
  //             </IonButton>
  //           </IonItem>
  //           <IonItem lines="none">
  //             Go To Main Menu
  //             <IonButton slot="end" fill="clear" color="secondary" onClick={() => {
  //               nav.push(`/mainMenu/${params.username}`);
  //             }}>
  //               <IonIcon icon={home}></IonIcon>
  //             </IonButton>
  //           </IonItem>
  //         </IonCard>

  //       </IonContent>
  //     </IonPage>
  //   );
  // } else if (game.mode === "PVE") {
  //   // JSX code for generating the chess game GUI for PVE mode
  //   return (
  //     <IonPage id="game-page">
  //       {
  //         /*
  //           Page Header Code
  //           Contains a page title
  //         */
  //       }
  //       <IonHeader>
  //         <IonToolbar>
  //           <IonTitle className="game-header">
  //             Chess: <IonText color="primary">{params.username}</IonText> VS <IonText color="primary">Computer</IonText>!
  //           </IonTitle>
  //         </IonToolbar>
  //       </IonHeader>
  //       <IonContent fullscreen>

  //         <IonHeader collapse="condense">
  //           <IonToolbar>
  //             <IonTitle size="large" className="game-header">
  //               Chess: <IonText color="primary">{params.username}</IonText> VS <IonText color="primary">Computer</IonText>!
  //             </IonTitle>
  //           </IonToolbar>
  //         </IonHeader>

  //         {
  //           /*
  //             Page Content Code
  //           */
  //         }

  //         <PlayerCard
  //           cardImage='/assets/images/ChessPieces/white-Pawn.png'
  //           playerName={whitePlayerName}
  //           turnIcon={whiteTurnIcon}
  //           turnIconClr={whiteTurnIconClr}
  //           takenPieces={whitePiecesTaken}
  //         />

  //         <ChessBoard
  //           board={chessboard}
  //           locked={lockBoard}
  //           onSquareClick={onSquareClick}
  //         />

  //         <PlayerCard
  //           cardImage='/assets/images/ChessPieces/black-Pawn.png'
  //           playerName={blackPlayerName}
  //           turnIcon={blackTurnIcon}
  //           turnIconClr={blackTurnIconClr}
  //           takenPieces={blackPiecesTaken}
  //         />

  //         {
  //           /*
  //             ! Temporary buttons to aid with development
  //           */
  //         }

  //         <IonCard hidden={false}>
  //           <IonItem lines="full">
  //             DEV Action Buttons
  //           </IonItem>
  //           <IonItem lines="full">
  //             Print Current Game State/Array To Console
  //             <IonButton slot="end" fill="clear" color="secondary" onClick={() => {
  //               console.log(chessboard);
  //             }}>
  //               <IonIcon icon={hammer}></IonIcon>
  //             </IonButton>
  //           </IonItem>
  //           <IonItem lines="full">
  //             Reload/Reset Game
  //             <IonButton slot="end" fill="clear" color="secondary" onClick={() => {
  //               window.location.reload();
  //             }}>
  //               <IonIcon icon={refresh}></IonIcon>
  //             </IonButton>
  //           </IonItem>
  //           <IonItem lines="none">
  //             Go To Main Menu
  //             <IonButton slot="end" fill="clear" color="secondary" onClick={() => {
  //               nav.push(`/mainMenu/${params.username}`);
  //             }}>
  //               <IonIcon icon={home}></IonIcon>
  //             </IonButton>
  //           </IonItem>
  //         </IonCard>

  //       </IonContent>
  //     </IonPage>
  //   );
  // } else {
  //   // JSX code for generating the chess game GUI for no selected mode //TODO Turn this into a 'what to do next' page that's called when a chess game finishes
  //   return (
  //     <IonPage id="game-page">
  //       {
  //         /*
  //           Page Header Code
  //           Contains a page title
  //         */
  //       }
  //       <IonHeader>
  //         <IonToolbar>
  //           <IonTitle className="game-header">
  //             Something Went Wrong
  //           </IonTitle>
  //           <IonButton slot="end" fill="clear" color="warning" href="/Home">
  //             <IonIcon icon={logOut}></IonIcon>
  //           </IonButton>
  //         </IonToolbar>
  //       </IonHeader>
  //       <IonContent fullscreen>

  //         <IonHeader collapse="condense">
  //           <IonToolbar>
  //             <IonTitle size="large" className="game-header">
  //               Something Went Wrong
  //             </IonTitle>
  //           </IonToolbar>
  //         </IonHeader>

  //         {
  //           /*
  //             Page Content Code
  //           */
  //         }

  //       </IonContent>
  //     </IonPage>
  //   );
  // }
};

export default ChessGame;
