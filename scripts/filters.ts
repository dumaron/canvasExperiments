var filters = {};

filters['scala di grigi 1'] = function (canvas: HTMLCanvasElement): void {
    let
        w = canvas.width,
        h = canvas.height,
        context = canvas.getContext('2d'),
        img = context.getImageData(0, 0, w, h),
        pixels = img.data,
        i = 0;

    for (i; i<pixels.length; i+=4) {
        let max = Math.max(pixels[i], pixels[i+1], pixels[i+2]);
        pixels[i] = pixels[i+1] = pixels[i+2] = max;
    }

    context.putImageData(img, 0, 0);
};

filters['scala di grigi 2'] = function (canvas: HTMLCanvasElement): void {
    let
        w = canvas.width,
        h = canvas.height,
        context = canvas.getContext('2d'),
        img = context.getImageData(0, 0, w, h),
        pixels = img.data,
        i = 0;

    for (i; i<pixels.length; i+=4) {
        let min = Math.min(pixels[i], pixels[i+1], pixels[i+2]);
        pixels[i] = pixels[i+1] = pixels[i+2] = min;
    }

    context.putImageData(img, 0, 0);
};

filters['scala di grigi 3'] = function (canvas: HTMLCanvasElement): void {
    let
        w = canvas.width,
        h = canvas.height,
        context = canvas.getContext('2d'),
        img = context.getImageData(0, 0, w, h),
        pixels = img.data,
        i = 0;

    for (i; i<pixels.length; i+=4) {
        let min = Math.min(pixels[i], pixels[i+1], pixels[i+2]);
        pixels[i] = pixels[i+1] = pixels[i+2] = min * 5;
    }

    context.putImageData(img, 0, 0);
};

filters['scala di grigi 4'] = function (canvas: HTMLCanvasElement): void {
    let
        w = canvas.width,
        h = canvas.height,
        context = canvas.getContext('2d'),
        img = context.getImageData(0, 0, w, h),
        pixels = img.data,
        i = 0;

    for (i; i<pixels.length; i+=4) {
        let min = Math.min(pixels[i], pixels[i+1], pixels[i+2]);
        min = min * (1 + min) / 256;
        pixels[i] = pixels[i+1] = pixels[i+2] = min;
    }

    context.putImageData(img, 0, 0);
};

filters['colori 1'] = function (canvas: HTMLCanvasElement): void {
    let
        w = canvas.width,
        h = canvas.height,
        context = canvas.getContext('2d'),
        img = context.getImageData(0, 0, w, h),
        pixels = img.data,
        i = 0;

    for (i; i<pixels.length; i+=4) {
        let min = Math.min(pixels[i], pixels[i+1], pixels[i+2]);
        pixels[i+1] = pixels[i+2] = min;
        pixels[i] = min > 128 ? 200 : min;
    }

    context.putImageData(img, 0, 0);
};

filters['colori 2'] = function (canvas: HTMLCanvasElement): void {
    let
        w = canvas.width,
        h = canvas.height,
        context = canvas.getContext('2d'),
        img = context.getImageData(0, 0, w, h),
        pixels = img.data,
        i = 0;

    for (i; i<pixels.length; i+=4) {
        pixels[i] = Math.max(pixels[i], pixels[i + 1], pixels[i + 2]);
    }

    context.putImageData(img, 0, 0);
};

filters['colori 3'] = function (canvas: HTMLCanvasElement): void {
    let
        w = canvas.width,
        h = canvas.height,
        context = canvas.getContext('2d'),
        img = context.getImageData(0, 0, w, h),
        pixels = img.data,
        i = 0,
        c = 1.4,
        limit = 160;

    for (i; i<pixels.length; i+=4) {
        let min = Math.min(pixels[i], pixels[i+1], pixels[i+2]);
        pixels[i+1] = pixels[i+2] = min;
        pixels[i] = pixels[i] > limit ? (min * c) : min;
    }

    context.putImageData(img, 0, 0);
};

filters['colori 4'] = function (canvas: HTMLCanvasElement): void {
    let
        w = canvas.width,
        h = canvas.height,
        context = canvas.getContext('2d'),
        img = context.getImageData(0, 0, w, h),
        pixels = img.data,
        i = 0;

    for (i; i<pixels.length; i+=4) {
        pixels[i] *= 1.4;
    }

    context.putImageData(img, 0, 0);
};

filters['colori 5'] = function (canvas: HTMLCanvasElement): void {
    let
        w = canvas.width,
        h = canvas.height,
        context = canvas.getContext('2d'),
        img = context.getImageData(0, 0, w, h),
        pixels = img.data,
        i = 0;

    for (i; i<pixels.length; i+=4) {
        let distance = ((pixels[i] - pixels[i + 1]) + (pixels[i] - pixels[i + 2])) / 2;
        pixels[i] *= distance > 20 ? 1.1 : .9;
    }

    context.putImageData(img, 0, 0);
};

filters['colori 6'] = function (canvas: HTMLCanvasElement): void {
    let
        w = canvas.width,
        h = canvas.height,
        context = canvas.getContext('2d'),
        img = context.getImageData(0, 0, w, h),
        pixels = img.data,
        i = 0;

    for (i; i<pixels.length; i+=4) {
        let distance = ((pixels[i] - pixels[i + 1]) + (pixels[i] - pixels[i + 2])) / 2;
        pixels[i] += distance * .6;
    }

    context.putImageData(img, 0, 0);
};

