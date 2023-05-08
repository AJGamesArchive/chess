// Importing required library's
import { useState } from 'react';
import { useParams } from 'react-router';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToast,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import { home, star, medal, skull, colorFill, ribbon, save, gameController, warning } from 'ionicons/icons';
import './Ending.css';

// Importing Paramaters
import { GlobalParams } from '../../interfaces/GlobalParams';
import { ChessGameParams, ChessGameEndingParams } from '../../interfaces/ChessGameParams';

// Importing Components
import GameResults from '../../components/ending/Results';
import ActionButtons from '../../components/setup/ActionButtons';

// Importing Functions
import { saveGame } from '../../functions/ending/SaveGame';

// Importing Types
import { DataSava } from '../../types/ending/DataSava';

// TODO Alex, double check that the number of white pieces taken and black pieces taken is being saved correctly as they might be backwards?

const GameEnding: React.FC = () => {
  // Setup navigation system on this page so we can call other pages
  // Powered by nav system in App.tsx
  const nav = useIonRouter();

  // Reading the parsed params into variables
  const params = useParams<GlobalParams>();
  const game = useParams<ChessGameParams>();
  const results = useParams<ChessGameEndingParams>();

  // Declaring react variables to toggle the visibility of the action buttons on the page
  const [hideContinueBtn, setHideContinueBtn] = useState<boolean>(false);
  const [hideRematchBtn, setHideRematchBtn] = useState<boolean>(true);
  const [hideMainMenuBtn, setHideMainMenuBtn] = useState<boolean>(true);

  // Declaring react variables to control pop-up alerts
  const [showConfirmMsg, setShowConfirmMsg] = useState<boolean>(false);
  const [confirmMsg, setConfirmMsg] = useState<string>("");
  const [showErrorMsg, setShowErrorMsg] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  // Async function to save the scores from the game to the database
  async function actionButtonClick(buttonName: string) {
    if (buttonName === "Continue") {
      let saved: DataSava;
      if (results.isDraw === "y") {
        saved = await saveGame(results.winnerName, results.winnerColor, results.loserName, results.loserColor, parseInt(results.numWhiteTaken), parseInt(results.numBlackTaken), "Draw", game.mode);
      } else {
        saved = await saveGame(results.winnerName, results.winnerColor, results.loserName, results.loserColor, parseInt(results.numWhiteTaken), parseInt(results.numBlackTaken), results.winnerName, game.mode);
      };
      if (!saved.saved) {
        setErrorMsg(saved.message);
        setShowErrorMsg(true);
        setHideRematchBtn(false);
        setHideMainMenuBtn(false);
        return;
      };
      setConfirmMsg("The game data was saved successfully!");
      setShowConfirmMsg(true);
      setHideContinueBtn(true);
      setHideRematchBtn(false);
      setHideMainMenuBtn(false);
      return;
    };
    if (buttonName === "Rematch") {
      window.location.href = (`/game/${params.username}/${game.mode}/${game.opponent}/${game.opponentColor}`);
      return;
    };
    nav.push(`/mainMenu/${params.username}`);
    return;
  };

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

          <ActionButtons
            canDisable={false}
            disabled={false}
            canHide={true}
            hidden={hideContinueBtn}
            buttonName={"Continue"}
            buttonText={"Save & Continue"}
            buttonIcon={save}
            buttonColor={`green`}
            buttonTextColor={`success`}
            onButtonClick={actionButtonClick}
          />

          <ActionButtons
            canDisable={false}
            disabled={false}
            canHide={true}
            hidden={hideRematchBtn}
            buttonName={"Rematch"}
            buttonText={"Rematch"}
            buttonIcon={gameController}
            buttonColor={`blue`}
            buttonTextColor={`primary`}
            onButtonClick={actionButtonClick}
          />

          <ActionButtons
            canDisable={false}
            disabled={false}
            canHide={true}
            hidden={hideMainMenuBtn}
            buttonName={"Menu"}
            buttonText={"Main Menu"}
            buttonIcon={home}
            buttonColor={`yellow`}
            buttonTextColor={`warning`}
            onButtonClick={actionButtonClick}
          />

          <IonToast
            isOpen={showConfirmMsg}
            onDidPresent={() => {}}
            onDidDismiss={() => setShowConfirmMsg(false)}
            message={confirmMsg}
            icon={star}
            color="success"
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
            isOpen={showErrorMsg}
            onDidPresent={() => {}}
            onDidDismiss={() => setShowErrorMsg(false)}
            message={errorMsg}
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

          <ActionButtons
            canDisable={false}
            disabled={false}
            canHide={true}
            hidden={hideContinueBtn}
            buttonName={"Continue"}
            buttonText={"Save & Continue"}
            buttonIcon={save}
            buttonColor={`green`}
            buttonTextColor={`success`}
            onButtonClick={actionButtonClick}
          />

          <ActionButtons
            canDisable={false}
            disabled={false}
            canHide={true}
            hidden={hideRematchBtn}
            buttonName={"Rematch"}
            buttonText={"Rematch"}
            buttonIcon={gameController}
            buttonColor={`blue`}
            buttonTextColor={`primary`}
            onButtonClick={actionButtonClick}
          />

          <ActionButtons
            canDisable={false}
            disabled={false}
            canHide={true}
            hidden={hideMainMenuBtn}
            buttonName={"Menu"}
            buttonText={"Main Menu"}
            buttonIcon={home}
            buttonColor={`yellow`}
            buttonTextColor={`warning`}
            onButtonClick={actionButtonClick}
          />

          <IonToast
            isOpen={showConfirmMsg}
            onDidPresent={() => {}}
            onDidDismiss={() => setShowConfirmMsg(false)}
            message={confirmMsg}
            icon={star}
            color="success"
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
            isOpen={showErrorMsg}
            onDidPresent={() => {}}
            onDidDismiss={() => setShowErrorMsg(false)}
            message={errorMsg}
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
  };
};

export default GameEnding;
