// Importing required library's
import './Board.css';

// Importing...
import Square from './Square';
import { IonCard, IonCol, IonGrid, IonRow } from '@ionic/react';

// TODO Finish writing comments here and on Square component

// Props that fetch the data being passed from the source call and passes the data into the component
interface MenuOptionProps {
  board: any[][];
  locked: boolean;
  onSquareClick: (square: any) => void;
}

// React function that setups the JSX component to...
const ChessBoard: React.FC<MenuOptionProps> = ({ board, locked, onSquareClick }) => {

  // JSX code for...
  return (
    <IonCard disabled={locked}>
      <IonGrid fixed={true}>
        {board.map((row, rowIndex) => (
          <IonRow key={rowIndex}>
            {row.map((square, colIndex) => (
              <IonCol style={{backgroundColor: `${square.color}`}} key={`${rowIndex}-${colIndex}`} onClick={() => {
                onSquareClick(square);
              }}>
                <Square
                  piece={square.piece}
                />
              </IonCol>
            ))}
          </IonRow>
        ))}
      </IonGrid>
    </IonCard>
  );
};

export default ChessBoard;