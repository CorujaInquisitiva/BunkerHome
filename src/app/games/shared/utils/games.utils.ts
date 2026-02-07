export class Posicao {
  top: number;
  left: number;
  height?: number;
  minHeight?: number;

  constructor(top: number, left: number, height?: number, minHeight?: number) {
    this.top = top;
    this.left = left;
    this.height = height;
    this.minHeight = minHeight;
  }
}
