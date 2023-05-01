// Importing required library's
import { IonAvatar, IonCard, IonCardTitle, IonIcon, IonImg, IonItem } from '@ionic/react';
import React, { useState } from 'react';
import './PlayerCard.css';

// Importing Types
import { Piece } from '../../types/chessboard/Piece';

// Importing Components
import DisplayBoard from './DisplayBoard';
import { chevronDown, chevronUp } from 'ionicons/icons';

// Props that fetch the data being passed from the source call and passes the data into the component
interface PlayerCardProps {
  cardImage: string;
  playerName: string;
  turnIcon: any;
  turnIconClr: string;
  takenPieces: Piece[][];
};

// React function that setups the JSX component to be exported and passes data into the component
const PlayerCard: React.FC<PlayerCardProps> = ({ cardImage, playerName, turnIcon, turnIconClr, takenPieces }) => {
  
  // Declaring react variables to control whether or not the taken pieces section of the player card UI is hidden or not
  const [hiddenPieces, setHiddenPieces] = useState<boolean>(true);

  var piecesTakenBtn: any;
  var piecesTakenBtnClr: string;
  if (hiddenPieces === true) {
    piecesTakenBtn = chevronDown;
    piecesTakenBtnClr = turnIconClr;
  } else {
    piecesTakenBtn = chevronUp;
    piecesTakenBtnClr = 'warning';
  };
  
  // JSX code for generating the custom 'Player Card' UI component using passed in data
  return (
    <IonCard>
      <IonItem lines='none'>
        <IonAvatar slot='start'>
          <IonImg src={cardImage}/>
        </IonAvatar>
        <IonCardTitle slot="start" className='player-card-header'>
          {playerName}
        </IonCardTitle>
        <IonIcon slot='end' src={piecesTakenBtn} color={`${piecesTakenBtnClr}`} onClick={() => {
          if (hiddenPieces === true) {
            setHiddenPieces(false);
          } else {
            setHiddenPieces(true);
          }
        }} />
        <IonIcon slot='end' src={turnIcon} color={`${turnIconClr}`} />
      </IonItem>
      <DisplayBoard
        pieces={takenPieces}
        hidden={hiddenPieces}
      />
    </IonCard>
  );
};

export default PlayerCard;