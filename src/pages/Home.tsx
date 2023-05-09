// Importing required library's
import { useState } from 'react';
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
import './Home.css';

// Importing page components
import LoginCard from '../components/login/LoginCard';
import CreateAccountCard from '../components/login/CreateAccountCard';
import WarningMessage from '../components/general/Warning';

// Importing page functions
import { Login } from '../functions/login/Login';
import { CreateAccount } from '../functions/login/CreateAccount';

// Importing page types
import { CredentialValidation } from '../types/login/AccountVerification';

const Home: React.FC = () => {

  // Setup navigation system on this page so we can call other pages
  // Powered by nav system in App.tsx
  const nav = useIonRouter();

  // React variables for storing the username and password that the user enters when they go to login
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // React variable to control the color of the 'login' and 'create account' buttons to help with user feedback while systems are loading
  const [actionBtnClr, setActionBtnClr] = useState<string>("primary");

  // Variables for changing the color of the login user input text
  var usernameTextColor: string;
  var passwordTextColor: string;

  // Check whether the user has entered any details on the login screen and set text color accordingly
  if (username === "") {
    usernameTextColor = "medium";
  } else {
    usernameTextColor = "success";
  }
  if (password === "") {
    passwordTextColor = "medium";
  } else {
    passwordTextColor = "success";
  }

  // React variables for storing the username and password that the user enters when creating an account
  const [createUsername, setCreateUsername] = useState<string>("");
  const [createPassword, setCreatePassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  // Variables for changing the color of the create account user input text
  var crtUsernameTxtClr: string;
  var crtPasswordTxtClr: string;
  var cfmPasswordTxtClr: string;

  // Check whether the user has entered any details on the create account screen and set text color accordingly
  if (createUsername === "") {
    crtUsernameTxtClr = "medium";
  } else {
    crtUsernameTxtClr = "success";
  }
  if (createPassword === "") {
    crtPasswordTxtClr = "medium";
  } else {
    crtPasswordTxtClr = "success";
  }
  if (confirmPassword === "") {
    cfmPasswordTxtClr = "medium";
  } else {
    cfmPasswordTxtClr = "success";
  }

  // React variables for controlling what cards are shown and hidden at any time
  const [hiddenOptions, setHiddenOptions] = useState<boolean>(false);
  const [hiddenLogin, setHiddenLogin] = useState<boolean>(true);
  const [hiddenCreateAccount, setHiddenCreateAccount] = useState<boolean>(true);

  // React variable to control disabling the 'Login' and 'Create Account' buttons
  var disableCreate: boolean;
  var disableLogin: boolean;

  // Check whether conditions have been met to enable to respective action button
  if (createUsername === "" || createPassword === "" || confirmPassword === "") {
    disableCreate = true;
  } else {
    disableCreate = false;
  }
  if (username === "" || password === "") {
    disableLogin = true;
  } else {
    disableLogin = false;
  }

  // React variables that control error and confirmation messages
  const [creationError, setCreationError] = useState<boolean>(false);
  const [creationConfirm, setCreationConfirm] = useState<boolean>(false);
  const [creationMessage, setCreationMessage] = useState<string>("");

  // Async Function to control whether or not you've successfully logged in and are able to proceed to the main menu
  async function loginController(username: string, password: string, mode: number) {
    // Change the color of the action button while system is loading
    setActionBtnClr("medium");
    // Work out if the user is logging in or creating an account
    if (mode === 1) {
      // Handle login
      let confirmation: CredentialValidation = await Login(username, password);
      if (confirmation.valid) {
        nav.push(`/mainMenu/${username}`);
        return setActionBtnClr("primary");
      };
      setCreationMessage(confirmation.message); setCreationError(true); setPassword("");
      return setActionBtnClr("primary");
    };
    if (mode === 2) {
      // Handle account creation
      let confirmation: CredentialValidation = await CreateAccount(createUsername, createPassword, confirmPassword);
      setCreationMessage(confirmation.message);
      if (confirmation.valid) {
        setCreationConfirm(true); setHiddenCreateAccount(true); setHiddenOptions(false); setCreateUsername(""); setUsername(""); setPassword("");
      } else {
        setCreationError(true);
      };
      setCreatePassword(""); setConfirmPassword("");
      return setActionBtnClr("primary");
    };
    return setActionBtnClr("primary");
  };

  // JSX code for generating the login page GUI
  return (
    <IonPage id="home-page">
      {
        /*
          Page Header Code
          Contains a page title and DEV button to the ChessBoard mockup page
        */
      }
      <IonHeader>
        <IonToolbar>
          <IonTitle className="home-header">
            Welcome!
          </IonTitle>
          <IonTitle slot="end" className='home-header'>
            Build: <IonText color="success">2.0.0</IonText>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className="home-header">
              Welcome
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        {
          /*
            Page Content Code
          */
        }

        {
          /*
            A Main banner image displayed at the top of the screen
          */
        }
        <IonCard>
          <IonImg src="/assets/images/PageBanners/LoginBanner.png"/>
        </IonCard>

        {
          /*
            Card that asks the user to either login or create an account
          */
        }
        <IonCard hidden={hiddenOptions}>
          <IonItem lines="full">
            <IonCardTitle className="home-card-header">
              What would you like to do?
            </IonCardTitle>
          </IonItem>
          <IonItem button lines="inset" detail={false} onClick={() => {
            setHiddenOptions(true);
            setHiddenLogin(false);
          }}>
            <IonLabel>
              Login to my Account
            </IonLabel>
            <IonText slot="end" color="primary">Login</IonText>
            <IonIcon slot="end" color="primary" icon={logIn}></IonIcon>
          </IonItem>
          <IonItem button lines="none" detail={false} onClick={() => {
            setHiddenOptions(true);
            setHiddenCreateAccount(false);
          }}>
            <IonLabel>
              Create a New Account
            </IonLabel>
            <IonText slot="end" color="primary">Create</IonText>
            <IonIcon slot="end" color="primary" icon={addCircle}></IonIcon>
          </IonItem>
        </IonCard>

        {
          /*
            Card that asks the user for their username and password if the selected the 'login' options
          */
        }
        <LoginCard
          hidden={hiddenLogin}
          setHidden={setHiddenLogin}
          setHiddenOptions={setHiddenOptions}
          disable={disableLogin}
          actionButtonColor={actionBtnClr}
          username={username}
          setUsername={setUsername}
          usernameTextColor={usernameTextColor}
          password={password}
          setPassword={setPassword}
          passwordTextColor={passwordTextColor}
          onLogin={loginController}
        />

        {
          /*
            Card that asks to create a username and password if you choose to create a new account
          */
        }
        <CreateAccountCard
          hidden={hiddenCreateAccount}
          setHidden={setHiddenCreateAccount}
          setHiddenOptions={setHiddenOptions}
          disable={disableCreate}
          actionButtonColor={actionBtnClr}
          createUsername={createUsername}
          setCreateUsername={setCreateUsername}
          crtUsernameTxtClr={crtUsernameTxtClr}
          createPassword={createPassword}
          setCreatePassword={setCreatePassword}
          crtPasswordTxtClr={crtPasswordTxtClr}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          cfmPasswordTxtClr={cfmPasswordTxtClr}
          onCreateAccount={loginController}
        />

        {
          /*
            Temporary account creation password warning
          */
        }

        <WarningMessage
          hidden={hiddenCreateAccount}
          color={"danger"}
          icon={warning}
          title={"Warning!"}
          message={"When creating an account, please do NOT use a password that you use for other platforms & services. The passwords are currently NOT encrypted before being stored and the database is in 'testing' mode. As a result, passwords are not currently stored as securely as they could be and so we strongly recommend you use a throwaway password."}
        />

        {
          /*
            Pop-up boxes that display messages to the user based on actions they've preformed
            Used to return errors and confirmations
          */
        }
        <IonToast
          isOpen={creationError}
          onDidPresent={() => {}}
          onDidDismiss={() => setCreationError(false)}
          message={creationMessage}
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

        <IonToast
          isOpen={creationConfirm}
          onDidPresent={() => {}}
          onDidDismiss={() => setCreationConfirm(false)}
          message={creationMessage}
          icon={checkmarkDone}
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

      </IonContent>
    </IonPage>
  );
};

export default Home;
