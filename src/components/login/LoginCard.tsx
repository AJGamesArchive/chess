// Importing required library's
import { IonButton, IonCard, IonCardTitle, IonIcon, IonInput, IonItem, IonLabel } from '@ionic/react';
import { arrowBack, logIn } from 'ionicons/icons';
import React from 'react';
import './LoginCard.css';

//TODO Add comments to this component at some point

interface LoginProps {
  hidden: boolean;
  setHidden: (value: boolean) => void;
  setHiddenOptions: (value: boolean) => void;
  disable: boolean;
  actionButtonColor: string;
  username: string;
  setUsername: (value: string) => void;
  usernameTextColor: string
  password: string;
  setPassword: (value: string) => void;
  passwordTextColor: string;
  onLogin: (username: string, password: string, mode: number) => void;
}

const LoginCard: React.FC<LoginProps> = ({ hidden, setHidden, setHiddenOptions, disable, actionButtonColor, username, setUsername, usernameTextColor, password, setPassword, passwordTextColor, onLogin }) => {
  return (
    <IonCard hidden={hidden}>
      <IonItem lines="full">
        <IonCardTitle className="login-card-header">
          Login:
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
          value={username}
          type="text"
          inputMode="text" 
          maxlength={50}
          placeholder="Enter your Username"
          color={usernameTextColor}
          className=""
          spellCheck={false} 
          required={true} 
          onIonChange={e => setUsername(e.detail.value!)}
        />
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
      <IonItem button detail={false} disabled={disable} lines="none" onClick={() => {
        onLogin(username, password, 1);
      }}>
        <IonLabel slot="end" color={actionButtonColor}>
          Login
        </IonLabel>
        <IonIcon icon={logIn} slot="end" color={actionButtonColor}></IonIcon>
      </IonItem>
    </IonCard>
  );
};

export default LoginCard;