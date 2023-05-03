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
import { home, star, medal, skull, colorFill, ribbon, save, gameController } from 'ionicons/icons';
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

  // Async function to save the scores from the game to the database
  async function actionButtonClick(buttonName: string) {
    if (buttonName === "Continue") {
      let saved: DataSava = await saveGame();
      if (!saved.saved) {
        //TODO Display error and further instructions to user - needs Toast
        setHideRematchBtn(false);
        setHideMainMenuBtn(false);
        return;
      };
      //TODO Display confirmation to the user that the game was saved successfully - needs Toast
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

  // Function that controls what page to send the user to based on the action button clicked
  function test(buttonName: string) {
    if (buttonName === "") {}
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

          <ActionButtons
            canDisable={false}
            disabled={false}
            canHide={true}
            hidden={hideContinueBtn}
            buttonName={"Continue"}
            buttonText={"Continue"}
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

          <ActionButtons
            canDisable={false}
            disabled={false}
            canHide={true}
            hidden={hideContinueBtn}
            buttonName={"Continue"}
            buttonText={"Continue"}
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

        </IonContent>
      </IonPage>
    );
  };
};

export default GameEnding;
