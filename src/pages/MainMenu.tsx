// Importing required library's
import { useState } from 'react';
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
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import { logOut, hammer } from 'ionicons/icons';
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
            <IonIcon icon={hammer}></IonIcon>
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
          <IonItem lines="full">
            <IonCardTitle className="main-menu-card-header" color="dark">
              Play Against Player
            </IonCardTitle>
            <IonButton slot="end" fill="outline" color="primary" onClick={() => {
              //TODO Insert code to go to PVP chessboard here
              console.log("PVP Play");
            }}>
              Play
            </IonButton>
          </IonItem>
          <IonCardContent>
            <IonText color="dark">
              Write game mode description here.
            </IonText>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonImg src="/assets/images/PageBanners/MenuPVEBanner.png"/>
          <IonItem lines="full">
            <IonCardTitle className="main-menu-card-header" color="dark">
              Play Against Computer
            </IonCardTitle>
            <IonButton slot="end" fill="outline" color="primary" onClick={() => {
              //TODO Insert code to go to PVP chessboard here
              console.log("PVE Play");
            }}>
              Play
            </IonButton>
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
