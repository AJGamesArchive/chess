export type CheckSquare = {
  row: number;
  col: number;
};

export type CheckDetails = {
  selfInCheck: boolean;
  opponentInCheck: boolean;
  colorInCheck: string;
  kingInCheckSquare: CheckSquare;
  puttingInCheckSquare: CheckSquare[];
};