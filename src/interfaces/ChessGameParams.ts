// Declaring chess game paramaters
export interface ChessGameParams {
  mode: string;
  opponent: string;
  opponentColor: string;
};

// Declaring chess game setup paramaters
export interface ChessGameSetupParams {
  mode: string;
};

// Declaring chess game ending paramaters
export interface ChessGameEndingParams {
  winnerName: string;
  winnerColor: string;
  loserName: string;
  loserColor: string;
  numWhiteTaken: string;
  numBlackTaken: string;
  isDraw: string;
};