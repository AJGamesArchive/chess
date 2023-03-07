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

  const nav = useIonRouter();

  return (
    <IonPage id="home-page">
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
