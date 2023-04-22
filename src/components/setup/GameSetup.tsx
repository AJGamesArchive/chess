// Importing required library's
import { IonAvatar, IonCard, IonCardTitle, IonIcon, IonImg, IonItem, IonLabel, IonSelect, IonSelectOption, IonText } from '@ionic/react';
import { radioButtonOn, shieldCheckmark, person } from 'ionicons/icons';
import React from 'react';
import './GameSetup.css';

//TODO Add comments to this component at some point

interface GameSetupProps {
  hidden: boolean;
  mode: string;
  playerOne: string;
  playerTwo: string;
  playerTwoIcon: any;
  setPlayerTwoColor: (value: string) => void;
  boardColor: string;
  setWhitePlayer: (value: string) => void;
  setBlackPlayer: (value: string) => void;
  whitePlayer: string;
  blackPlayer: string;
  readyToStart: (whitePlayer: string, blackPlayer: string) => boolean;
  setDisableStart: (value: boolean) => void;
}

const GameSettings: React.FC<GameSetupProps> = ({ hidden, mode, playerOne, playerTwo, playerTwoIcon, setPlayerTwoColor, boardColor, setWhitePlayer, setBlackPlayer, whitePlayer, blackPlayer, readyToStart, setDisableStart }) => {
  return (
    <IonCard hidden={hidden}>
      <IonItem lines="full">
        <IonCardTitle className="game-setup-card-header">
          Settings:
        </IonCardTitle>
      </IonItem>
      <IonItem lines="inset">
        <IonIcon slot="start" color="medium" src={shieldCheckmark}/>
        <IonText>
        Mode: <IonText className="game-setup-card-highlight" color="success">{mode}</IonText>
        </IonText>
      </IonItem>
      <IonItem lines="inset">
        <IonIcon slot="start" color="medium" src={person}/>
        <IonText>
          Player 1: <IonText className="game-setup-card-highlight" color="success">{playerOne}</IonText>
        </IonText>
      </IonItem>
      <IonItem lines="inset">
        <IonIcon slot="start" color="medium" src={playerTwoIcon}/>
        <IonText>
          Player 2: <IonText className="game-setup-card-highlight" color="success">{playerTwo}</IonText>
        </IonText>
      </IonItem>
      <IonItem lines="full">
        <IonIcon slot="start" color="medium" src={radioButtonOn}/>
        <IonText>
          Board Color: <IonText className="game-setup-card-highlight" color="success">{boardColor}</IonText>
        </IonText>
      </IonItem>
      <IonItem lines="full">
        <IonCardTitle className="game-setup-card-header">
          Select Piece Colors:
        </IonCardTitle>
      </IonItem>
      <IonItem lines="inset">
        <IonAvatar slot="start">
          <IonImg src="/assets/images/ChessPieces/white-Pawn.png"/>
        </IonAvatar>
        <IonLabel>
          White
        </IonLabel>
        <IonSelect interface="alert" slot="end" placeholder={"Player..."} onIonChange={(e: any) => {
          setWhitePlayer(e.detail.value);
          let ready: boolean = readyToStart(e.detail.value, blackPlayer);
          if (e.detail.value === playerTwo) {setPlayerTwoColor("w");}
          setDisableStart(ready);
        }}>
          <IonSelectOption value={playerOne}>{playerOne}</IonSelectOption>
          <IonSelectOption value={playerTwo}>{playerTwo}</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem lines="none">
        <IonAvatar slot="start">
          <IonImg src="/assets/images/ChessPieces/black-Pawn.png"/>
        </IonAvatar>
        <IonLabel>
          Black
        </IonLabel>
        <IonSelect interface="alert" slot="end" placeholder={"Player..."} onIonChange={(e: any) => {
          setBlackPlayer(e.detail.value); 
          let ready: boolean = readyToStart(whitePlayer, e.detail.value);
          if (e.detail.value === playerTwo) {setPlayerTwoColor("b");}
          setDisableStart(ready);
        }}>
          <IonSelectOption value={playerOne}>{playerOne}</IonSelectOption>
          <IonSelectOption value={playerTwo}>{playerTwo}</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonCard>
  );
};

export default GameSettings;