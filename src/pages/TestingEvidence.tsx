// Importing required library's
import {
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { download } from 'ionicons/icons';
import './TestingEvidence.css';

const TestingEvidence: React.FC = () => {

  // JSX code for generating the main menu page GUI
  return (
    <IonPage id="test-page">
      {
        /*
          Page Header Code
          Contains a page title and a button to logout of your account
        */
      }
      <IonHeader>
        <IonToolbar>
          <IonTitle className="test-header">
            Testing Evidence
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" className="main-menu-header">
              Testing Evidence
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        {
          /*
            Page Content Code
            The 'OptionCard' is a custom UI component that takes in the details of the option the user has and renders are card on the screen
          */
        }

        <IonCard>
          <IonItem lines="full">
            <IonCardTitle className="option-card-header" color="dark">
              GUI & Nav System Testing
            </IonCardTitle>
          </IonItem>
          <IonCardContent>
            <IonText color="dark">
              This ZIP file contains the testing evidence for the main app GUI and navigation system testing. All file names within the ZIP file are cross referenced to the testing table.
            </IonText>
          </IonCardContent>
          <IonItem lines="none" button detail={false} href="https://1drv.ms/u/s!ArvVojzCCHTcoRbdrKPh84ffp7md?e=1pKZjj">
            <IonLabel slot="end" color="primary">
              Download Evidence ZIP
            </IonLabel>
            <IonIcon icon={download} slot="end" color="primary"></IonIcon>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonItem lines="full">
            <IonCardTitle className="option-card-header" color="dark">
              Chess Engine Testing
            </IonCardTitle>
          </IonItem>
          <IonCardContent>
            <IonText color="dark">
              This ZIP file contains the testing evidence for the Chess Engine testing. All file names within the ZIP file are cross referenced to the testing table.
            </IonText>
          </IonCardContent>
          <IonItem lines="none" button detail={false} href="https://1drv.ms/u/s!ArvVojzCCHTcoRhXX1LQuceqckqQ?e=0rgH5H">
            <IonLabel slot="end" color="primary">
              Download Evidence ZIP
            </IonLabel>
            <IonIcon icon={download} slot="end" color="primary"></IonIcon>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonItem lines="full">
            <IonCardTitle className="option-card-header" color="dark">
              Chess AI Testing
            </IonCardTitle>
          </IonItem>
          <IonCardContent>
            <IonText color="dark">
              This ZIP file contains the testing evidence for the Chess AI testing. All file names within the ZIP file are cross referenced to the testing table.
            </IonText>
          </IonCardContent>
          <IonItem lines="none" button detail={false} href="https://1drv.ms/u/s!ArvVojzCCHTcoRkficXODa590ijS?e=mAf40l">
            <IonLabel slot="end" color="primary">
              Download Evidence ZIP
            </IonLabel>
            <IonIcon icon={download} slot="end" color="primary"></IonIcon>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonItem lines="full">
            <IonCardTitle className="option-card-header" color="dark">
              Database Integration Testing
            </IonCardTitle>
          </IonItem>
          <IonCardContent>
            <IonText color="dark">
              This ZIP file contains the testing evidence for the Database Integration testing. All file names within the ZIP file are cross referenced to the testing table.
            </IonText>
          </IonCardContent>
          <IonItem lines="none" button detail={false} href="https://1drv.ms/u/s!ArvVojzCCHTcoRcpKNrxwSRaWmNq?e=DLTAeR">
            <IonLabel slot="end" color="primary">
              Download Evidence ZIP
            </IonLabel>
            <IonIcon icon={download} slot="end" color="primary"></IonIcon>
          </IonItem>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default TestingEvidence;
