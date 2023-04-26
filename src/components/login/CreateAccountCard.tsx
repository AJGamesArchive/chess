// Importing required library's
import { IonButton, IonCard, IonCardTitle, IonIcon, IonInput, IonItem, IonLabel } from '@ionic/react';
import { addCircle, arrowBack } from 'ionicons/icons';
import React from 'react';
import './CreateAccountCard.css';

//TODO Add comments to this component at some point

interface CreateAccountProps {
  hidden: boolean;
  setHidden: (value: boolean) => void;
  setHiddenOptions: (value: boolean) => void;
  disable: boolean;
  createUsername: string;
  setCreateUsername: (value: string) => void;
  crtUsernameTxtClr: string
  createPassword: string;
  setCreatePassword: (value: string) => void;
  crtPasswordTxtClr: string;
  confirmPassword: string;
  setConfirmPassword: (value: string) => void;
  cfmPasswordTxtClr: string
  onCreateAccount: (username: string, password: string, mode: number) => void;
}

const CreateAccountCard: React.FC<CreateAccountProps> = ({ hidden, setHidden, setHiddenOptions, disable, createUsername, setCreateUsername, crtUsernameTxtClr, createPassword, setCreatePassword, crtPasswordTxtClr, confirmPassword, setConfirmPassword, cfmPasswordTxtClr, onCreateAccount }) => {
  return (
    <IonCard hidden={hidden}>
      <IonItem lines="full">
        <IonCardTitle className="create-account-card-header">
          Create a New Account:
        </IonCardTitle>
        <IonButton slot="end" fill="clear" color="warning" onClick={() => {
          setHidden(true);
          setHiddenOptions(false);
        }}>
          <IonIcon icon={arrowBack}></IonIcon>
        </IonButton>
      </IonItem>
      <IonItem lines="inset">
        <IonInput
          value={createUsername}
          type="text"
          inputMode="text" 
          maxlength={50}
          placeholder="Enter a Username"
          color={crtUsernameTxtClr}
          className=""
          spellCheck={false} 
          required={true} 
          onIonChange={e => setCreateUsername(e.detail.value!)}
        />
      </IonItem>
      <IonItem lines="inset">
        <IonInput
          value={createPassword}
          type="password"
          inputMode="text"
          maxlength={50}
          placeholder="Enter a Password"
          color={crtPasswordTxtClr}
          className=""
          spellCheck={false} 
          required={true} 
          onIonChange={e => setCreatePassword(e.detail.value!)}
        />
      </IonItem>
      <IonItem lines="full">
        <IonInput
          value={confirmPassword}
          type="password"
          inputMode="text"
          maxlength={50}
          placeholder="Confirm your Password"
          color={cfmPasswordTxtClr}
          className=""
          spellCheck={false} 
          required={true} 
          onIonChange={e => setConfirmPassword(e.detail.value!)}
        />
      </IonItem>
      <IonItem button detail={false} disabled={disable} lines="none" onClick={() => {
        onCreateAccount(createUsername, createPassword, 2);
      }}>
        <IonLabel slot="end" color="primary">
          Create Account
        </IonLabel>
        <IonIcon icon={addCircle} slot="end" color="primary"></IonIcon>
      </IonItem>
    </IonCard>
  );
};

export default CreateAccountCard;