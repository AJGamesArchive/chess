// Importing required library's
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToast,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import { arrowBack, gameController, person, radio, addCircle, search, warning, logIn } from 'ionicons/icons';
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
import { Login } from '../../functions/login/Login';

// Importing page types
import { CredentialValidation } from '../../types/login/AccountVerification';

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
  const [playerTwoPassword, setPlayerTwoPassword] = useState<string>("");
  const [playerTwoIcon] = useState<any>(defaultPlayerTwoIcon);
  const [playerTwoColor, setPlayerTwoColor] = useState<string>("");
  const [boardColor] = useState<string>(defaultBoardColor);
  const [whitePlayer, setWhitePlayer] = useState<string>("");
  const [blackPlayer, setBlackPlayer] = useState<string>("");

  // React variable to control when your allowed to start the game
  const [disableStart, setDisableStart] = useState<boolean>(true);

  // React variable to control the color of the 'search account' button to give more user feedback
  const [searchBtnClr, setSearchBtnClr] = useState<string>("primary");

  // React variables to control the visibility of PVP mode opponent finding cards
  const [hiddenOpSelect, setHiddenOpSelect] = useState<boolean>(false);
  const [hiddenHasAccount, setHiddenHasAccount] = useState<boolean>(true);
  const [hiddenOppPassword, setHiddenOppPassword] = useState<boolean>(true);
  const [hiddenNoAccount, setHiddenNoAccount] = useState<boolean>(true);

  // Variables to control the color of text input boxes
  var playerTwoInputColor: string
  if (playerTwo === "") {
    playerTwoInputColor = "medium";
  } else {
    playerTwoInputColor = "success";
  };
  var playerTwoPasswordInputColor: string;
  if (playerTwoPassword === "") {
    playerTwoPasswordInputColor = "medium";
  } else {
    playerTwoPasswordInputColor = "success"
  };

  // React variables to display errors to the user if they enter an invalid username when setting up an opponent in PVP mode
  const [errorGuestName, setErrorGuestName] = useState<boolean>(false);
  const [errorInvalidUsername, setErrorInvalidUsername] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Function to handle setting up the players opponent
  async function setupOpponent(hasAccount: boolean) {
    // Change the color of the action button while system is loading
    setSearchBtnClr("medium");
    // Guard statement to ensure the has entered an opponents name
    if (playerTwo === "") {
      setErrorMessage("You have not entered a username for your opponent. Please ensure you enter a username."); 
      setErrorGuestName(true);
      setPlayerTwo("");
      return setSearchBtnClr("primary");
    };
    // Guard statement to ensure that the opponents name is not the same as the players name
    if (playerTwo.toUpperCase() === params.username.toUpperCase()) {
      setErrorMessage("You're opponents name cannot be the same as your name. Please enter a different name."); 
      setErrorInvalidUsername(true);
      setPlayerTwo("");
      return setSearchBtnClr("primary");
    };
    // Guard statement to ensure that if the opponent has an account, the account is real and accessible
    if (hasAccount) {
      const locatedUser: CredentialValidation = await ValidOpponent(playerTwo);
      setErrorMessage(locatedUser.message);
      if (!locatedUser.valid) {setErrorInvalidUsername(true); setPlayerTwo(""); return setSearchBtnClr("primary");}
    };
    // Moving setup forward to the next section
    setHiddenNoAccount(true);
    setHiddenHasAccount(true);
    if (hasAccount) {
      setHiddenOppPassword(false);
    } else {
      setHiddenSettings(false);
    };
    return setSearchBtnClr("primary");
  };

  // Async function to validate the opponents account login
  async function validPassword() {
    // Change the color of the action button while system is loading
    setSearchBtnClr("medium");
    // Guard statement to ensure the has entered an opponents name
    if (playerTwoPassword === "") {
      setErrorMessage("You have not entered a password. Please ensure you enter a password."); 
      setErrorGuestName(true);
      return setSearchBtnClr("primary");
    };
    // Using the Login function to validate the opponents account login
    const validLogin: CredentialValidation = await Login(playerTwo, playerTwoPassword);
    setErrorMessage(validLogin.message);
    if (!validLogin.valid) {setErrorInvalidUsername(true); setPlayerTwoPassword(""); return setSearchBtnClr("primary");}
    // Moving setup forward to the next section
    setHiddenOppPassword(true);
    setHiddenSettings(false);
    return setSearchBtnClr("primary");
  };

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
            buttonColor={searchBtnClr}
            icon={search}
            hasAccount={true}
            onNameEnter={setupOpponent}
          />

          <EnterOpp
            hidden={hiddenOppPassword}
            setHidden={setHiddenOppPassword}
            setHiddenOpSelect={setHiddenOpSelect}
            cardTitle={`Enter Password:`}
            playerName={playerTwoPassword}
            setPlayerName={setPlayerTwoPassword}
            inputPlaceHolder={`Enter ${playerTwo}'s Account Password`}
            inputColor={playerTwoPasswordInputColor}
            buttonText={"Confirm"}
            buttonColor={searchBtnClr}
            icon={logIn}
            hasAccount={true}
            onNameEnter={validPassword}
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
            buttonColor={searchBtnClr}
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
            message={errorMessage}
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
            onDidPresent={() => {}}
            onDidDismiss={() => setErrorInvalidUsername(false)}
            message={errorMessage}
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
