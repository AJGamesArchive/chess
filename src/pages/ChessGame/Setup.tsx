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
  IonInput,
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
import { arrowBack, gameController, person, radio, addCircle, search, warning } from 'ionicons/icons';
import { useParams } from 'react-router';
import { useState } from 'react';
import './Setup.css';

// Importing required paramaters
import { GlobalParams } from '../../interfaces/GlobalParams';
import { ChessGameSetupParams } from '../../interfaces/ChessGameParams';

// Importing page components
import GameSettings from '../../components/setup/GameSetup';
import ChooseOpponent from '../../components/setup/ChooseOpponent';
import EnterOpp from '../../components/setup/EnterOpp';
import ActionButtons from '../../components/setup/ActionButtons';

// Importing page functions
import { readyToStart } from '../../functions/setup/ReadyToStart';
import { ValidOpponent } from '../../functions/setup/ValidOpponent';

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

  // React variables to control the visibility of PVP mode opponent finding cards
  const [hiddenOpSelect, setHiddenOpSelect] = useState<boolean>(false);
  const [hiddenHasAccount, setHiddenHasAccount] = useState<boolean>(true);
  const [hiddenNoAccount, setHiddenNoAccount] = useState<boolean>(true);

  // Variables to control the color of text input boxes
  var playerTwoInputColor: string
  if (playerTwo === "") {
    playerTwoInputColor = "medium";
  } else {
    playerTwoInputColor = "success";
  }

  // React variables to display errors to the user if they enter an invalid username when setting up an opponent in PVP mode
  const [errorGuestName, setErrorGuestName] = useState<boolean>(false);
  const [errorInvalidUsername, setErrorInvalidUsername] = useState<boolean>(false);

  // Function to handle setting up the players opponent
  function setupOpponent(hasAccount: boolean) {
    if (hasAccount) {
      if (!ValidOpponent(playerTwo)) {setErrorInvalidUsername(true);return;}
    } else {
      if (playerTwo === "") {setErrorGuestName(true);return;}
    }
    setHiddenNoAccount(true);
    setHiddenSettings(false);
    return;
  }

  // Function that handles what happens when an action button is clicked
  function actionButtonClick(buttonName: string) {
    if (buttonName === "Start") {
      nav.push(`/game/${params.username}/${game.mode}/${playerTwo}/${playerTwoColor}`);
      return;
    }
    if (buttonName === "Cancel") {
      nav.push(`/mainMenu/${params.username}`);
      return;
    }
    return;
  }

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

          <ChooseOpponent
            hidden={hiddenOpSelect}
            setHidden={setHiddenOpSelect}
            setHiddenHasAccount={setHiddenHasAccount}
            setHiddenNoAccount={setHiddenNoAccount}
            onBackButtonClick={actionButtonClick}
          />
          
          <EnterOpp
            hidden={hiddenHasAccount}
            setHidden={setHiddenHasAccount}
            setHiddenOpSelect={setHiddenOpSelect}
            cardTitle={"Search for opponent:"}
            playerName={playerTwo}
            setPlayerName={setPlayerTwo}
            inputPlaceHolder={"Enter your Opponents Username"}
            inputColor={playerTwoInputColor}
            buttonText={"Search"}
            icon={search}
            hasAccount={true}
            onNameEnter={setupOpponent}
          />

          <EnterOpp
            hidden={hiddenNoAccount}
            setHidden={setHiddenNoAccount}
            setHiddenOpSelect={setHiddenOpSelect}
            cardTitle={"Enter opponents name:"}
            playerName={playerTwo}
            setPlayerName={setPlayerTwo}
            inputPlaceHolder={"Enter a Guest Username"}
            inputColor={playerTwoInputColor}
            buttonText={"Confirm"}
            icon={addCircle}
            hasAccount={false}
            onNameEnter={setupOpponent}
          />

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

          <ActionButtons
            canDisable={true}
            disabled={disableStart}
            canHide={true}
            hidden={hiddenSettings}
            buttonName="Start"
            buttonText="Start Game"
            buttonIcon={gameController}
            buttonColor="blue"
            buttonTextColor='primary'
            onButtonClick={actionButtonClick}
          />

          <ActionButtons
            canDisable={false}
            disabled={disableStart}
            canHide={true}
            hidden={hiddenSettings}
            buttonName="Cancel"
            buttonText="Cancel"
            buttonIcon={arrowBack}
            buttonColor="yellow"
            buttonTextColor='warning'
            onButtonClick={actionButtonClick}
          />

          <IonToast
            isOpen={errorGuestName}
            onDidPresent={() => {}}
            onDidDismiss={() => setErrorGuestName(false)}
            message="You have not entered a username for your opponent. Please ensure you enter a username."
            icon={warning}
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

          <IonToast
            isOpen={errorInvalidUsername}
            onDidPresent={() => setPlayerTwo("")}
            onDidDismiss={() => setErrorInvalidUsername(false)}
            message="The user you searched for could not be found. Please enter a different username."
            icon={warning}
            color="danger"
            position="middle"
            buttons={[
              {
                text: "Ok",
                role: "cancel",
                handler: () => {}
              }
            ]}
          />

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

          <ActionButtons
            canDisable={true}
            disabled={disableStart}
            canHide={false}
            hidden={hiddenSettings}
            buttonName="Start"
            buttonText="Start Game"
            buttonIcon={gameController}
            buttonColor="blue"
            buttonTextColor='primary'
            onButtonClick={actionButtonClick}
          />

          <ActionButtons
            canDisable={false}
            disabled={disableStart}
            canHide={false}
            hidden={hiddenSettings}
            buttonName="Cancel"
            buttonText="Cancel"
            buttonIcon={arrowBack}
            buttonColor="yellow"
            buttonTextColor='warning'
            onButtonClick={actionButtonClick}
          />

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
