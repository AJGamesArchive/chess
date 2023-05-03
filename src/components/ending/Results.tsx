// Importing required library's
import { IonAvatar, IonCard, IonCardTitle, IonIcon, IonImg, IonItem, IonLabel, IonSelect, IonSelectOption, IonText } from '@ionic/react';
import { radioButtonOn, shieldCheckmark, person } from 'ionicons/icons';
import React from 'react';
import './Results.css';

//TODO Add comments to this component at some point

interface GameResultsProps {
  header: string;
  plyOneIcon: any;
  plyOneIconFull: any;
  plyOneTitle: string;
  plyOneName: string;
  plyOneColor: string;
  plyTwoIcon: any;
  plyTwoIconFull: any;
  plyTwoTitle: string;
  plyTwoName: string;
  plyTwoColor: string;
  whiteIcon: any;
  whitePiecesTaken: string;
  blackIcon: any;
  blackPiecesTaken: string;
}

const GameResults: React.FC<GameResultsProps> = ({ 
  header,
  plyOneIcon, 
  plyOneIconFull, 
  plyOneTitle, 
  plyOneName, 
  plyOneColor,
  plyTwoIcon,
  plyTwoIconFull,
  plyTwoTitle,
  plyTwoName,
  plyTwoColor,
  whiteIcon,
  whitePiecesTaken,
  blackIcon,
  blackPiecesTaken
}) => {
  return (
    <IonCard>
      <IonItem lines="full">
        <IonCardTitle className='game-ending-card-header'>
          {header}
        </IonCardTitle>
      </IonItem>
      <IonItem lines='none'>
      <IonIcon slot="start" src={plyOneIcon}/>
        <IonText>
          {plyOneTitle + " "}<IonText className='game-ending-card-highlight' color="success">{plyOneName}</IonText>
        </IonText>
      </IonItem>
      <IonItem lines="inset">
        <IonIcon slot="start" src={plyOneIconFull}/>
        <IonText>
          Color: <IonText className='game-ending-card-highlight' color="success">{plyOneColor}</IonText>
        </IonText>
      </IonItem>
      <IonItem lines='none'>
      <IonIcon slot="start" src={plyTwoIcon}/>
        <IonText>
          {plyTwoTitle + " "}<IonText className='game-ending-card-highlight' color="success">{plyTwoName}</IonText>
        </IonText>
      </IonItem>
      <IonItem lines="inset">
        <IonIcon slot="start" src={plyTwoIconFull}/>
        <IonText>
          Color: <IonText className='game-ending-card-highlight' color="success">{plyTwoColor}</IonText>
        </IonText>
      </IonItem>
      <IonItem lines='none'>
      <IonIcon slot="start" src={whiteIcon}/>
        <IonText>
          White Pieces Taken: <IonText className='game-ending-card-highlight' color="success">{whitePiecesTaken}</IonText>
        </IonText>
      </IonItem>
      <IonItem lines="none">
        <IonIcon slot="start" src={blackIcon}/>
        <IonText>
          Black Pieces Taken: <IonText className='game-ending-card-highlight' color="success">{blackPiecesTaken}</IonText>
        </IonText>
      </IonItem>
    </IonCard>
  );
};

export default GameResults;