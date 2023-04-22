// Importing required library's
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import { logOut, hammer } from 'ionicons/icons';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import './Game.css';

// Importing required paramaters
import { GlobalParams } from '../../interfaces/GlobalParams';
import { ChessGameParams } from '../../interfaces/ChessGameParams';

// Importing page components
import ChessBoard from '../../components/chessboard/Board';

// Importing page functions
import { CreateBoard } from '../../functions/chessboard/CreateBoard';
import { updateBoard } from '../../functions/chessboard/UpdateBoard';
import { pawnPiece } from '../../functions/chessboard/Pawn';
import { rookPiece } from '../../functions/chessboard/Rook';
import { knightPiece } from '../../functions/chessboard/Knight';
import { bishopPiece } from '../../functions/chessboard/Bishop';
import { queenPiece } from '../../functions/chessboard/Queen';
import { kingPiece } from '../../functions/chessboard/King';

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

  // Declaring variable to keep track of whether or not a source square has been selected
  const [isSourceSelect, setIsSourceSelected] = useState<boolean>(false);

  // Declaring variables to; store the color used to highlight squares, and store the base color of the square being highlighted
  const [highlighter] = useState<string>("#eeff00");
  const [preHighlight, setPreHighlight] = useState<string>("");

  // Declaring variables to store source and target squares selected on the board for each move
  const [sourceSquare, setSourceSquare] = useState({row: NaN, col: NaN, piece: {type: "Blank", color: "any"}, color: ""});
  //const [targetSquare, setTargetSquare] = useState({row: NaN, col: NaN, piece: {type: "Blank", color: "any"}, color: ""}); //? May not need this variable???

  // Function that handles what happens each time a board square is clicked
  function onSquareClick(square: any) {
    // If statement to check if a source square has been selected
    // If there's no source square, function will attempt to get a source square
    // If there is a source square, function will attempt to get a target square
    if (!isSourceSelect) {
      // Attempting to get a source square
      // Guard statement to check if the selected square has a piece, will return is square is empty
      if (square.piece.type === "Blank") {return;}
      // Guard statement to check if the correct color piece is being moved for the current player turn
      if ((square.piece.color === "white" && turn === "b") || (square.piece.color === "black" && turn === "w")) {return;}
      // Tells system that a source square has been selected
      setIsSourceSelected(true);
      // Saves a copy of the selected source square
      setSourceSquare(square);
      // Updates main game array to highlight the selected source square
      let newChessboard = Array.from(chessboard);
      let updateSquare = newChessboard[square.row][square.col];
      setPreHighlight(updateSquare.color);
      updateSquare.color = highlighter;
      setChessboard(newChessboard);
      return;
    } else {
      // Attempting to get a target square
      // Check if the target square is the same as the source square, will unselect the source square if true
      if (square === sourceSquare) {
        // Tell the system that there is no longer a source square selected
        setIsSourceSelected(false);
        // Updates main game array to un-highlight the selected source square
        let newChessboard = Array.from(chessboard);
        let updateSquare = newChessboard[sourceSquare.row][sourceSquare.col];
        updateSquare.color = preHighlight;
        setChessboard(newChessboard);
        return;
      }
      // Guard statement to check if the selected square does not have a piece, will return is square is not empty
      // if (square.piece.type !== "Blank") {return;} //? May not be needed??? This validation is handled by the individual piece functions?
      // Finds what piece is being moved and calls corresponding function
      if (sourceSquare.piece.type === "Pawn") {
        // Guard statement to check if the selected move is valid, will return if move is not valid
        if (!pawnPiece(sourceSquare, square)) {return;}
      }
      if (sourceSquare.piece.type === "Rook") {
        // Guard statement to check if the selected move is valid, will return if move is not valid
        if (!rookPiece(sourceSquare, square)) {return;}
      }
      if (sourceSquare.piece.type === "Knight") {
        // Guard statement to check if the selected move is valid, will return if move is not valid
        if (!knightPiece(sourceSquare, square)) {return;}
      }
      if (sourceSquare.piece.type === "Bishop") {
        // Guard statement to check if the selected move is valid, will return if move is not valid
        if (!bishopPiece(sourceSquare, square)) {return;}
      }
      if (sourceSquare.piece.type === "Queen") {
        // Guard statement to check if the selected move is valid, will return if move is not valid
        if (!queenPiece(sourceSquare, square)) {return;}
      }
      if (sourceSquare.piece.type === "King") {
        // Guard statement to check if the selected move is valid, will return if move is not valid
        if (!kingPiece(sourceSquare, square)) {return;}
      }
      // Move the piece from the source square to the target square
      setChessboard(updateBoard(sourceSquare, square, chessboard));
      // Tell the system that there is no longer a source square selected
      setIsSourceSelected(false);
      // Updates main game array to un-highlight the selected source square
      let newChessboard = Array.from(chessboard);
      let updateSquare = newChessboard[sourceSquare.row][sourceSquare.col];
      updateSquare.color = preHighlight;
      setChessboard(newChessboard);
      // Switch to the other players turn
      if (turn === "w") {
        setTurn("b");
      } else {
        setTurn("w");
      }
      return;
    }
    console.log("Something Went Wrong!"); //! Remove this later
    return; //! And remove this if it cannot be triggered
  }

  // IF statement to render page GUI differently depending on what game mode is selected
  if (game.mode === "PVP") {
    // JSX code for generating the chess game GUI for PVP mode
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
            <IonButton slot="end" fill="clear" color="danger" onClick={() => {
              console.log(chessboard);
            }}>
              <IonIcon icon={hammer}></IonIcon>
            </IonButton>
            <IonButton slot="end" fill="clear" color="danger" href="/Home">
              <IonIcon icon={logOut}></IonIcon>
            </IonButton>
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

          <ChessBoard
            board={chessboard}
            onSquareClick={onSquareClick}
          />

        </IonContent>
      </IonPage>
    );
  } else if (game.mode === "PVE") {
    // JSX code for generating the chess game GUI for PVE mode
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
              Chess: <IonText color="primary">{params.username}</IonText> VS <IonText color="primary">Computer</IonText>!
            </IonTitle>
            <IonButton slot="end" fill="clear" color="danger" onClick={() => {
              console.log(chessboard);
            }}>
              <IonIcon icon={hammer}></IonIcon>
            </IonButton>
            <IonButton slot="end" fill="clear" color="danger" href="/Home">
              <IonIcon icon={logOut}></IonIcon>
            </IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large" className="game-header">
                Chess: <IonText color="primary">{params.username}</IonText> VS <IonText color="primary">Computer</IonText>!
              </IonTitle>
            </IonToolbar>
          </IonHeader>

          {
            /*
              Page Content Code
            */
          }

          <ChessBoard
            board={chessboard}
            onSquareClick={onSquareClick}
          />

        </IonContent>
      </IonPage>
    );
  } else {
    // JSX code for generating the chess game GUI for no selected mode //TODO Turn this into a 'what to do next' page that's called when a chess game finishes
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
              Something Went Wrong
            </IonTitle>
            <IonButton slot="end" fill="clear" color="warning" href="/Home">
              <IonIcon icon={logOut}></IonIcon>
            </IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large" className="game-header">
                Something Went Wrong
              </IonTitle>
            </IonToolbar>
          </IonHeader>

          {
            /*
              Page Content Code
            */
          }

        </IonContent>
      </IonPage>
    );
  }
};

export default ChessGame;
