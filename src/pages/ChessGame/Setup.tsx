// Importing required library's
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
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
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import { arrowBack, book, gameController, person, radio } from 'ionicons/icons';
import { useParams } from 'react-router';
import { useState } from 'react';
import './Setup.css';

// Importing required paramaters
import { GlobalParams } from '../../interfaces/GlobalParams';
import { ChessGameSetupParams } from '../../interfaces/ChessGameParams';

// Importing page components
import GameSettings from '../../components/setup/GameSetup';

// Importing page functions
import { readyToStart } from '../../functions/setup/ReadyToStart';

const GameSetup: React.FC = () => {

  // Setup navigation system on this page so we can call other pages
  // Powered by nav system in App.tsx
  const nav = useIonRouter();

  // Fetching imported paramaters
  const params = useParams<GlobalParams>();
  const game = useParams<ChessGameSetupParams>();

  // Check the selected game mode and set the default state of some React variables accordingly
  var defaultHiddenSettings: boolean;
  var defaultPlayerTwo: string;
  var defaultPlayerTwoIcon: any;
  var defaultBoardColor: string;

  if (game.mode === "PVP") {
    defaultHiddenSettings = true;
    defaultPlayerTwo = "";
    defaultPlayerTwoIcon = person;
    defaultBoardColor = "Blue";
  } else {
    defaultHiddenSettings = false;
    defaultPlayerTwo = "Computer";
    defaultPlayerTwoIcon = radio;
    defaultBoardColor = "Green";
  }

  // Declaring React variables for game settings
  const [hiddenSettings, setHiddenSettings] = useState<boolean>(defaultHiddenSettings);
  const [playerTwo, setPlayerTwo] = useState<string>(defaultPlayerTwo);
  const [playerTwoIcon] = useState<any>(defaultPlayerTwoIcon);
  const [playerTwoColor, setPlayerTwoColor] = useState<string>("");
  const [boardColor, setBoardColor] = useState<string>(defaultBoardColor);
  const [whitePlayer, setWhitePlayer] = useState<string>("");
  const [blackPlayer, setBlackPlayer] = useState<string>("");

  // React variable to control when your allowed to start the game
  const [disableStart, setDisableStart] = useState<boolean>(true);

  // IF statement to render page GUI differently depending on what game mode is selected
  if (game.mode === "PVP") {
    // JSX code for generating the chess game setup GUI for PVP mode
    return (
      <IonPage id="setup-page">
        {
          /*
            Page Header Code
            Contains a page title
          */
        }
        <IonHeader>
          <IonToolbar>
            <IonTitle className="setup-header">
              Game Setup
            </IonTitle>
            <IonButton slot="end" fill="clear" color="warning" onClick={() => {
              nav.push(`/mainMenu/${params.username}`);
            }}>
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large" className="setup-header">
                Game Setup
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
    // JSX code for generating the chess game setup GUI for PVE mode
    return (
      <IonPage id="setup-page">
        {
          /*
            Page Header Code
            Contains a page title
          */
        }
        <IonHeader>
          <IonToolbar>
            <IonTitle className="setup-header">
              Game Setup
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large" className="setup-header">
                Game Setup
              </IonTitle>
            </IonToolbar>
          </IonHeader>

          {
            /*
              Page Content Code
            */
          }

          <GameSettings
            hidden={hiddenSettings}
            mode={game.mode}
            playerOne={params.username}
            playerTwo={playerTwo}
            playerTwoIcon={playerTwoIcon}
            setPlayerTwoColor={setPlayerTwoColor}
            boardColor={boardColor}
            setWhitePlayer={setWhitePlayer}
            setBlackPlayer={setBlackPlayer}
            whitePlayer={whitePlayer}
            blackPlayer={blackPlayer}
            readyToStart={readyToStart}
            setDisableStart={setDisableStart}
          />

          <IonCard disabled={disableStart} className="setup-button-card-blue">
            <IonItem button detail={false} lines="none" onClick={() => {
              nav.push(`/game/${params.username}/${game.mode}/${playerTwo}/${playerTwoColor}`);
            }}>
              <IonCardTitle slot="end" color="primary" className="setup-card-header">
                Start Game
              </IonCardTitle>
              <IonIcon slot="end" color="primary" src={gameController}/>
            </IonItem>
          </IonCard>

          <IonCard className="setup-button-card-yellow">
            <IonItem button detail={false} lines="none" onClick={() => {
              nav.push(`/mainMenu/${params.username}`);
            }}>
              <IonCardTitle slot="end" color="warning" className="setup-card-header">
                Cancel
              </IonCardTitle>
              <IonIcon slot="end" color="warning" src={arrowBack}/>
            </IonItem>
          </IonCard>

        </IonContent>
      </IonPage>
    );
  } else {
    // JSX code for generating the chess game setup GUI for no selected mode
    return (
      <IonPage id="setup-page">
        {
          /*
            Page Header Code
            Contains a page title
          */
        }
        <IonHeader>
          <IonToolbar>
            <IonTitle className="setup-header">
              Something Went Wrong
            </IonTitle>
            <IonButton slot="end" fill="clear" color="warning" onClick={() => {
              nav.push(`/mainMenu/${params.username}`);
            }}>
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large" className="setup-header">
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

export default GameSetup;
