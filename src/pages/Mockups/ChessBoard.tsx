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
  // There would be one variable for each board square
  // Then we just resign a file path to the variables to move pieces around
  var testPiece: string = "/assets/images/ChessPieces/test.png";
  var testPieceBlank: string = "/assets/images/ChessPieces/blankSquare.png";

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
            <IonCol className="blue-square" onClick={() => {console.log("Test Click 1")}}>
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className='white-square' onClick={() => {console.log("Test Click 2")}}>
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className="blue-square">
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className="blue-square">
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className="blue-square">
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
          </IonRow>
          {
            /*
              Board Row Divider For Convenience
            */
          }
          <IonRow>
            <IonCol className="white-square">
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className="white-square">
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className="white-square">
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className="white-square">
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
          </IonRow>
          {
            /*
              Board Row Divider For Convenience
            */
          }
          <IonRow>
            <IonCol className="blue-square">
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className="blue-square">
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className="blue-square">
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className="blue-square">
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
          </IonRow>
          {
            /*
              Board Row Divider For Convenience
            */
          }
          <IonRow>
            <IonCol className="white-square">
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className="white-square">
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className="white-square">
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className="white-square">
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
          </IonRow>
          {
            /*
              Board Row Divider For Convenience
            */
          }
          <IonRow>
            <IonCol className="blue-square">
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className="blue-square">
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className="blue-square">
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className="blue-square">
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
          </IonRow>
          {
            /*
              Board Row Divider For Convenience
            */
          }
          <IonRow>
            <IonCol className="white-square">
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className="white-square">
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className="white-square">
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className="white-square">
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src={testPieceBlank}></img>
            </IonCol>
          </IonRow>
          {
            /*
              Board Row Divider For Convenience
            */
          }
          <IonRow>
            <IonCol className="blue-square">
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className="blue-square">
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className="blue-square">
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className="blue-square">
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
          </IonRow>
          {
            /*
              Board Row Divider For Convenience
            */
          }
          <IonRow>
            <IonCol className="white-square">
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className="white-square">
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className="white-square">
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className="white-square">
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src={testPiece}></img>
            </IonCol>
          </IonRow>
        </IonCard>

      </IonContent>
    </IonPage>
  );
}

export default ChessBoardMockup;