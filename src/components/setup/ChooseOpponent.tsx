// Importing required library's
import { IonButton, IonCard, IonCardContent, IonCardTitle, IonIcon, IonInput, IonItem, IonLabel, IonText } from '@ionic/react';
import { arrowBack, arrowForwardCircle, help, personCircleOutline } from 'ionicons/icons';
import React from 'react';
import './ChooseOpponent.css';

//TODO Add comments to this component at some point

interface ChooseOpponentProps {
  hidden: boolean;
  setHidden: (value: boolean) => void;
  setHiddenHasAccount: (value: boolean) => void;
  setHiddenNoAccount: (value: boolean) => void;
  onBackButtonClick: (buttonName: string) => void;
}

const ChooseOpponent: React.FC<ChooseOpponentProps> = ({ hidden, setHidden, setHiddenHasAccount, setHiddenNoAccount, onBackButtonClick }) => {
  return (
    <IonCard hidden={hidden}>
      <IonItem lines="full" >
        <IonCardTitle className='choose-op-card-header'>
          Does your opponent:
        </IonCardTitle>
        <IonButton slot="end" fill="clear" color="warning" onClick={() => {
          onBackButtonClick("Cancel");
        }}>
          <IonIcon icon={arrowBack}></IonIcon>
        </IonButton>
      </IonItem>
      <IonItem button detail={false} lines="inset" onClick={() => {
        setHidden(true);
        setHiddenHasAccount(false);
      }}>
        Have an account?
        <IonText slot="end" color="primary">Select</IonText>
        <IonIcon slot="end" color="primary" src={personCircleOutline}/>
      </IonItem>
      <IonItem button detail={false} lines="none" onClick={() => {
        setHidden(true);
        setHiddenNoAccount(false);
      }}>
        Not have an account?
        <IonText slot="end" color="primary">Select</IonText>
        <IonIcon slot="end" color="primary" src={help}/>
      </IonItem>
    </IonCard>
  );
};

export default ChooseOpponent;