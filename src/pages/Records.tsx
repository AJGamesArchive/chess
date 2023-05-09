// Importing required library's
import {
  IonButton,
  IonCard,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToast,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import { home, arrowBack, warning } from 'ionicons/icons';
import './Records.css';
import { useParams } from 'react-router';
import { useState } from 'react';

// Importing the global paramaters needed for the app to function
import { GlobalParams } from '../interfaces/GlobalParams';

// Importing the needed components for the pages GUI
import AccountVerifyCard from '../components/records/AccountVerifyCard';
import GameRecord from '../components/records/GameRecord';

// Importing the required function for this page
import { Login } from '../functions/login/Login';
import { retrieveRecords } from '../functions/records/RetrieveData';

// Importing the required types for this page
import { CredentialValidation } from '../types/login/AccountVerification';

const Records: React.FC = () => {

  // Setup navigation system on this page so we can call other pages
  // Powered by nav system in App.tsx
  const nav = useIonRouter();

  // Setting up the global paramaters needed for the app to function
  const params = useParams<GlobalParams>();

  // React variables to store the password that the user enters
  const [password, setPassword] = useState<string>("");

  // React variable to control the color of the password verification button
  const [verifyBtnClr, setVerifyBtnClr] = useState<string>("primary");

  // Variable to change the color of confirm password user input text
  var passwordTextColor: string;

  // Check whether the user has entered anything input the password input box and set the text color accordingly
  if (password === "") {
    passwordTextColor = "medium";
  } else {
    passwordTextColor = "success";
  }

  // Variables to control disabling and enabling the action button on the password verification system
  var disableVerifyButton: boolean;

  // If statements to listen for React state changes and update the password verification button state
  if (password === "") {
    disableVerifyButton = true;
  } else {
    disableVerifyButton = false;
  };

  //! TRINITY
  var title: string = "Title";

  // React variables to control the visibility of the certain UI components
  const [hiddenPassVerifier, setHiddenPassVerifier] = useState<boolean>(false);
  const [hiddenRecords, setHiddenRecords] = useState<boolean>(true);

  // React variables to control the pop-up messages
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  var [gameHistory, setGameHistory] = useState<any[]>([]);
  // const gameHistory: any[] | string = await retrieveRecords(params.username)

  // Function to verify that the entered password is valid
  async function passwordVerifier(password: string) {
    // Change the color of the action button while system is loading
    setVerifyBtnClr("medium");
    // Handle password verification
    let confirmation: CredentialValidation = await Login(params.username, password);
    if (confirmation.valid) {
      let data = await retrieveRecords(params.username);
      if (Array.isArray(data)) {
        setGameHistory(data); setHiddenPassVerifier(true); setHiddenRecords(false); setPassword("");
        return setVerifyBtnClr("primary");
      };
      return console.log(Error);
    }
    setErrorMessage("The password you have entered is incorrect. Please re-enter your password."); setPasswordError(true); setPassword("");
    return setVerifyBtnClr("primary");
  }

  // JSX code for generating the main menu page GUI
  return (
    <IonPage id="records-page">
      {
        /*
          Page Header Code
          Contains a page title
        */
      }
      <IonHeader>
        <IonToolbar>
          <IonTitle className="records-header">
            Records: <IonText color="success">{params.username}</IonText>!
          </IonTitle>
          <IonButton slot="end" fill="clear" color="primary" onClick={() => {
            nav.push(`/mainMenu/${params.username}`);
          }}>
            <IonIcon icon={home}></IonIcon>
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className="records-header">
              Account Records: <IonText color="success">{params.username}</IonText>!
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        {
          /*
            Page Content Code
          */
        }

        <AccountVerifyCard
          disableActionButton={disableVerifyButton}
          actionButtonColor={verifyBtnClr}
          hidden={hiddenPassVerifier}
          setHidden={setHiddenPassVerifier}
          setHiddenRecords={setHiddenRecords}
          password={password}
          setPassword={setPassword}
          passwordTextColor={passwordTextColor}
          onVerify={passwordVerifier}
        />

        <IonCard hidden={hiddenRecords}>
          <IonItem lines="none">
            <IonCardTitle className="records-card-header">
              Records
            </IonCardTitle>
            <IonButton slot="end" fill="clear" color="warning" onClick={() => {
              setHiddenRecords(true);
              setPassword("");
              setHiddenPassVerifier(false);
            }}>
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonItem>
        </IonCard>

        {
          /*
            ! TRINITY
          */
        }

        <IonGrid fixed={true} hidden={hiddenRecords}>
          <IonRow>
            {gameHistory.map(element => (
              <IonCol key={element.id}>
                <GameRecord
                  gameId = {element.id} 
                  winner = {element.winner}
                  timeStamp = {element.timestamp}
                  plyOneName = {element.plyOneName} 
                  plyTwoName = {element.plyTwoName}
                  plyOneColor = {element.plyOneColor}
                  plyTwoColor = {element.plyTwoColor}
                  blackPiecesTaken = {element.blackPiecesTaken} 
                  whitePiecesTaken = {element.whitePiecesTaken}
                />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        {
          /*
            Pop-up messages
            Used for errors and confirmations
          */
        }

        <IonToast
          isOpen={passwordError}
          onDidPresent={() => {}}
          onDidDismiss={() => setPasswordError(false)}
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
};

export default Records;
