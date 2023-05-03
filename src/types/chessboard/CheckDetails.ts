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

export type CheckAllowMove = {
  board: any[][];
  allowMove: boolean;
  checkMate: boolean;
};

export type LookupKings = {
  ownKing: any;
  opponentKing: any;
}