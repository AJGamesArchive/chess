// Importing required library's
import { useState } from 'react';
import { useParams } from 'react-router';
import {
  IonButton,
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
import { home, star, medal, skull, colorFill, ribbon } from 'ionicons/icons';
import './Ending.css';

// Importing Paramaters
import { GlobalParams } from '../../interfaces/GlobalParams';
import { ChessGameParams, ChessGameEndingParams } from '../../interfaces/ChessGameParams';

// Importing Components
import GameResults from '../../components/ending/Results';

const GameEnding: React.FC = () => {

  // Setup navigation system on this page so we can call other pages
  // Powered by nav system in App.tsx
  const nav = useIonRouter();

  // Reading the parsed params into variables
  const params = useParams<GlobalParams>();
  const game = useParams<ChessGameParams>();
  const results = useParams<ChessGameEndingParams>();

  if (results.isDraw === "y") {
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
            <IonButton slot="end" fill="clear" color="warning" href={`/mainMenu/${params.username}`}>
              <IonIcon icon={home}></IonIcon>
            </IonButton>
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

          <GameResults
            header={`Results: Draw`}
            plyOneIcon={ribbon}
            plyOneIconFull={colorFill}
            plyOneTitle={`Player One:`}
            plyOneName={results.winnerName}
            plyOneColor={results.winnerColor}
            plyTwoIcon={ribbon}
            plyTwoIconFull={colorFill}
            plyTwoTitle={`Player 2:`}
            plyTwoName={results.loserName}
            plyTwoColor={results.loserColor}
            whiteIcon={star}
            whitePiecesTaken={results.numWhiteTaken}
            blackIcon={star}
            blackPiecesTaken={results.numBlackTaken}
          />

        </IonContent>
      </IonPage>
    );
  } else {
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
            <IonButton slot="end" fill="clear" color="warning" href={`/mainMenu/${params.username}`}>
              <IonIcon icon={home}></IonIcon>
            </IonButton>
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

          <GameResults
            header={`Results:`}
            plyOneIcon={medal}
            plyOneIconFull={colorFill}
            plyOneTitle={`Winner:`}
            plyOneName={results.winnerName}
            plyOneColor={results.winnerColor}
            plyTwoIcon={skull}
            plyTwoIconFull={colorFill}
            plyTwoTitle={`Loser:`}
            plyTwoName={results.loserName}
            plyTwoColor={results.loserColor}
            whiteIcon={star}
            whitePiecesTaken={results.numWhiteTaken}
            blackIcon={star}
            blackPiecesTaken={results.numBlackTaken}
          />

        </IonContent>
      </IonPage>
    );
  };
};

export default GameEnding;