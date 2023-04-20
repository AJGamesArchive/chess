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
import { logOut } from 'ionicons/icons';
import './Game.css';

// Importing required paramaters
import { GlobalParams } from '../../interfaces/GlobalParams';
import { ChessGameParams } from '../../interfaces/ChessGameParams';
import { useParams } from 'react-router';

// Importing page components


// Importing page functions


const ChessGame: React.FC = () => {

  // Setup navigation system on this page so we can call other pages
  // Powered by nav system in App.tsx
  const nav = useIonRouter();

  // Fetching imported paramaters
  const params = useParams<GlobalParams>();
  const game = useParams<ChessGameParams>();

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

        </IonContent>
      </IonPage>
    );
  } else {
    // JSX code for generating the chess game GUI for no selected mode
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
            <IonButton slot="end" fill="clear" color="danger" href="/Home">
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
