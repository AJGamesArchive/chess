// Importing required library's
import { IonCard, IonCardContent, IonCardTitle, IonIcon, IonInput, IonItem, IonLabel, IonText } from '@ionic/react';
import { arrowBack, arrowForwardCircle, gameController } from 'ionicons/icons';
import React from 'react';
import './ActionButtons.css';

//TODO Add comments to this component at some point

interface ActionButtonProps {
  canDisable: boolean;
  disabled: boolean;
  canHide: boolean;
  hidden: boolean;
  buttonName: string;
  buttonText: string;
  buttonIcon: any;
  buttonColor: string
  buttonTextColor: string;
  onButtonClick: (buttonName: string) => void;
}

const ActionButtons: React.FC<ActionButtonProps> = ({ canDisable, disabled, canHide, hidden, buttonName, buttonText, buttonIcon, buttonColor, buttonTextColor, onButtonClick }) => {
  if (canDisable && canHide) {
    return (
      <IonCard hidden={hidden} disabled={disabled} className={`action-button-card-${buttonColor}`}>
        <IonItem button detail={false} lines="none" onClick={() => {
          onButtonClick(buttonName);
        }}>
          <IonCardTitle slot="end" color={buttonTextColor} className="action-button-card-header">
            {buttonText}
          </IonCardTitle>
          <IonIcon slot="end" color={buttonTextColor} src={buttonIcon}/>
        </IonItem>
      </IonCard>
    );
  } else if (canDisable) {
    return (
      <IonCard disabled={disabled} className={`action-button-card-${buttonColor}`}>
        <IonItem button detail={false} lines="none" onClick={() => {
          onButtonClick(buttonName);
        }}>
          <IonCardTitle slot="end" color={buttonTextColor} className="action-button-card-header">
            {buttonText}
          </IonCardTitle>
          <IonIcon slot="end" color={buttonTextColor} src={buttonIcon}/>
        </IonItem>
      </IonCard>
    );
  } else if (canHide) {
    return (
      <IonCard hidden={hidden} className={`action-button-card-${buttonColor}`}>
        <IonItem button detail={false} lines="none" onClick={() => {
          onButtonClick(buttonName);
        }}>
          <IonCardTitle slot="end" color={buttonTextColor} className="action-button-card-header">
            {buttonText}
          </IonCardTitle>
          <IonIcon slot="end" color={buttonTextColor} src={buttonIcon}/>
        </IonItem>
      </IonCard>
    );
  } else {
    return (
      <IonCard className={`action-button-card-${buttonColor}`}>
        <IonItem button detail={false} lines="none" onClick={() => {
          onButtonClick(buttonName);
        }}>
          <IonCardTitle slot="end" color={buttonTextColor} className="setup-card-header">
            {buttonText}
          </IonCardTitle>
          <IonIcon slot="end" color={buttonTextColor} src={buttonIcon}/>
        </IonItem>
      </IonCard>
    );
  };
};

export default ActionButtons;