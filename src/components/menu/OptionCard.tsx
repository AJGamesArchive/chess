// Importing required library's
import { IonCard, IonCardContent, IonCardTitle, IonIcon, IonImg, IonItem, IonLabel, IonText } from '@ionic/react';
import React from 'react';
import './OptionCard.css';

// Props that fetch the data being passed from the source call and passes the data into the component
interface MenuOptionProps {
  disabled: boolean;
  banner: string;
  connectionID: number;
  nav: (connectionID: number) => void;
  title: string;
  buttonName: string;
  icon: any;
  description: string;
}

// React function that setups the JSX component to be exported and passes data into the component
const OptionCard: React.FC<MenuOptionProps> = ({ disabled, banner, connectionID, nav, title, buttonName, icon, description }) => {
  // JSX code for generating the custom 'Option Card' UI component using passed in data
  return (
    <IonCard disabled={disabled}>
      <IonImg src={banner}/>
      <IonItem button detail={false} lines="full" onClick={() => {
        nav(connectionID);
      }}>
        <IonCardTitle className="option-card-header" color="dark">
          {title}
        </IonCardTitle>
        <IonLabel slot="end" color="primary">
          {buttonName}
        </IonLabel>
        <IonIcon icon={icon} slot="end" color="primary"></IonIcon>
      </IonItem>
      <IonCardContent>
        <IonText color="dark">
          {description}
        </IonText>
      </IonCardContent>
    </IonCard>
  );
};

export default OptionCard;