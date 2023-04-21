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
    <IonGrid>
      {board.map((row, rowIndex) => (
        <IonRow key={rowIndex}>
          {row.map((square, colIndex) => (
            <IonCol key={`${rowIndex}-${colIndex}`} size="3">
              <Square
                row={rowIndex}
                col={colIndex}
                color={square.color}
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