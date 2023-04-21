// Importing required library's
import React from 'react';
import './Square.css';

// Props that fetch the data being passed from the source call and passes the data into the component
interface MenuOptionProps {
  piece: any;
}

// React function that setups the JSX component to...
const Square: React.FC<MenuOptionProps> = ({ piece }) => {
  // JSX code for...
  return (
    <div>
      {piece && (
        <img
          src={`/assets/images/ChessPieces/${piece.color}-${piece.type}.png`}
          className='square-piece'
          alt={`${piece.color} ${piece.type}`}
        />
      )}
    </div>
  );
};

export default Square;