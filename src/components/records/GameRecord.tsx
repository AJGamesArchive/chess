// Importing required library's
import { IonCard, IonCardContent, IonCardTitle, IonIcon, IonInput, IonItem, IonLabel, IonText } from '@ionic/react';
import { arrowForwardCircle } from 'ionicons/icons';
import React from 'react';
import './GameRecord.css';

//TODO Add comments to this component at some point

interface GameRecordProps {
  hiddenRecords: boolean;
  setHiddenRecords: (value: boolean) => void;
  title: string;
}

const GameRecord: React.FC<GameRecordProps> = ({ hiddenRecords, setHiddenRecords, title }) => {
  return (
    <IonCard hidden={hiddenRecords}>
      <IonText>
        Text
        {title}
      </IonText>
      <IonLabel>
        Label
      </IonLabel>
      <IonCardTitle>
        Title
      </IonCardTitle>
      <IonCardContent>
        Content
      </IonCardContent>
    </IonCard>
    
  );
};

export default GameRecord;