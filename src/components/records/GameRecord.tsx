// Importing required library's
import { IonCard, IonCardContent, IonCardTitle, IonItem, IonLabel, } from '@ionic/react';
import React from 'react';
import './GameRecord.css';

//TODO Add comments to this component at some point

interface GameRecordProps {
  gameId : string 
  winner : string
  timeStamp: string
  plyOneName : string
  plyTwoName : string
  plyOneColor : string
  plyTwoColor : string
  blackPiecesTaken : number
  whitePiecesTaken : number
}

const Win: string = 'Win';
var winLoseColour: string = (Win === 'Win') ? 'success' : 'danger'


const GameRecord: React.FC<GameRecordProps> = ({ gameId, winner, timeStamp, plyOneName, plyTwoName, plyOneColor, plyTwoColor, blackPiecesTaken, whitePiecesTaken }) => {
  // const storeArray = (typeof gameHistory === 'string') ? 'string' : 'any'
  // const records: any[] = (Array.isArray(gameHistory)) ? gameHistory : []
  // console.log(records)
  // if (storeArray === 'string'){
  //   return (
  //     <IonList hidden={hiddenRecords}>
  //       {records.map(element => (
  //         <IonCard key = {element.id}>
  //         <IonItem lines = 'full'>
  //         <IonCardTitle>
  //           {element.id} 
  //         </IonCardTitle>
  //         <IonCardTitle slot = 'end' color = {winLoseColour}>
  //           Winner: {element.winner}
  //         </IonCardTitle>
  //         </IonItem>
          
  //         <IonItem lines = 'none'>
  //           <IonCardContent slot = 'end'>
  //             {element.timestamp}
  //           </IonCardContent>
  //         </IonItem>

  //         <IonItem lines = 'none'>
  //           <IonLabel slot = 'end'>
  //           Player One: {element.plyOneName}
  //           </IonLabel>
  //           <IonLabel >
  //           Player Two: {element.plyTwoName}
  //           </IonLabel>
  //         </IonItem >

  //         <IonItem lines = 'none'>
  //         <IonLabel>
  //           Player One: {element.plyOneColor}
  //         </IonLabel>
  //         <IonLabel slot = 'end'>
  //          Player Two: {element.plyTwoColor}
  //         </IonLabel>
  //         </IonItem>

  //         <IonItem lines='none' >
  //           <IonLabel>
  //            White Pieces Taken: {element.blackPiecesTaken}
  //           </IonLabel>
  //           <IonLabel slot = 'end'>
  //           Black Pieces Taken: {element.whitePiecesTaken}
  //           </IonLabel>
  //         </IonItem>
          

    
  //       </IonCard>
  //       ))}
  //     </IonList>
  //   );

  // } else{
  //   return (
  //     <IonCard hidden={hiddenRecords}>
  //       {gameHistory}
  //     </IonCard>
  //   )
  // }

  return (
    <IonCard>
    <IonItem lines = 'full'>
    <IonCardTitle>
      {gameId} 
    </IonCardTitle>
    <IonCardTitle slot = 'end' color = {winLoseColour}>
      Winner: {winner}
    </IonCardTitle>
    </IonItem>
    
    <IonItem lines = 'none'>
      <IonCardContent slot = 'end'>
        {timeStamp}
      </IonCardContent>
    </IonItem>

    <IonItem lines = 'none'>
      <IonLabel >
      Player One: {plyOneName}
      </IonLabel>
      <IonLabel slot = 'end'>
      Player Two: {plyTwoName}
      </IonLabel>
    </IonItem >

    <IonItem lines = 'none'>
    <IonLabel>
      Player One: {plyOneColor}
    </IonLabel>
    <IonLabel slot = 'end'>
      Player Two: {plyTwoColor}
    </IonLabel>
    </IonItem>

    <IonItem lines='none' >
      <IonLabel>
        White Pieces Taken: {blackPiecesTaken}
      </IonLabel>
      <IonLabel slot = 'end'>
      Black Pieces Taken: {whitePiecesTaken}
      </IonLabel>
    </IonItem>
  </IonCard>
  );
  
};

export default GameRecord;