import { useState } from 'react';
import {
  IonCard,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {

  // Setup navigation system on this page so we can call other pages
  // Powered by nav system in App.tsx
  const nav = useIonRouter();

  return (
    <IonPage id="home-page">
      {
        /*
          Page Header Code
        */
      }
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Home
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Home
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
            DEV button that takes you to the chess board mockup
          */
        }
        <IonCard onClick={() => {
          nav.push('/chessBoardMockup');
        }}>
          <IonItem color="primary">
            <IonLabel className="dev-button">
              <IonText className="dev-button-text">
                DEV Button To Chess Board Mockup
              </IonText>
            </IonLabel>
          </IonItem>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Home;
