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
import { logOut, construct, trophy, man, gameController } from 'ionicons/icons';
import './MainMenu.css';
import { useParams } from 'react-router';

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
      //TODO Insert code to go to PVP chessboard here
      console.log("PVP Play");
      return;
    }
    if (connectionID === 2) {
      //TODO Insert code to go to PVE chessboard here
      console.log("PVE Play");
      return;
    }
    if (connectionID === 3) {
      //TODO Insert code to go to account settings page here
      console.log("Go To Account Settings");
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
          <IonButton slot="end" fill="clear" color="danger" onClick={() => {
            nav.push(`/chessBoardMockup`);
          }}>
            <IonIcon icon={construct}></IonIcon>
          </IonButton>
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
          banner="/assets/images/PageBanners/MenuPVPBanner.png"
          connectionID={1}
          nav={navController}
          title="Play Against Player"
          buttonName="Play"
          icon={man}
          description="Write game mode description here."
        />

        <OptionCard
          banner="/assets/images/PageBanners/MenuPVEBanner.png"
          connectionID={2}
          nav={navController}
          title="Play Against AI"
          buttonName='Play'
          icon={gameController}
          description="Write game mode description here."
        />

        <OptionCard
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
