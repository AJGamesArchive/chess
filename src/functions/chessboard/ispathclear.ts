

export function isPathClear(chessboard :any [][], sourceSquare: any, targetSquare: any): boolean {
    // Determine the direction of movement
    const dx = Math.sign(targetSquare.col - sourceSquare.col);
    const dy = Math.sign(targetSquare.row - sourceSquare.row);
  
    // Check each cell between the start and end positions
    for (let x: number = sourceSquare.col + dx, y: number = sourceSquare.row + dy; x !== targetSquare.col|| y !== targetSquare.row; x += dx, y += dy) {
      // console.log(chessboard[x][y])
      // console.log(chessboard[x][y].piece.type)
      if (chessboard[y][x].piece.type !== "Blank") {
        // A piece is in the way, so the path is not clear
        // console.log("Returning False")
        return false;
      }
    }
  
    // No pieces are in the way, so the path is clear
    // console.log("Returning True")
    return true;
  }