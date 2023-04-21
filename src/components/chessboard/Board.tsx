// Importing required library's
import React from 'react';
import './Board.css';

// Importing...
import Square from './Square';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

// Props that fetch the data being passed from the source call and passes the data into the component
interface MenuOptionProps {
  board: any[][];
}

// React function that setups the JSX component to...
const ChessBoard: React.FC<MenuOptionProps> = ({ board }) => {
  // JSX code for...
  return (
    <IonGrid fixed={true}>
      {board.map((row, rowIndex) => (
        <IonRow key={rowIndex}>
          {row.map((square, colIndex) => (
            <IonCol style={{backgroundColor: `${square.color}`}} key={`${rowIndex}-${colIndex}`}>
              <Square
                piece={square.piece}
              />
            </IonCol>
          ))}
        </IonRow>
      ))}
    </IonGrid>
  );
};

export default ChessBoard;