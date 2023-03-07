import { useState } from 'react';
import {
  IonAvatar,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
  IonThumbnail,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import './ChessBoard.css';

const ChessBoardMockup: React.FC = () => {

  const nav = useIonRouter();

  return (
    <IonPage id="chess-board-mockup-page">
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

        <IonCard>
          <IonRow>
            <IonCol className="blue-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className="blue-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className="blue-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className="blue-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
          </IonRow>



          <IonRow>
            <IonCol className="white-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className="white-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className="white-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className="white-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
          </IonRow>



          <IonRow>
            <IonCol className="blue-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className="blue-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className="blue-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className="blue-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
          </IonRow>



          <IonRow>
            <IonCol className="white-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className="white-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className="white-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className="white-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
          </IonRow>



          <IonRow>
            <IonCol className="blue-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className="blue-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className="blue-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className="blue-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
          </IonRow>



          <IonRow>
            <IonCol className="white-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className="white-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className="white-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className="white-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
          </IonRow>



          <IonRow>
            <IonCol className="blue-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className="blue-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className="blue-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className="blue-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='white-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
          </IonRow>



          <IonRow>
            <IonCol className="white-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className="white-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className="white-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className="white-square">
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
            <IonCol className='blue-square'>
              <img className='chess-piece' src="/assets/images/ChessPieces/test.png"></img>
            </IonCol>
          </IonRow>
        </IonCard>

      </IonContent>
    </IonPage>
  );
}

export default ChessBoardMockup;