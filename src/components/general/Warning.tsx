// Importing required library's
import { IonCard, IonCardContent, IonCardTitle, IonIcon, IonItem, IonText } from '@ionic/react';
import React from 'react';
import './Warning.css';

//TODO Add comments to this component at some point

interface WarningMessageProps {
  hidden: boolean;
  color: string;
  icon: any;
  title: string;
  message: string;
}

const WarningMessage: React.FC<WarningMessageProps> = ({ hidden, color, icon, title, message }) => {
  return (
    <IonCard hidden={hidden} color={color}>
      <IonItem lines="full" color={color}>
        <IonIcon slot="start" src={icon}/>
        <IonCardTitle className='warning-card-header'>
          {title}
        </IonCardTitle>
      </IonItem>
      <IonCardContent color="danger">
        <IonText>
          {message}
        </IonText>
      </IonCardContent>
    </IonCard>
  );
};

export default WarningMessage;