filters['colori 7'] = function (canvas: HTMLCanvasElement): void {
    let
        w = canvas.width,
        h = canvas.height,
        context = canvas.getContext('2d'),
        img = context.getImageData(0, 0, w, h),
        pixels = img.data,
        i = 0;

    for (i; i<pixels.length; i+=4) {
        pixels[i] = 255;
        pixels[i+1] = 0;
    }

    context.putImageData(img, 0, 0);
};

filters['colori 8'] = function (canvas: HTMLCanvasElement): void {
    let
        w = canvas.width,
        h = canvas.height,
        context = canvas.getContext('2d'),
        img = context.getImageData(0, 0, w, h),
        pixels = img.data,
        i = 0;

    for (i; i<pixels.length; i+=4) {
        let min = Math.min(pixels[i], pixels[i+1], pixels[i+2]);
        pixels[i+1] = pixels[i+2] = min;
        pixels[i] += Math.log(min*2);
    }

    context.putImageData(img, 0, 0);
};

filters['colori 9'] = function (canvas: HTMLCanvasElement): void {
    let
        w = canvas.width,
        h = canvas.height,
        context = canvas.getContext('2d'),
        img = context.getImageData(0, 0, w, h),
        pixels = img.data,
        i = 0;

    for (i; i<pixels.length; i+=4) {
        let distance = ((pixels[i] - pixels[i + 1]) + (pixels[i] - pixels[i + 2])) / 2;
        pixels[i] += distance * 1.4;
        pixels[i+1] += distance * .9;
    }

    context.putImageData(img, 0, 0);
};

filters['sfocatura 1'] = function (canvas: HTMLCanvasElement): void {
    let
        w = canvas.width,
        h = canvas.height,
        context = canvas.getContext('2d'),
        img = context.getImageData(0, 0, w, h),
        pixels = img.data,
        tempPixels = context.getImageData(0, 0, w, h).data,
        i = 0,
        j = 0,
        r, g, b,
        interval = 5;

    for (i; i<pixels.length; i+=4) {
        r = [];
        g = [];
        b = [];

        for (j = -interval; j <= interval; j++) {
            r.push(tempPixels[i + j * 4]);
            g.push(tempPixels[i + 1 + j * 4]);
            b.push(tempPixels[i + 2 + j * 4]);
        }

        pixels[i] = avg(r);
        pixels[i+1] = avg(g);
        pixels[i+2] = avg(b);
    }

    context.putImageData(img, 0, 0);
};

filters['sfocatura 2'] = function (canvas: HTMLCanvasElement): void {
    let
        w = canvas.width,
        h = canvas.height,
        context = canvas.getContext('2d'),
        img = context.getImageData(0, 0, w, h),
        pixels = img.data,
        tempPixels = context.getImageData(0, 0, w, h).data,
        i = 0,
        j = 0,
        r, g, b,
        intervalX = 5,
        intervalY = 5;

    for (i; i<pixels.length; i+=4) {
        r = [];
        g = [];
        b = [];

        for (j = -intervalX; j <= intervalX; j++) {
            r.push(tempPixels[i + j * 4]);
            g.push(tempPixels[i + 1 + j * 4]);
            b.push(tempPixels[i + 2 + j * 4]);
        }

        for (j = -intervalY; j <= intervalY; j++) {
            r.push(tempPixels[i + (j * 4 * w)]);
            g.push(tempPixels[i + 1 + (j * 4 * w)]);
            b.push(tempPixels[i + 2 + (j * 4 * w)]);
        }

        pixels[i] = avg(r);
        pixels[i+1] = avg(g);
        pixels[i+2] = avg(b);
    }

    context.putImageData(img, 0, 0);
};

filters['quadrati 1'] = function (canvas: HTMLCanvasElement): void {
    let
        w = canvas.width,
        h = canvas.height,
        magicNumber = w / 40,
        x,
        y,
        index,
        context = canvas.getContext('2d'),
        img = context.getImageData(0, 0, w, h),
        pixels = img.data;


    for (x = 0; x <= w; x += magicNumber)
        for (y = 0; y <= h; y += magicNumber) {
            index = getIndex(Math.floor(x), Math.floor(y), w);
            context.beginPath();
            context.rect(x, y, magicNumber, magicNumber);
            context.fillStyle = pixelToHex(pixels[index], pixels[index+1], pixels[index+2]);
            context.fill();
            context.closePath();

        }

};

filters['quadrati 2'] = function (canvas: HTMLCanvasElement): void {
    let
        w = canvas.width,
        h = canvas.height,
        magicNumber = w / 40,
        x,
        y,
        index,
        context = canvas.getContext('2d'),
        img = context.getImageData(0, 0, w, h),
        pixels = img.data,
        side;


    for (x = 0; x <= w; x += magicNumber)
        for (y = 0; y <= h; y += magicNumber) {
            index = getIndex(Math.floor(x), Math.floor(y), w);
            side = magicNumber * 4 * Math.random();
            context.beginPath();
            context.rect(x, y, side, side);
            context.fillStyle = pixelToHex(pixels[index], pixels[index+1], pixels[index+2]);
            context.fill();
            context.closePath();

        }

};

function getFilters() {
    return filters;
}

// util
function avg(nums:Array<number>):number {
    let total = 0, cont;

    for (cont = 0; cont < nums.length; cont++)
        total += nums[cont];

    return total / nums.length;
}

function getIndex(x: number, y: number, width: number): number {
    return x * 4 + y * 4 * width;
}

function getCoords(index: number, rowLength: number): {x:number, y:number} {
    return {
        y: Math.floor(index / rowLength),
        x: index % rowLength
    };
}

function pixelToHex(r: number, g: number, b: number) {
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}
