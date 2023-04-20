// Importing required library's
import {
  IonButton,
  IonCard,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import { home, arrowBack } from 'ionicons/icons';
import './Records.css';
import { useParams } from 'react-router';

// Importing the global paramaters needed for the app to function
import { GlobalParams } from '../interfaces/GlobalParams';

// Importing the needed components for the pages GUI
import AccountVerifyCard from '../components/records/AccountVerifyCard';

// Importing the required function for this page
import { Login } from '../functions/login/Login';
import { useState } from 'react';

const Records: React.FC = () => {

  // Setup navigation system on this page so we can call other pages
  // Powered by nav system in App.tsx
  const nav = useIonRouter();

  // Setting up the global paramaters needed for the app to function
  const params = useParams<GlobalParams>();

  // React variables to store the password that the user enters
  const [password, setPassword] = useState<string>("");

  // Variable to change the color of confirm password user input text
  var passwordTextColor: string;

  // Check whether the user has entered anything input the password input box and set the text color accordingly
  if (password === "") {
    passwordTextColor = "medium";
  } else {
    passwordTextColor = "success";
  }

  // React variables to control the visibility of the certain UI components
  const [hiddenPassVerifier, setHiddenPassVerifier] = useState<boolean>(false);
  const [hiddenRecords, setHiddenRecords] = useState<boolean>(true);

  // Function to verify that the entered password is valid
  function passwordVerifier(password: string) {
    if (Login(params.username, password)) {
      //TODO Insert code for what happens when the entered password is valid
      console.log("Valid Password");
      setHiddenPassVerifier(true);
      setHiddenRecords(false);
      return;
    }
    //TODO Insert code for what happens when the entered password is invalid
    console.log("Invalid Password");
    return;
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

      </IonContent>
    </IonPage>
  );
};

export default Records;
