// Importing GUI components
import { useState } from 'react';
import {
  IonCard,
  IonCol,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import './ChessBoard.css';
import ChessBoard from '../../components/ChessBoardMockup';

const ChessBoardMockup: React.FC = () => {

  // ChessBoardJSX library testing stuff
  const [position, setPosition] = useState("start");
  const handleDrop = (sourceSquare: string, targetSquare: string) => {
    // Write code that handles the piece movement here
  }

  // Setup navigation system on this page so we can call other pages
  // Powered by nav system in App.tsx
  const nav = useIonRouter();

  // Declaring blank images/chess pieces for testing
  // Variables like these are likely how we would move chess pieces around the board
  var testPiece: string = "/assets/images/ChessPieces/test.png";
  var testPieceBlank: string = "/assets/images/ChessPieces/blankSquare.png";
  var testPawn: string = "/assets/images/ChessPieces/pawn.png";

  var [piecePick, setpiecePick] = useState<number>(0)

  // Declaring backend ID based variables for each square on the chess board
  // These variables are how we place a piece of the chess board
  // There will be one variable for each chess piece and one variable for a blank square
  // The piece variables can then be assigned to a square to make the pieces move
  var [sqrA1, setSqrA1] = useState<string>(testPiece);
  var [sqrA2, setSqrA2] = useState<string>(testPiece);
  var [sqrA3, setSqrA3] = useState<string>(testPiece);
  var [sqrA4, setSqrA4] = useState<string>(testPiece);
  var [sqrA5, setSqrA5] = useState<string>(testPiece);
  var [sqrA6, setSqrA6] = useState<string>(testPiece);
  var [sqrA7, setSqrA7] = useState<string>(testPiece);
  var [sqrA8, setSqrA8] = useState<string>(testPiece);
  
  var [sqrB1, setSqrB1] = useState<string>(testPawn);
  var [sqrB2, setSqrB2] = useState<string>(testPawn);
  var [sqrB3, setSqrB3] = useState<string>(testPawn);
  var [sqrB4, setSqrB4] = useState<string>(testPawn);
  var [sqrB5, setSqrB5] = useState<string>(testPawn);
  var [sqrB6, setSqrB6] = useState<string>(testPawn);
  var [sqrB7, setSqrB7] = useState<string>(testPawn);
  var [sqrB8, setSqrB8] = useState<string>(testPawn);

  var [sqrC1, setSqrC1] = useState<string>(testPieceBlank);
  var [sqrC2, setSqrC2] = useState<string>(testPieceBlank);
  var [sqrC3, setSqrC3] = useState<string>(testPieceBlank);
  var [sqrC4, setSqrC4] = useState<string>(testPieceBlank);
  var [sqrC5, setSqrC5] = useState<string>(testPieceBlank);
  var [sqrC6, setSqrC6] = useState<string>(testPieceBlank);
  var [sqrC7, setSqrC7] = useState<string>(testPieceBlank);
  var [sqrC8, setSqrC8] = useState<string>(testPieceBlank);

  var [sqrD1, setSqrD1] = useState<string>(testPieceBlank);
  var [sqrD2, setSqrD2] = useState<string>(testPieceBlank);
  var [sqrD3, setSqrD3] = useState<string>(testPieceBlank);
  var [sqrD4, setSqrD4] = useState<string>(testPieceBlank);
  var [sqrD5, setSqrD5] = useState<string>(testPieceBlank);
  var [sqrD6, setSqrD6] = useState<string>(testPieceBlank);
  var [sqrD7, setSqrD7] = useState<string>(testPieceBlank);
  var [sqrD8, setSqrD8] = useState<string>(testPieceBlank);
  
  var [sqrE1, setSqrE1] = useState<string>(testPieceBlank);
  var [sqrE2, setSqrE2] = useState<string>(testPieceBlank);
  var [sqrE3, setSqrE3] = useState<string>(testPieceBlank);
  var [sqrE4, setSqrE4] = useState<string>(testPieceBlank);
  var [sqrE5, setSqrE5] = useState<string>(testPieceBlank);
  var [sqrE6, setSqrE6] = useState<string>(testPieceBlank);
  var [sqrE7, setSqrE7] = useState<string>(testPieceBlank);
  var [sqrE8, setSqrE8] = useState<string>(testPieceBlank);

  var [sqrF1, setSqrF1] = useState<string>(testPieceBlank);
  var [sqrF2, setSqrF2] = useState<string>(testPieceBlank);
  var [sqrF3, setSqrF3] = useState<string>(testPieceBlank);
  var [sqrF4, setSqrF4] = useState<string>(testPieceBlank);
  var [sqrF5, setSqrF5] = useState<string>(testPieceBlank);
  var [sqrF6, setSqrF6] = useState<string>(testPieceBlank);
  var [sqrF7, setSqrF7] = useState<string>(testPieceBlank);
  var [sqrF8, setSqrF8] = useState<string>(testPieceBlank);

  var [sqrG1, setSqrG1] = useState<string>(testPawn);
  var [sqrG2, setSqrG2] = useState<string>(testPawn);
  var [sqrG3, setSqrG3] = useState<string>(testPawn);
  var [sqrG4, setSqrG4] = useState<string>(testPawn);
  var [sqrG5, setSqrG5] = useState<string>(testPawn);
  var [sqrG6, setSqrG6] = useState<string>(testPawn);
  var [sqrG7, setSqrG7] = useState<string>(testPawn);
  var [sqrG8, setSqrG8] = useState<string>(testPawn);

  var [sqrH1, setSqrH1] = useState<string>(testPiece);
  var [sqrH2, setSqrH2] = useState<string>(testPiece);
  var [sqrH3, setSqrH3] = useState<string>(testPiece);
  var [sqrH4, setSqrH4] = useState<string>(testPiece);
  var [sqrH5, setSqrH5] = useState<string>(testPiece);
  var [sqrH6, setSqrH6] = useState<string>(testPiece);
  var [sqrH7, setSqrH7] = useState<string>(testPiece);
  var [sqrH8, setSqrH8] = useState<string>(testPiece);

  // Variable that saves what type of piece is being moved
  var [savePiece, setSavePiece] = useState<string>(testPieceBlank)

  // Function that places and removes pieces based on given paramaters
  function movePiece(placePiece: boolean, square: string, piece: string) {
    console.log(placePiece); //! Remove later
    // A squares
    if (square === "A1") {
      if (placePiece === true) {setSqrA1(piece)}
      if (placePiece === false) {setSqrA1(testPieceBlank)}
    }
    if (square === "A2") {
      if (placePiece === true) {setSqrA2(piece)}
      if (placePiece === false) {setSqrA2(testPieceBlank)}
    }
    if (square === "A3") {
      if (placePiece === true) {setSqrA3(piece)}
      if (placePiece === false) {setSqrA3(testPieceBlank)}
    }
    if (square === "A4") {
      if (placePiece === true) {setSqrA4(piece)}
      if (placePiece === false) {setSqrA4(testPieceBlank)}
    }
    if (square === "A5") {
      if (placePiece === true) {setSqrA5(piece)}
      if (placePiece === false) {setSqrA5(testPieceBlank)}
    }
    if (square === "A6") {
      if (placePiece === true) {setSqrA6(piece)}
      if (placePiece === false) {setSqrA6(testPieceBlank)}
    }
    if (square === "A7") {
      if (placePiece === true) {setSqrA7(piece)}
      if (placePiece === false) {setSqrA7(testPieceBlank)}
    }
    if (square === "A8") {
      if (placePiece === true) {setSqrA8(piece)}
      if (placePiece === false) {setSqrA8(testPieceBlank)}
    }
    // B squares
    if (square === "B1") {
      if (placePiece === true) {setSqrB1(piece)}
      if (placePiece === false) {setSqrB1(testPieceBlank)}
    }
    if (square === "B2") {
      if (placePiece === true) {setSqrB2(piece)}
      if (placePiece === false) {setSqrB2(testPieceBlank)}
    }
    if (square === "B3") {
      if (placePiece === true) {setSqrB3(piece)}
      if (placePiece === false) {setSqrB3(testPieceBlank)}
    }
    if (square === "B4") {
      if (placePiece === true) {setSqrB4(piece)}
      if (placePiece === false) {setSqrB4(testPieceBlank)}
    }
    if (square === "B5") {
      if (placePiece === true) {setSqrB5(piece)}
      if (placePiece === false) {setSqrB5(testPieceBlank)}
    }
    if (square === "B6") {
      if (placePiece === true) {setSqrB6(piece)}
      if (placePiece === false) {setSqrB6(testPieceBlank)}
    }
    if (square === "B7") {
      if (placePiece === true) {setSqrB7(piece)}
      if (placePiece === false) {setSqrB7(testPieceBlank)}
    }
    if (square === "B8") {
      if (placePiece === true) {setSqrB8(piece)}
      if (placePiece === false) {setSqrB8(testPieceBlank)}
    }
    // C squares
    if (square === "C1") {
      if (placePiece === true) {setSqrC1(piece)}
      if (placePiece === false) {setSqrC1(testPieceBlank)}
    }
    if (square === "C2") {
      if (placePiece === true) {setSqrC2(piece)}
      if (placePiece === false) {setSqrC2(testPieceBlank)}
    }
    if (square === "C3") {
      if (placePiece === true) {setSqrC3(piece)}
      if (placePiece === false) {setSqrC3(testPieceBlank)}
    }
    if (square === "C4") {
      if (placePiece === true) {setSqrC4(piece)}
      if (placePiece === false) {setSqrC4(testPieceBlank)}
    }
    if (square === "C5") {
      if (placePiece === true) {setSqrC5(piece)}
      if (placePiece === false) {setSqrC5(testPieceBlank)}
    }
    if (square === "C6") {
      if (placePiece === true) {setSqrC6(piece)}
      if (placePiece === false) {setSqrC6(testPieceBlank)}
    }
    if (square === "C7") {
      if (placePiece === true) {setSqrC7(piece)}
      if (placePiece === false) {setSqrC7(testPieceBlank)}
    }
    if (square === "C8") {
      if (placePiece === true) {setSqrC8(piece)}
      if (placePiece === false) {setSqrC8(testPieceBlank)}
    }
    // D squares
    if (square === "D1") {
      if (placePiece === true) {setSqrD1(piece)}
      if (placePiece === false) {setSqrD1(testPieceBlank)}
    }
    if (square === "D2") {
      if (placePiece === true) {setSqrD2(piece)}
      if (placePiece === false) {setSqrD2(testPieceBlank)}
    }
    if (square === "D3") {
      if (placePiece === true) {setSqrD3(piece)}
      if (placePiece === false) {setSqrD3(testPieceBlank)}
    }
    if (square === "D4") {
      if (placePiece === true) {setSqrD4(piece)}
      if (placePiece === false) {setSqrD4(testPieceBlank)}
    }
    if (square === "D5") {
      if (placePiece === true) {setSqrD5(piece)}
      if (placePiece === false) {setSqrD5(testPieceBlank)}
    }
    if (square === "D6") {
      if (placePiece === true) {setSqrD6(piece)}
      if (placePiece === false) {setSqrD6(testPieceBlank)}
    }
    if (square === "D7") {
      if (placePiece === true) {setSqrD7(piece)}
      if (placePiece === false) {setSqrD7(testPieceBlank)}
    }
    if (square === "D8") {
      if (placePiece === true) {setSqrD8(piece)}
      if (placePiece === false) {setSqrD8(testPieceBlank)}
    }
    // E squares
    if (square === "E1") {
      if (placePiece === true) {setSqrE1(piece)}
      if (placePiece === false) {setSqrE1(testPieceBlank)}
    }
    if (square === "E2") {
      if (placePiece === true) {setSqrE2(piece)}
      if (placePiece === false) {setSqrE2(testPieceBlank)}
    }
    if (square === "E3") {
      if (placePiece === true) {setSqrE3(piece)}
      if (placePiece === false) {setSqrE3(testPieceBlank)}
    }
    if (square === "E4") {
      if (placePiece === true) {setSqrE4(piece)}
      if (placePiece === false) {setSqrE4(testPieceBlank)}
    }
    if (square === "E5") {
      if (placePiece === true) {setSqrE5(piece)}
      if (placePiece === false) {setSqrE5(testPieceBlank)}
    }
    if (square === "E6") {
      if (placePiece === true) {setSqrE6(piece)}
      if (placePiece === false) {setSqrE6(testPieceBlank)}
    }
    if (square === "E7") {
      if (placePiece === true) {setSqrE7(piece)}
      if (placePiece === false) {setSqrE7(testPieceBlank)}
    }
    if (square === "E8") {
      if (placePiece === true) {setSqrE8(piece)}
      if (placePiece === false) {setSqrE8(testPieceBlank)}
    }
    // F squares
    if (square === "F1") {
      if (placePiece === true) {setSqrF1(piece)}
      if (placePiece === false) {setSqrF1(testPieceBlank)}
    }
    if (square === "F2") {
      if (placePiece === true) {setSqrF2(piece)}
      if (placePiece === false) {setSqrF2(testPieceBlank)}
    }
    if (square === "F3") {
      if (placePiece === true) {setSqrF3(piece)}
      if (placePiece === false) {setSqrF3(testPieceBlank)}
    }
    if (square === "F4") {
      if (placePiece === true) {setSqrF4(piece)}
      if (placePiece === false) {setSqrF4(testPieceBlank)}
    }
    if (square === "F5") {
      if (placePiece === true) {setSqrF5(piece)}
      if (placePiece === false) {setSqrF5(testPieceBlank)}
    }
    if (square === "F6") {
      if (placePiece === true) {setSqrF6(piece)}
      if (placePiece === false) {setSqrF6(testPieceBlank)}
    }
    if (square === "F7") {
      if (placePiece === true) {setSqrF7(piece)}
      if (placePiece === false) {setSqrF7(testPieceBlank)}
    }
    if (square === "F8") {
      if (placePiece === true) {setSqrF8(piece)}
      if (placePiece === false) {setSqrF8(testPieceBlank)}
    }
    // G squares
    if (square === "G1") {
      if (placePiece === true) {setSqrG1(piece)}
      if (placePiece === false) {setSqrG1(testPieceBlank)}
    }
    if (square === "G2") {
      if (placePiece === true) {setSqrG2(piece)}
      if (placePiece === false) {setSqrG2(testPieceBlank)}
    }
    if (square === "G3") {
      if (placePiece === true) {setSqrG3(piece)}
      if (placePiece === false) {setSqrG3(testPieceBlank)}
    }
    if (square === "G4") {
      if (placePiece === true) {setSqrG4(piece)}
      if (placePiece === false) {setSqrG4(testPieceBlank)}
    }
    if (square === "G5") {
      if (placePiece === true) {setSqrG5(piece)}
      if (placePiece === false) {setSqrG5(testPieceBlank)}
    }
    if (square === "G6") {
      if (placePiece === true) {setSqrG6(piece)}
      if (placePiece === false) {setSqrG6(testPieceBlank)}
    }
    if (square === "G7") {
      if (placePiece === true) {setSqrG7(piece)}
      if (placePiece === false) {setSqrG7(testPieceBlank)}
    }
    if (square === "G8") {
      if (placePiece === true) {setSqrG8(piece)}
      if (placePiece === false) {setSqrG8(testPieceBlank)}
    }
    // H squares
    if (square === "H1") {
      if (placePiece === true) {setSqrH1(piece)}
      if (placePiece === false) {setSqrH1(testPieceBlank)}
    }
    if (square === "H2") {
      if (placePiece === true) {setSqrH2(piece)}
      if (placePiece === false) {setSqrH2(testPieceBlank)}
    }
    if (square === "H3") {
      if (placePiece === true) {setSqrH3(piece)}
      if (placePiece === false) {setSqrH3(testPieceBlank)}
    }
    if (square === "H4") {
      if (placePiece === true) {setSqrH4(piece)}
      if (placePiece === false) {setSqrH4(testPieceBlank)}
    }
    if (square === "H5") {
      if (placePiece === true) {setSqrH5(piece)}
      if (placePiece === false) {setSqrH5(testPieceBlank)}
    }
    if (square === "H6") {
      if (placePiece === true) {setSqrH6(piece)}
      if (placePiece === false) {setSqrH6(testPieceBlank)}
    }
    if (square === "H7") {
      if (placePiece === true) {setSqrH7(piece)}
      if (placePiece === false) {setSqrH7(testPieceBlank)}
    }
    if (square === "H8") {
      if (placePiece === true) {setSqrH8(piece)}
      if (placePiece === false) {setSqrH8(testPieceBlank)}
    }
  }

  // Function that checks what square was selected and works out whether a piece should be placed or removed and on what squares
  function selectSquare(state: string, square: string) {
    console.log("State = " + state); //! Remove later
    if (state === testPiece && piecePick === 0 || state === testPawn && piecePick === 0 )  { //? Remember to add new pieces into this OR statment, eventually swap it out for an array???
      setpiecePick(1)
      console.log(piecePick)
      movePiece(false, square, state);
      setSavePiece(state);
      savePiece = state;
      console.log(savePiece); //! Remove later
    } else if (state === testPieceBlank && piecePick === 1 ){
      console.log("Save = " + savePiece); //! Remove later
      movePiece(true, square, savePiece);
      setpiecePick(0)
    }
  }

//functioon for the pawn piece 
 function pawn(square: string)
 {
  if (square == "B1" || square == "B2" || square == "B3" || square == "B4" || square == "B5" || square == "B6" || square == "B7" || square == "B8")
  {

  }

 }




  // JSX GUI code
  return (
    <IonPage id="chess-board-mockup-page">
      {
        /*
          Page Header Code
        */
      }
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Chess Board Mockup
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Chess Board Mockup
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        {
          /*
            Page Content Code
          */
        }

        {
          /*
            DEV button that takes you to the home page
          */
        }
        <IonCard onClick={() => {
          nav.push('/Home');
        }}>
          <IonItem color="primary">
            <IonLabel className="dev-button">
              <IonText className="dev-button-text">
                DEV Button To Home Page
              </IonText>
            </IonLabel>
          </IonItem>
        </IonCard>

        {
          /*
            Chess Board Mockup
          */
        }
        <IonCard>
          <IonRow>
            <IonCol className="blue-square" onClick={() => {
              console.log("sqrA1 = " + sqrA1) //! Remove later
              selectSquare(sqrA1,"A1");
            }}>
              <img className='chess-piece' src={sqrA1}></img>
            </IonCol>
            <IonCol className='white-square' onClick={() => {selectSquare(sqrA2,"A2");
            }}>
              <img className='chess-piece' src={sqrA2}></img>
            </IonCol>
            <IonCol className="blue-square" onClick={() => {selectSquare(sqrA3,"A3");
            }}>
              <img className='chess-piece' src={sqrA3}></img>
            </IonCol>
            <IonCol className='white-square' onClick={() => {selectSquare(sqrA4,"A4");
            }}>
              <img className='chess-piece' src={sqrA4}></img>
            </IonCol>
            <IonCol className="blue-square" onClick={() => {selectSquare(sqrA5,"A5");
            }}>
              <img className='chess-piece' src={sqrA5}></img>
            </IonCol>
            <IonCol className='white-square' onClick={() => {selectSquare(sqrA6,"A6");
            }}>
              <img className='chess-piece' src={sqrA6}></img>
            </IonCol>
            <IonCol className="blue-square" onClick={() => {selectSquare(sqrA7,"A7");
            }}>
              <img className='chess-piece' src={sqrA7}></img>
            </IonCol>
            <IonCol className='white-square' onClick={() => {selectSquare(sqrA8,"A8");
            }}>
              <img className='chess-piece' src={sqrA8}></img>
            </IonCol>
          </IonRow>
          {
            /*
              Board Row Divider For Convenience
            */
          }
          <IonRow>
            <IonCol className="white-square" onClick={() => {selectSquare(sqrB1,"B1");
              }}>
              <img className='chess-piece' src={sqrB1}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {selectSquare(sqrB2,"B2");
          }}>
              <img className='chess-piece' src={sqrB2}></img>
            </IonCol>
            <IonCol className="white-square" onClick={() => {selectSquare(sqrB3,"B3");
          }}>
              <img className='chess-piece' src={sqrB3}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {selectSquare(sqrB4,"B4");}}>
              <img className='chess-piece' src={sqrB4}></img>
            </IonCol>
            <IonCol className="white-square" onClick={() => {selectSquare(sqrB5,"B5");}}>
              <img className='chess-piece' src={sqrB5}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {selectSquare(sqrB6,"B6");}}>
              <img className='chess-piece' src={sqrB6}></img>
            </IonCol>
            <IonCol className="white-square" onClick={() => {selectSquare(sqrB7,"B7");}}>
              <img className='chess-piece' src={sqrB7}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {selectSquare(sqrB8,"B8");}}>
              <img className='chess-piece' src={sqrB8}></img>
            </IonCol>
          </IonRow>
          {
            /*
              Board Row Divider For Convenience
            */
          }
          <IonRow>
            <IonCol className="blue-square" onClick={() => {
                selectSquare(sqrC1,"C1");
              }}>
              <img className='chess-piece' src={sqrC1}></img>
            </IonCol>
            <IonCol className='white-square' onClick={() => {selectSquare(sqrC2,"C2");}}>
              <img className='chess-piece' src={sqrC2}></img>
            </IonCol>
            <IonCol className="blue-square" onClick={() => {selectSquare(sqrC3,"C3");}}>
              <img className='chess-piece' src={sqrC3}></img>
            </IonCol>
            <IonCol className='white-square'onClick={() => {selectSquare(sqrC4,"C4");}}>
              <img className='chess-piece' src={sqrC4}></img>
            </IonCol>
            <IonCol className="blue-square"onClick={() => {selectSquare(sqrC5,"C5");}}>
              <img className='chess-piece' src={sqrC5}></img>
            </IonCol>
            <IonCol className='white-square'onClick={() => {selectSquare(sqrC6,"C6");}}>
              <img className='chess-piece' src={sqrC6}></img>
            </IonCol>
            <IonCol className="blue-square"onClick={() => {selectSquare(sqrC7,"C7");}}>
              <img className='chess-piece' src={sqrC7}></img>
            </IonCol>
            <IonCol className='white-square'onClick={() => {selectSquare(sqrC8,"C8");}}>
              <img className='chess-piece' src={sqrC8}></img>
            </IonCol>
          </IonRow>
          {
            /*
              Board Row Divider For Convenience
            */
          }
          <IonRow>
            <IonCol className="white-square" onClick={() => {selectSquare(sqrD1,"D1");}}>
              <img className='chess-piece' src={sqrD1}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {selectSquare(sqrD2,"D2");}}>
              <img className='chess-piece' src={sqrD2}></img>
            </IonCol>
            <IonCol className="white-square" onClick={() => {selectSquare(sqrD3,"D3");}}>
              <img className='chess-piece' src={sqrD3}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {selectSquare(sqrD4,"D4");}}>
              <img className='chess-piece' src={sqrD4}></img>
            </IonCol>
            <IonCol className="white-square" onClick={() => {selectSquare(sqrD5,"D5");}}>
              <img className='chess-piece' src={sqrD5}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {selectSquare(sqrD6,"D6");}}>
              <img className='chess-piece' src={sqrD6}></img>
            </IonCol>
            <IonCol className="white-square" onClick={() => {selectSquare(sqrD7,"D7");}}>
              <img className='chess-piece' src={sqrD7}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {selectSquare(sqrD8,"D8");}}>
              <img className='chess-piece' src={sqrD8}></img>
            </IonCol>
          </IonRow>
          {
            /*
              Board Row Divider For Convenience
            */
          }
          <IonRow>
            <IonCol className="blue-square"onClick={() => {selectSquare(sqrE1,"E1");}}>
              <img className='chess-piece' src={sqrE1}></img>
            </IonCol>
            <IonCol className='white-square'onClick={() => {selectSquare(sqrE2,"E2");}}>
              <img className='chess-piece' src={sqrE2}></img>
            </IonCol>
            <IonCol className="blue-square"onClick={() => {selectSquare(sqrE3,"E3");}}>
              <img className='chess-piece' src={sqrE3}></img>
            </IonCol>
            <IonCol className='white-square'onClick={() => {selectSquare(sqrE4,"E4");}}>
              <img className='chess-piece' src={sqrE4}></img>
            </IonCol>
            <IonCol className="blue-square"onClick={() => {selectSquare(sqrE5,"E5");}}>
              <img className='chess-piece' src={sqrE5}></img>
            </IonCol>
            <IonCol className='white-square'onClick={() => {selectSquare(sqrE6,"E6");}}>
              <img className='chess-piece' src={sqrE6}></img>
            </IonCol>
            <IonCol className="blue-square"onClick={() => {selectSquare(sqrE7,"E7");}}>
              <img className='chess-piece' src={sqrE7}></img>
            </IonCol>
            <IonCol className='white-square'onClick={() => {selectSquare(sqrE8,"E8");}}>
              <img className='chess-piece' src={sqrE8}></img>
            </IonCol>
          </IonRow>
          {
            /*
              Board Row Divider For Convenience
            */
          }
          <IonRow>
            <IonCol className="white-square" onClick={() => {selectSquare(sqrF1,"F1");}}>
              <img className='chess-piece' src={sqrF1}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {selectSquare(sqrF2,"F2");}}>
              <img className='chess-piece' src={sqrF2}></img>
            </IonCol>
            <IonCol className="white-square" onClick={() => {selectSquare(sqrF3,"F3");}}>
              <img className='chess-piece' src={sqrF3}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {selectSquare(sqrF4,"F4");}}>
              <img className='chess-piece' src={sqrF4}></img>
            </IonCol>
            <IonCol className="white-square" onClick={() => {selectSquare(sqrF5,"F5");}}>
              <img className='chess-piece' src={sqrF5}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {selectSquare(sqrF6,"F6");}}>
              <img className='chess-piece' src={sqrF6}></img>
            </IonCol>
            <IonCol className="white-square" onClick={() => {selectSquare(sqrF7,"F7");}}>
              <img className='chess-piece' src={sqrF7}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {selectSquare(sqrF8,"F8");}}>
              <img className='chess-piece' src={sqrF8}></img>
            </IonCol>
          </IonRow>
          {
            /*
              Board Row Divider For Convenience
            */
          }
          <IonRow>
            <IonCol className="blue-square"onClick={() => {selectSquare(sqrG1,"G1");}}>
              <img className='chess-piece' src={sqrG1}></img>
            </IonCol>
            <IonCol className='white-square'onClick={() => {selectSquare(sqrG2,"G2");}}>
              <img className='chess-piece' src={sqrG2}></img>
            </IonCol>
            <IonCol className="blue-square"onClick={() => {selectSquare(sqrG3,"G3");}}>
              <img className='chess-piece' src={sqrG3}></img>
            </IonCol>
            <IonCol className='white-square'onClick={() => {selectSquare(sqrG4,"G4");}}>
              <img className='chess-piece' src={sqrG4}></img>
            </IonCol>
            <IonCol className="blue-square"onClick={() => {selectSquare(sqrG5,"G5");}}>
              <img className='chess-piece' src={sqrG5}></img>
            </IonCol>
            <IonCol className='white-square'onClick={() => {selectSquare(sqrG6,"G6");}}>
              <img className='chess-piece' src={sqrG6}></img>
            </IonCol>
            <IonCol className="blue-square"onClick={() => {selectSquare(sqrG7,"G7");}}>
              <img className='chess-piece' src={sqrG7}></img>
            </IonCol>
            <IonCol className='white-square'onClick={() => {selectSquare(sqrG8,"G8");}}>
              <img className='chess-piece' src={sqrG8}></img>
            </IonCol>
          </IonRow>
          {
            /*
              Board Row Divider For Convenience
            */
          }
          <IonRow>
            <IonCol className="white-square" onClick={() => {selectSquare(sqrH1,"H1");}}>
              <img className='chess-piece' src={sqrH1}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {selectSquare(sqrH2,"H2");}}>
              <img className='chess-piece' src={sqrH2}></img>
            </IonCol>
            <IonCol className="white-square" onClick={() => {selectSquare(sqrH3,"H3");}}>
              <img className='chess-piece' src={sqrH3}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {selectSquare(sqrH4,"H4");}}>
              <img className='chess-piece' src={sqrH4}></img>
            </IonCol>
            <IonCol className="white-square" onClick={() => {selectSquare(sqrH5,"H5");}}>
              <img className='chess-piece' src={sqrH5}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {selectSquare(sqrH6,"H6");}}>
              <img className='chess-piece' src={sqrH6}></img>
            </IonCol>
            <IonCol className="white-square" onClick={() => {selectSquare(sqrH7,"H7");}}>
              <img className='chess-piece' src={sqrH7}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {selectSquare(sqrH8,"H8");}}>
              <img className='chess-piece' src={sqrH8}></img>
            </IonCol>
          </IonRow>
        </IonCard>

        {
          /*
            ChessBoardJSXlibrary Chess board mockup
          */
        }
        <IonCard>
          <ChessBoard position={position} onDrop={handleDrop} width={380}></ChessBoard>
        </IonCard>
        
      </IonContent>
    </IonPage>
  );
}

export default ChessBoardMockup;