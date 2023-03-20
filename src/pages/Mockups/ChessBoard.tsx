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

const ChessBoardMockup: React.FC = () => {

  // Setup navigation system on this page so we can call other pages
  // Powered by nav system in App.tsx
  const nav = useIonRouter();

  // Declaring blank images/chess pieces for testing
  // Variables like these are likely how we would move chess pieces around the board
  var testPiece: string = "/assets/images/ChessPieces/test.png";
  var testPieceBlank: string = "/assets/images/ChessPieces/blankSquare.png";
  
  // Declaring backend ID based variables for each square on the chess board
  // These variables are how we place a piece of the chess board
  // There will be one variable for each chess piece and one variable for a blank square
  // The piece variables can then be assigned to a square to make the pieces move
  const [sqrA1, setSqrA1] = useState<string>(testPiece);
  const [sqrA2, setSqrA2] = useState<string>(testPiece);
  const [sqrA3, setSqrA3] = useState<string>(testPiece);
  const [sqrA4, setSqrA4] = useState<string>(testPiece);
  const [sqrA5, setSqrA5] = useState<string>(testPiece);
  const [sqrA6, setSqrA6] = useState<string>(testPiece);
  const [sqrA7, setSqrA7] = useState<string>(testPiece);
  const [sqrA8, setSqrA8] = useState<string>(testPiece);
  
  const [sqrB1, setSqrB1] = useState<string>(testPiece);
  const [sqrB2, setSqrB2] = useState<string>(testPiece);
  const [sqrB3, setSqrB3] = useState<string>(testPiece);
  const [sqrB4, setSqrB4] = useState<string>(testPiece);
  const [sqrB5, setSqrB5] = useState<string>(testPiece);
  const [sqrB6, setSqrB6] = useState<string>(testPiece);
  const [sqrB7, setSqrB7] = useState<string>(testPiece);
  const [sqrB8, setSqrB8] = useState<string>(testPiece);

  const [sqrC1, setSqrC1] = useState<string>(testPieceBlank);
  const [sqrC2, setSqrC2] = useState<string>(testPieceBlank);
  const [sqrC3, setSqrC3] = useState<string>(testPieceBlank);
  const [sqrC4, setSqrC4] = useState<string>(testPieceBlank);
  const [sqrC5, setSqrC5] = useState<string>(testPieceBlank);
  const [sqrC6, setSqrC6] = useState<string>(testPieceBlank);
  const [sqrC7, setSqrC7] = useState<string>(testPieceBlank);
  const [sqrC8, setSqrC8] = useState<string>(testPieceBlank);

  const [sqrD1, setSqrD1] = useState<string>(testPieceBlank);
  const [sqrD2, setSqrD2] = useState<string>(testPieceBlank);
  const [sqrD3, setSqrD3] = useState<string>(testPieceBlank);
  const [sqrD4, setSqrD4] = useState<string>(testPieceBlank);
  const [sqrD5, setSqrD5] = useState<string>(testPieceBlank);
  const [sqrD6, setSqrD6] = useState<string>(testPieceBlank);
  const [sqrD7, setSqrD7] = useState<string>(testPieceBlank);
  const [sqrD8, setSqrD8] = useState<string>(testPieceBlank);
  
  const [sqrE1, setSqrE1] = useState<string>(testPieceBlank);
  const [sqrE2, setSqrE2] = useState<string>(testPieceBlank);
  const [sqrE3, setSqrE3] = useState<string>(testPieceBlank);
  const [sqrE4, setSqrE4] = useState<string>(testPieceBlank);
  const [sqrE5, setSqrE5] = useState<string>(testPieceBlank);
  const [sqrE6, setSqrE6] = useState<string>(testPieceBlank);
  const [sqrE7, setSqrE7] = useState<string>(testPieceBlank);
  const [sqrE8, setSqrE8] = useState<string>(testPieceBlank);

  const [sqrF1, setSqrF1] = useState<string>(testPieceBlank);
  const [sqrF2, setSqrF2] = useState<string>(testPieceBlank);
  const [sqrF3, setSqrF3] = useState<string>(testPieceBlank);
  const [sqrF4, setSqrF4] = useState<string>(testPieceBlank);
  const [sqrF5, setSqrF5] = useState<string>(testPieceBlank);
  const [sqrF6, setSqrF6] = useState<string>(testPieceBlank);
  const [sqrF7, setSqrF7] = useState<string>(testPieceBlank);
  const [sqrF8, setSqrF8] = useState<string>(testPieceBlank);

  const [sqrG1, setSqrG1] = useState<string>(testPiece);
  const [sqrG2, setSqrG2] = useState<string>(testPiece);
  const [sqrG3, setSqrG3] = useState<string>(testPiece);
  const [sqrG4, setSqrG4] = useState<string>(testPiece);
  const [sqrG5, setSqrG5] = useState<string>(testPiece);
  const [sqrG6, setSqrG6] = useState<string>(testPiece);
  const [sqrG7, setSqrG7] = useState<string>(testPiece);
  const [sqrG8, setSqrG8] = useState<string>(testPiece);

  const [sqrH1, setSqrH1] = useState<string>(testPiece);
  const [sqrH2, setSqrH2] = useState<string>(testPiece);
  const [sqrH3, setSqrH3] = useState<string>(testPiece);
  const [sqrH4, setSqrH4] = useState<string>(testPiece);
  const [sqrH5, setSqrH5] = useState<string>(testPiece);
  const [sqrH6, setSqrH6] = useState<string>(testPiece);
  const [sqrH7, setSqrH7] = useState<string>(testPiece);
  const [sqrH8, setSqrH8] = useState<string>(testPiece);

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
            <IonCol className="blue-square" onClick={() => {console.log("A1")}}>
              <img className='chess-piece' src={sqrA1}></img>
            </IonCol>
            <IonCol className='white-square' onClick={() => {console.log("A2")}}>
              <img className='chess-piece' src={sqrA2}></img>
            </IonCol>
            <IonCol className="blue-square" onClick={() => {console.log("A3")}}>
              <img className='chess-piece' src={sqrA3}></img>
            </IonCol>
            <IonCol className='white-square' onClick={() => {console.log("A4")}}>
              <img className='chess-piece' src={sqrA4}></img>
            </IonCol>
            <IonCol className="blue-square" onClick={() => {console.log("A5")}}>
              <img className='chess-piece' src={sqrA5}></img>
            </IonCol>
            <IonCol className='white-square' onClick={() => {console.log("A6")}}>
              <img className='chess-piece' src={sqrA6}></img>
            </IonCol>
            <IonCol className="blue-square" onClick={() => {console.log("A7")}}>
              <img className='chess-piece' src={sqrA7}></img>
            </IonCol>
            <IonCol className='white-square' onClick={() => {console.log("A8")}}>
              <img className='chess-piece' src={sqrA8}></img>
            </IonCol>
          </IonRow>
          {
            /*
              Board Row Divider For Convenience
            */
          }
          <IonRow>
            <IonCol className="white-square" onClick={() => {console.log("B1")}}>
              <img className='chess-piece' src={sqrB1}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {console.log("B2")}}>
              <img className='chess-piece' src={sqrB2}></img>
            </IonCol>
            <IonCol className="white-square" onClick={() => {console.log("B3")}}>
              <img className='chess-piece' src={sqrB3}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {console.log("B4")}}>
              <img className='chess-piece' src={sqrB4}></img>
            </IonCol>
            <IonCol className="white-square" onClick={() => {console.log("B5")}}>
              <img className='chess-piece' src={sqrB5}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {console.log("B6")}}>
              <img className='chess-piece' src={sqrB6}></img>
            </IonCol>
            <IonCol className="white-square" onClick={() => {console.log("B7")}}>
              <img className='chess-piece' src={sqrB7}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {console.log("B8")}}>
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
                console.log("C1"); 
                // Temp IF statement to allow piece toggling on square C1
                if (sqrC1 === testPieceBlank) {
                  setSqrC1(testPiece);
                } else {
                  setSqrC1(testPieceBlank);
                }
              }}>
              <img className='chess-piece' src={sqrC1}></img>
            </IonCol>
            <IonCol className='white-square' onClick={() => {console.log("C2")}}>
              <img className='chess-piece' src={sqrC2}></img>
            </IonCol>
            <IonCol className="blue-square" onClick={() => {console.log("C3")}}>
              <img className='chess-piece' src={sqrC3}></img>
            </IonCol>
            <IonCol className='white-square'onClick={() => {console.log("C4")}}>
              <img className='chess-piece' src={sqrC4}></img>
            </IonCol>
            <IonCol className="blue-square"onClick={() => {console.log("C5")}}>
              <img className='chess-piece' src={sqrC5}></img>
            </IonCol>
            <IonCol className='white-square'onClick={() => {console.log("C6")}}>
              <img className='chess-piece' src={sqrC6}></img>
            </IonCol>
            <IonCol className="blue-square"onClick={() => {console.log("C7")}}>
              <img className='chess-piece' src={sqrC7}></img>
            </IonCol>
            <IonCol className='white-square'onClick={() => {console.log("C8")}}>
              <img className='chess-piece' src={sqrC8}></img>
            </IonCol>
          </IonRow>
          {
            /*
              Board Row Divider For Convenience
            */
          }
          <IonRow>
            <IonCol className="white-square" onClick={() => {console.log("D1")}}>
              <img className='chess-piece' src={sqrD1}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {console.log("D2")}}>
              <img className='chess-piece' src={sqrD2}></img>
            </IonCol>
            <IonCol className="white-square" onClick={() => {console.log("D3")}}>
              <img className='chess-piece' src={sqrD3}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {console.log("D4")}}>
              <img className='chess-piece' src={sqrD4}></img>
            </IonCol>
            <IonCol className="white-square" onClick={() => {console.log("D5")}}>
              <img className='chess-piece' src={sqrD5}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {console.log("D6")}}>
              <img className='chess-piece' src={sqrD6}></img>
            </IonCol>
            <IonCol className="white-square" onClick={() => {console.log("D7")}}>
              <img className='chess-piece' src={sqrD7}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {console.log("D8")}}>
              <img className='chess-piece' src={sqrD8}></img>
            </IonCol>
          </IonRow>
          {
            /*
              Board Row Divider For Convenience
            */
          }
          <IonRow>
            <IonCol className="blue-square"onClick={() => {console.log("E1")}}>
              <img className='chess-piece' src={sqrE1}></img>
            </IonCol>
            <IonCol className='white-square'onClick={() => {console.log("E2")}}>
              <img className='chess-piece' src={sqrE2}></img>
            </IonCol>
            <IonCol className="blue-square"onClick={() => {console.log("E3")}}>
              <img className='chess-piece' src={sqrE3}></img>
            </IonCol>
            <IonCol className='white-square'onClick={() => {console.log("E4")}}>
              <img className='chess-piece' src={sqrE4}></img>
            </IonCol>
            <IonCol className="blue-square"onClick={() => {console.log("E5")}}>
              <img className='chess-piece' src={sqrE5}></img>
            </IonCol>
            <IonCol className='white-square'onClick={() => {console.log("E6")}}>
              <img className='chess-piece' src={sqrE6}></img>
            </IonCol>
            <IonCol className="blue-square"onClick={() => {console.log("E7")}}>
              <img className='chess-piece' src={sqrE7}></img>
            </IonCol>
            <IonCol className='white-square'onClick={() => {console.log("E8")}}>
              <img className='chess-piece' src={sqrE8}></img>
            </IonCol>
          </IonRow>
          {
            /*
              Board Row Divider For Convenience
            */
          }
          <IonRow>
            <IonCol className="white-square" onClick={() => {console.log("F1")}}>
              <img className='chess-piece' src={sqrF1}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {console.log("F2")}}>
              <img className='chess-piece' src={sqrF2}></img>
            </IonCol>
            <IonCol className="white-square" onClick={() => {console.log("F3")}}>
              <img className='chess-piece' src={sqrF3}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {console.log("F4")}}>
              <img className='chess-piece' src={sqrF4}></img>
            </IonCol>
            <IonCol className="white-square" onClick={() => {console.log("F5")}}>
              <img className='chess-piece' src={sqrF5}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {console.log("F6")}}>
              <img className='chess-piece' src={sqrF6}></img>
            </IonCol>
            <IonCol className="white-square" onClick={() => {console.log("F7")}}>
              <img className='chess-piece' src={sqrF7}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {console.log("F8")}}>
              <img className='chess-piece' src={sqrF8}></img>
            </IonCol>
          </IonRow>
          {
            /*
              Board Row Divider For Convenience
            */
          }
          <IonRow>
            <IonCol className="blue-square"onClick={() => {console.log("G1")}}>
              <img className='chess-piece' src={sqrG1}></img>
            </IonCol>
            <IonCol className='white-square'onClick={() => {console.log("G2")}}>
              <img className='chess-piece' src={sqrG2}></img>
            </IonCol>
            <IonCol className="blue-square"onClick={() => {console.log("G3")}}>
              <img className='chess-piece' src={sqrG3}></img>
            </IonCol>
            <IonCol className='white-square'onClick={() => {console.log("G4")}}>
              <img className='chess-piece' src={sqrG4}></img>
            </IonCol>
            <IonCol className="blue-square"onClick={() => {console.log("G5")}}>
              <img className='chess-piece' src={sqrG5}></img>
            </IonCol>
            <IonCol className='white-square'onClick={() => {console.log("G6")}}>
              <img className='chess-piece' src={sqrG6}></img>
            </IonCol>
            <IonCol className="blue-square"onClick={() => {console.log("G7")}}>
              <img className='chess-piece' src={sqrG7}></img>
            </IonCol>
            <IonCol className='white-square'onClick={() => {console.log("G8")}}>
              <img className='chess-piece' src={sqrG8}></img>
            </IonCol>
          </IonRow>
          {
            /*
              Board Row Divider For Convenience
            */
          }
          <IonRow>
            <IonCol className="white-square" onClick={() => {console.log("H1")}}>
              <img className='chess-piece' src={sqrH1}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {console.log("H2")}}>
              <img className='chess-piece' src={sqrH2}></img>
            </IonCol>
            <IonCol className="white-square" onClick={() => {console.log("H3")}}>
              <img className='chess-piece' src={sqrH3}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {console.log("H4")}}>
              <img className='chess-piece' src={sqrH4}></img>
            </IonCol>
            <IonCol className="white-square" onClick={() => {console.log("H5")}}>
              <img className='chess-piece' src={sqrH5}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {console.log("H6")}}>
              <img className='chess-piece' src={sqrH6}></img>
            </IonCol>
            <IonCol className="white-square" onClick={() => {console.log("H7")}}>
              <img className='chess-piece' src={sqrH7}></img>
            </IonCol>
            <IonCol className='blue-square' onClick={() => {console.log("H8")}}>
              <img className='chess-piece' src={sqrH8}></img>
            </IonCol>
          </IonRow>
        </IonCard>

      </IonContent>
    </IonPage>
  );
}

export default ChessBoardMockup;