var filters = {};

filters['scala di grigi 1'] = function(sCanvas: SuperCanvas): void {
  sCanvas.getPixels().forEach(pixel => {
    var max = Math.max(pixel.fill.r, pixel.fill.g, pixel.fill.b);
    pixel.fill.r = max;
    pixel.fill.g = max;
    pixel.fill.b = max;
    sCanvas.drawPixel(pixel);
  });
};

filters['scala di grigi 2'] = function(sCanvas: SuperCanvas): void {
  sCanvas.getPixels().forEach(pixel => {
    var min = Math.min(pixel.fill.r, pixel.fill.g, pixel.fill.b);
    pixel.fill.r = min;
    pixel.fill.g = min;
    pixel.fill.b = min;
    sCanvas.drawPixel(pixel);
  });
};

filters['scala di grigi 3'] = function(sCanvas: SuperCanvas): void {
  sCanvas.getPixels().forEach(pixel => {
    var min = Math.min(pixel.fill.r, pixel.fill.g, pixel.fill.b) * 5;
    pixel.fill.r = min;
    pixel.fill.g = min;
    pixel.fill.b = min;
    sCanvas.drawPixel(pixel);
  });
};

filters['scala di grigi 4'] = function(sCanvas: SuperCanvas): void {
  sCanvas.getPixels().forEach(pixel => {
    var min = Math.min(pixel.fill.r, pixel.fill.g, pixel.fill.b);
    min *= 1+min/256;
    pixel.fill.r = min;
    pixel.fill.g = min;
    pixel.fill.b = min;
    sCanvas.drawPixel(pixel);
  });
};

filters['colori 1'] = function(sCanvas: SuperCanvas): void {
  sCanvas.getPixels().forEach(pixel => {
    var min = Math.min(pixel.fill.r, pixel.fill.g, pixel.fill.b);
    pixel.fill.r = min > 128 ? 200 : min;
    pixel.fill.g = min;
    pixel.fill.b = min;
    sCanvas.drawPixel(pixel);
  });
};

filters['colori 2'] = function(sCanvas: SuperCanvas): void {
  sCanvas.getPixels().forEach(pixel => {
    pixel.fill.r = Math.max(pixel.fill.r, pixel.fill.g, pixel.fill.b);
    sCanvas.drawPixel(pixel);
  });
};

filters['colori 3'] = function(sCanvas: SuperCanvas): void {
  sCanvas.getPixels().forEach(pixel => {
    var min = Math.min(pixel.fill.r, pixel.fill.g, pixel.fill.b);
    var c = 1.4;
    var limit = 160;
    pixel.fill.r = pixel.fill.r > limit ? (min * c) : min;
    pixel.fill.g = min;
    pixel.fill.b = min;
    sCanvas.drawPixel(pixel);
  });
};

filters['colori 4'] = function(sCanvas: SuperCanvas): void {
  sCanvas.getPixels().forEach(pixel => {
    var c = 1.4;
    pixel.fill.r *= c;
    sCanvas.drawPixel(pixel);
  });
};

filters['colori 5'] = function(sCanvas: SuperCanvas): void {
  let w = sCanvas.canvas.width;

  // need to read and then write, otherwise it will read already written pixels
  let pixels = sCanvas.getPixels();
  let finalPixels: Pixel[] = [];

  pixels.forEach(pixel => {
    if (pixel.x > 0 && pixel.x < w) {
      let intervalX = 5;
      let colors: Color[] = [];
      let cont;

      for (cont = pixel.x -intervalX; cont <= pixel.x + intervalX; cont++) {
        let color = sCanvas.getPixelColor(cont, pixel.y);
        if (typeof color !== 'undefined') colors.push(color);
      }

      pixel.fill.r = avg(colors.map(c => c.r));
      pixel.fill.g = avg(colors.map(c => c.g));
      pixel.fill.b = avg(colors.map(c => c.b));
      finalPixels.push(pixel);
    }
  });

  finalPixels.forEach(pixel => sCanvas.drawPixel(pixel));
  // strange issue with "this"
  // finalPixels.forEach(sCanvas.drawPixel);
};

filters['quadrati 1'] = function(sCanvas: SuperCanvas): void {
  var pixels = sCanvas.getPixels();
  var w = sCanvas.canvas.width;
  var h = sCanvas.canvas.height;
  var magicNumber = w / 40;
  var tmp = Math.floor(magicNumber / 2);

  for (var x =0; x <= w; x+= magicNumber)
    for (var y =0; y <= h; y += magicNumber) {
      let c = sCanvas.getPixelColor(x, y);
      if (c)
        sCanvas.drawRect(c, x, y, magicNumber, magicNumber);
    }

};

function getFilters() {
  return filters;
}


// util
function maxColor(c: Color): string {
  var values = [ c.r, c.g , c.b];
  var names = ['r', 'g', 'b'];
  var max = Math.max.apply(values);
  return names[values.indexOf(max)];
}

function avg(nums:Array<number>): number {
  let total = 0, cont;

  for (cont =0; cont < nums.length; cont++)
    total += nums[cont];

  return total / nums.length;
}