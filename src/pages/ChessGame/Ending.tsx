// Importing required library's
import { useState } from 'react';
import { useParams } from 'react-router';
import {
  IonCard,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
  IonTitle,
  IonToast,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import { logIn, addCircle, warning, checkmarkDone } from 'ionicons/icons';
import './Ending.css';

// Importing Paramaters
import { GlobalParams } from '../../interfaces/GlobalParams';
import { ChessGameParams, ChessGameEndingParams } from '../../interfaces/ChessGameParams';

const GameEnding: React.FC = () => {

  // Setup navigation system on this page so we can call other pages
  // Powered by nav system in App.tsx
  const nav = useIonRouter();

  // Reading the parsed params into variables
  const params = useParams<GlobalParams>();
  const game = useParams<ChessGameParams>();
  const results = useParams<ChessGameEndingParams>();

  // JSX code for generating the login page GUI
  return (
    <IonPage id="ending-page">
      {
        /*
          Page Header Code
          Contains a page title and DEV button to the ChessBoard mockup page
        */
      }
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ending-header">
            Game Results
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className="ending-header">
              Game Results
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
};

export default GameEnding;
