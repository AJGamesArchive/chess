// Importing required library's
import {
  IonButton,
  IonCard,
  IonCardContent,
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
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import { logOut, construct, trophy, man, gameController } from 'ionicons/icons';
import './MainMenu.css';
import { useParams } from 'react-router';

// Importing the global paramaters needed for the app to function
import { GlobalParams } from '../interfaces/GlobalParams';

const MainMenu: React.FC = () => {

  // Setup navigation system on this page so we can call other pages
  // Powered by nav system in App.tsx
  const nav = useIonRouter();

  // Setting up the global paramaters needed for the app to function
  const params = useParams<GlobalParams>();

  // JSX code for generating the login page GUI
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
            TODO Add more comments to this page content later
          */
        }

        <IonCard>
          <IonImg src="/assets/images/PageBanners/MenuPVPBanner.png"/>
          <IonItem button detail={false} lines="full" onClick={() => {
            //TODO Insert code to go to PVP chessboard here
            console.log("PVP Play");
          }}>
            <IonCardTitle className="main-menu-card-header" color="dark">
              Play Against Player
            </IonCardTitle>
            <IonLabel slot="end" color="primary">
              Play
            </IonLabel>
            <IonIcon icon={man} slot="end" color="primary"></IonIcon>
          </IonItem>
          <IonCardContent>
            <IonText color="dark">
              Write game mode description here.
            </IonText>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonImg src="/assets/images/PageBanners/MenuPVEBanner.png"/>
          <IonItem button detail={false} lines="full" onClick={() => {
            //TODO Insert code to go to PVE chessboard here
            console.log("PVE Play");
          }}>
            <IonCardTitle className="main-menu-card-header" color="dark">
              Play Against Computer
            </IonCardTitle>
            <IonLabel slot="end" color="primary">
              Play
            </IonLabel>
            <IonIcon icon={gameController} slot="end" color="primary"></IonIcon>
          </IonItem>
          <IonCardContent>
            <IonText color="dark">
              Write game mode description here.
            </IonText>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonImg src="/assets/images/PageBanners/MenuSettingsBanner.png"/>
          <IonItem button detail={false} lines="full" onClick={() => {
            //TODO Insert code to go to account settings page here
            console.log("Go To Account Settings");
          }}>
            <IonCardTitle className="main-menu-card-header" color="dark">
              Account Records
            </IonCardTitle>
            <IonLabel slot="end" color="primary">
              View
            </IonLabel>
            <IonIcon icon={trophy} slot="end" color="primary"></IonIcon>
          </IonItem>
          <IonCardContent>
            <IonText color="dark">
              Write game mode description here.
            </IonText>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default MainMenu;
