import { Piece } from "./Piece";

export type GameControl = {
  board: any[][];
  switchTurn: boolean;
  lockBoard: boolean;
  whiteTaken: Piece[][];
  blackTaken: Piece[][];
  invalidMove: boolean;
  check: boolean;
  checkMate: boolean;
};