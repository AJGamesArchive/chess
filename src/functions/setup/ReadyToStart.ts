// Function to work out if the game is ready to start
export function readyToStart(whitePlayer: string, blackPlayer: string): boolean {
  if (whitePlayer === blackPlayer) {return true;}
  if (whitePlayer === "" || blackPlayer === "") {return true;}
  return false;
}