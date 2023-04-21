// Importing required library's
import React from 'react';
import './Square.css';
import { IonCol } from '@ionic/react';

// Props that fetch the data being passed from the source call and passes the data into the component
interface MenuOptionProps {
  row: number;
  col: number;
  color: string;
  piece: any;
}

// React function that setups the JSX component to...
const Square: React.FC<MenuOptionProps> = ({ row, col, color, piece }) => {
  // Variable that...
  const classNames: string = `square-${color}`;
  // JSX code for...
  return (
    <IonCol size="3" className={classNames}>
      {piece && (
        <img
          src={`path/to/${piece.color}-${piece.type}.png`}
          alt={`${piece.color} ${piece.type}`}
        />
      )}
    </IonCol>
  );
};

export default Square;