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
import { logOut, trophy, man, gameController } from 'ionicons/icons';
import { useParams } from 'react-router';
import './MainMenu.css';

// Importing the global paramaters needed for the app to function
import { GlobalParams } from '../interfaces/GlobalParams';

// Importing the needed components for the pages GUI
import OptionCard from '../components/menu/OptionCard';

const MainMenu: React.FC = () => {

  // Setup navigation system on this page so we can call other pages
  // Powered by nav system in App.tsx
  const nav = useIonRouter();

  // Setting up the global paramaters needed for the app to function
  const params = useParams<GlobalParams>();

  // Function to control what page in the app each option card will send you to
  function navController(connectionID: number) {
    if (connectionID === 1) {
      window.location.href = `/setup/${params.username}/PVP`;
      return;
    }
    if (connectionID === 2) {
      window.location.href = `/setup/${params.username}/PVE`;
      return;
    }
    if (connectionID === 3) {
      nav.push(`/records/${params.username}`);
      return;
    }
    console.log("Main Menu Navigation Controller: Something Went Wrong!");
    return;
  }

  // JSX code for generating the main menu page GUI
  return (
    <IonPage id="home-page">
      {
        /*
          Page Header Code
          Contains a page title and a button to logout of your account
        */
      }
      <IonHeader>
        <IonToolbar>
          <IonTitle className="main-menu-header">
            Hello <IonText color="success">{params.username}</IonText>!
          </IonTitle>
          <IonButton slot="end" fill="clear" color="warning" href="/Home">
            <IonIcon icon={logOut}></IonIcon>
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className="main-menu-header">
              Main Menu
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        {
          /*
            Page Content Code
            The 'OptionCard' is a custom UI component that takes in the details of the option the user has and renders are card on the screen
          */
        }

        <OptionCard
          disabled={false}
          banner="/assets/images/PageBanners/MenuPVPBanner.png"
          connectionID={1}
          nav={navController}
          title="Play Against Player"
          buttonName="Play"
          icon={man}
          description="Write game mode description here."
        />

        <OptionCard
          disabled={false}
          banner="/assets/images/PageBanners/MenuPVEBanner.png"
          connectionID={2}
          nav={navController}
          title="Play Against AI"
          buttonName='Play'
          icon={gameController}
          description="Write game mode description here."
        />

        <OptionCard
          disabled={false}
          banner="/assets/images/PageBanners/MenuSettingsBanner.png"
          connectionID={3}
          nav={navController}
          title="Account Records"
          buttonName='View'
          icon={trophy}
          description="Write game mode description here."
        />

      </IonContent>
    </IonPage>
  );
};

export default MainMenu;
