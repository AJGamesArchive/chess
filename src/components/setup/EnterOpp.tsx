// Importing required library's
import { IonButton, IonCard, IonCardContent, IonCardTitle, IonIcon, IonInput, IonItem, IonLabel, IonText } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import React from 'react';
import './EnterOpp.css';

//TODO Add comments to this component at some point

interface EnterOppProps {
  hidden: boolean;
  setHidden: (value: boolean) => void;
  setHiddenOpSelect: (value: boolean) => void;
  cardTitle: string
  playerName: string;
  setPlayerName: (value: string) => void;
  inputPlaceHolder: string;
  inputColor: string;
  buttonText: string
  icon: any;
  hasAccount: boolean;
  onNameEnter: (hasAccount: boolean) => void;
}

const EnterOpp: React.FC<EnterOppProps> = ({ hidden, setHidden, setHiddenOpSelect, cardTitle, playerName, setPlayerName, inputPlaceHolder, inputColor, buttonText, icon, hasAccount, onNameEnter }) => {
  return (
    <IonCard hidden={hidden}>
      <IonItem lines="full">
        <IonCardTitle className='enter-op-card-header'>
          {cardTitle}
        </IonCardTitle>
        <IonButton slot="end" fill="clear" color="warning" onClick={() => {
          setHidden(true);
          setHiddenOpSelect(false);
        }}>
          <IonIcon icon={arrowBack}></IonIcon>
        </IonButton>
      </IonItem>
      <IonItem lines="full">
      <IonInput
        value={playerName}
        type="text"
        inputMode="text" 
        maxlength={50}
        placeholder={inputPlaceHolder}
        color={inputColor}
        className=""
        spellCheck={false} 
        required={true} 
        onIonChange={e => setPlayerName(e.detail.value!)}
      />
      </IonItem>
      <IonItem button detail={false} lines="none" onClick={() => {
        onNameEnter(hasAccount);
      }}>
        <IonText color="primary" slot="end">{buttonText}</IonText>
        <IonIcon color="primary" slot="end" src={icon}/>
      </IonItem>
    </IonCard>
  );
};

export default EnterOpp;