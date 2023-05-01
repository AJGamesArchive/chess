// Importing required library's
import './DisplayBoard.css';

// Importing...
import Square from './Square';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

// TODO Finish writing comments here and on Square component

// Props that fetch the data being passed from the source call and passes the data into the component
interface DisplayBoardProps {
  pieces: any[][];
  hidden: boolean;
}

// React function that setups the JSX component to...
const DisplayBoard: React.FC<DisplayBoardProps> = ({ pieces, hidden }) => {

  // JSX code for...
  return (
    <IonGrid fixed={true} hidden={hidden}>
      {pieces.map((row, rowIndex) => (
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

export default DisplayBoard;