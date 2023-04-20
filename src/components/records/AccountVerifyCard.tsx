// Importing required library's
import { IonCard, IonCardTitle, IonIcon, IonInput, IonItem, IonLabel } from '@ionic/react';
import { arrowForwardCircle } from 'ionicons/icons';
import React from 'react';
import './AccountVerifyCard.css';

//TODO Add comments to this component at some point

interface LoginProps {
  hidden: boolean;
  setHidden: (value: boolean) => void;
  setHiddenRecords: (value: boolean) => void;
  password: string;
  setPassword: (value: string) => void;
  passwordTextColor: string;
  onVerify: (password: string) => void;
}

const AccountVerifyCard: React.FC<LoginProps> = ({ hidden, setHidden, setHiddenRecords, password, setPassword, passwordTextColor, onVerify }) => {
  return (
    <IonCard hidden={hidden}>
      <IonItem lines="full">
        <IonCardTitle className="login-card-header">
          Please confirm your password:
        </IonCardTitle>
      </IonItem>
      <IonItem lines="full">
        <IonInput
          value={password}
          type="password"
          inputMode="text"
          maxlength={50}
          placeholder="Enter your Password"
          color={passwordTextColor}
          className=""
          spellCheck={false} 
          required={true} 
          onIonChange={e => setPassword(e.detail.value!)}
        />
      </IonItem>
      <IonItem button detail={false} lines="none" onClick={() => {
        onVerify(password);
      }}>
        <IonLabel slot="end" color="primary">
          Verify
        </IonLabel>
        <IonIcon icon={arrowForwardCircle} slot="end" color="primary"></IonIcon>
      </IonItem>
    </IonCard>
  );
};

export default AccountVerifyCard;