class Color {
  constructor(
    public r=0,
    public g=0,
    public b=0,
    public a=0) {
  };
}

class Pixel {
  constructor(
    public fill: Color,
    public x=0,
    public y=0) {
  };
}

class SuperCanvas {
  public canvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;

  private colorToHex = function colorToHex(c: Color): string {
    return '#' + c.r.toString(16) + c.g.toString(16) + c.b.toString(16);
  };

  constructor(canvas:HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
  };

  getPixels(): Array<Pixel> {
    var w = this.canvas.width, h = this.canvas.height;
    var imgData = this.context.getImageData(0, 0, w, h).data;
    var numPixel = imgData.length / 4;
    var pixels: Pixel[] = [];
    var cont: number = 0;
    let c;

    for (c = 0; c<numPixel; c++)
      pixels.push(new Pixel(
        new Color(
          imgData[cont++],
          imgData[cont++],
          imgData[cont++],
          imgData[cont++]),
        c % w,
        Math.floor(c / w)
      ));

    return pixels;
  };

  getPixelColor(x: number, y: number): Color {
    if (x >= 0 && y >= 0 && x < this.canvas.width && y < this.canvas.height) {
      let p = this.context.getImageData(x, y, 1, 1).data;
      return new Color(p[0], p[1], p[2], p[3]);
    }
  };

  drawPixel(p: Pixel):boolean {
    var pxData: ImageData = this.context.createImageData(1, 1);
    pxData.data[0] = p.fill.r;
    pxData.data[1] = p.fill.g;
    pxData.data[2] = p.fill.b;
    pxData.data[3] = p.fill.a;
    this.context.putImageData(pxData, p.x, p.y);
    return true;
  };

  drawRect(fill: Color, startX=0, startY=0, width: number, length: number): void {
    var ctx = this.context;
    ctx.fillStyle = this.colorToHex(fill);
    ctx.fillRect(startX, startY, width, length);
  };
}
