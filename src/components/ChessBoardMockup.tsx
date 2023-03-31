import React from 'react';
import Chessboard from 'chessboardjsx';
import './ChessBoardMockup.css';

interface Props {
  position: string;
  onDrop: (sourceSquare: string, targetSquare: string) => void;
  width: number;
}

const ChessBoard: React.FC<Props> = ({ position, onDrop, width }) => {
  return (
    <Chessboard
      position={position}
      width={width}
      onDrop={(move) => {
        const sourceSquare = move.sourceSquare;
        const targetSquare = move.targetSquare;
        onDrop(sourceSquare, targetSquare);
      }}
    />
  );
};

export default ChessBoard;