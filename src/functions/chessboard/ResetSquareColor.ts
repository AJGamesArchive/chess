export function resetSquareColor (lightColor: string, darkColor: string, square: any): string {
  const isLightSquare: boolean = (square.row + square.col) % 2 === 0;
  const color: string = isLightSquare ? lightColor : darkColor;
  return color;
}