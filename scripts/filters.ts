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

filters['colori 10'] = function (canvas: HTMLCanvasElement): void {
    let
        w = canvas.width,
        h = canvas.height,
        context = canvas.getContext('2d'),
        img = context.getImageData(0, 0, w, h),
        pixels = img.data,
        i = 0;

    for (i; i<pixels.length; i+=4) {
        let min = Math.min(pixels[i], pixels[i+1], pixels[i+2]);
        pixels[i] = pixels[i+1] = min * 4;
        pixels[i+2] = Math.min(255, min * 6);
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

filters['quadrati 3'] = function (canvas: HTMLCanvasElement): void {
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
            context.rect(x, y, side, side + side * Math.random());
            context.fillStyle = pixelToHex(pixels[index], pixels[index+1], pixels[index+2]);
            context.fill();
            context.closePath();

        }
};

filters['quadrati 4'] = function (canvas: HTMLCanvasElement): void {
    let
        w = canvas.width,
        h = canvas.height,
        magicNumber = w / 80,
        x,
        y,
        i,
        index,
        context = canvas.getContext('2d'),
        img = context.getImageData(0, 0, w, h),
        pixels = img.data,
        limit = 30,
        diffR,
        diffG,
        diffB,
        nextIndex,
        minNext,
        avgDiff,
        side,
        squares = [],
        step = 50;

    for (x = 0; x < w; x += magicNumber)
        for (y = 0; y < h; y += magicNumber) {
            if (x + step > w)
                continue;

            index = getIndex(Math.floor(x), Math.floor(y), w);
            nextIndex = getIndex(Math.floor(x) + step, Math.floor(y), w);
            diffR = Math.abs(pixels[index] - pixels[nextIndex]);
            diffG = Math.abs(pixels[index+1] - pixels[nextIndex+1]);
            diffB = Math.abs(pixels[index+2] - pixels[nextIndex+2]);
            minNext = Math.min(pixels[nextIndex], pixels[nextIndex+1], pixels[nextIndex+2]);
            avgDiff = avg([diffB, diffG, diffR]);


            if (avgDiff > limit) {
                squares.push({
                    x: Math.floor(x),
                    y: Math.floor(y),
                    color: pixelToHex(diffR *3, diffG *2, diffB *2)
                })
            }
        }

    for (i=0; i<pixels.length; i+=4) {
        pixels[i] = pixels[i+1] = pixels[i+2] = pixels[i+3] = 255;
    }

    console.log(squares);

    context.putImageData(img, 0, 0);

    for(i=0; i<squares.length; i++) {
        side = magicNumber * 2 * Math.random();
        context.beginPath();
        context.rect(squares[i].x, squares[i].y, side, side);
        context.fillStyle = squares[i].color;
        context.fill();
        context.closePath();
    }
};

filters['cerchi 1'] = function(canvas: HTMLCanvasElement): void {
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
        radius;


    for (x = 0; x <= w; x += magicNumber)
        for (y = 0; y <= h; y += magicNumber) {
            index = getIndex(Math.floor(x), Math.floor(y), w);
            radius = magicNumber * 2 * Math.random();
            context.beginPath();
            context.arc(x, y, radius, 0, 2 * Math.PI, false);
            context.fillStyle = pixelToHex(pixels[index], pixels[index+1], pixels[index+2]);
            context.fill();
            context.closePath();
        }
};

filters['cerchi 2'] = function(canvas: HTMLCanvasElement): void {
    let
        w = canvas.width,
        h = canvas.height,
        iter = 10000,
        radius = 150,
        x,
        y,
        cont,
        index,
        context = canvas.getContext('2d'),
        img = context.getImageData(0, 0, w, h),
        pixels = img.data;


    for (cont = 0; cont <= iter; cont++) {
        x = Math.random() * w;
        y = Math.random() * h;
        index = getIndex(Math.floor(x), Math.floor(y), w);
        context.beginPath();
        context.arc(x, y, radius * Math.random(), 0, 2 * Math.PI, false);
        context.fillStyle = pixelToHex(pixels[index], pixels[index+1], pixels[index+2]);
        context.fill();
        context.closePath();
    }
};

filters['linee 1'] = function(canvas: HTMLCanvasElement): void {
    let
        w = canvas.width,
        h = canvas.height,
        context = canvas.getContext('2d'),
        img = context.getImageData(0, 0, w, h),
        pixels = img.data,
        index,
        newX,
        newY,
        magicNumber = w / 300,
        x,
        y,
        addX = magicNumber * 20,
        diffY = magicNumber * 20,
        color = '#00ff00';

    for (x = 0; x <= w; x += magicNumber)
        for (y = 0; y <= h; y += magicNumber) {
            newX = x + Math.floor(addX * Math.random());
            newY = y - Math.floor(diffY * Math.random());
            if (newX < w && newY >= 0) {
                index = getIndex(Math.floor(x), Math.floor(y), w);
                color = pixelToHex(pixels[index], pixels[index+1], pixels[index+2]);
                context.beginPath();
                context.strokeStyle = color;
                context.lineWidth = 5;
                context.moveTo(x, y);
                context.lineTo(newX, newY);
                context.stroke();
                context.closePath();
            }
        }
};

filters['linee 2'] = function(canvas: HTMLCanvasElement): void {
    let
        w = canvas.width,
        h = canvas.height,
        context = canvas.getContext('2d'),
        img = context.getImageData(0, 0, w, h),
        pixels = img.data,
        index,
        newX,
        newY,
        magicNumber = w / 200,
        x,
        y,
        addX = magicNumber * 2,
        diffY = magicNumber * 2,
        color;

    for (x = 0; x <= w; x += magicNumber)
        for (y = 0; y <= h; y += magicNumber) {
            newX = x + Math.floor(addX * Math.random());
            newY = y - Math.floor(diffY * Math.random());
            if (newX < w && newY >= 0) {
                index = getIndex(Math.floor(x), Math.floor(y), w);
                color = pixelToHex(pixels[index], pixels[index+1], pixels[index+2]);
                context.beginPath();
                context.strokeStyle = color;
                context.lineWidth = 50;
                context.moveTo(x, y);
                context.lineTo(newX, newY);
                context.stroke();
                context.closePath();
            }
        }
};


/*filters['linee 3'] = function(canvas: HTMLCanvasElement): void {
    let
        w = canvas.width,
        h = canvas.height,
        context = canvas.getContext('2d'),
        img = context.getImageData(0, 0, w, h),
        pixels = img.data,
        index,
        newX,
        newY,
        magicNumber = w / 300,
        x,
        y,
        fixedX = Math.floor(w / 2),
        fixedY = Math.floor(h / 3),
        color = '#00ff00';

    for (x = 0; x <= w; x += magicNumber)
        for (y = 0; y <= h; y += magicNumber) {


            newX = x + Math.floor((x + fixedX) * Math.random());
            newY = y - Math.floor((y + fixedY) * Math.random());


            if (newX < w && newY >= 0) {
                index = getIndex(Math.floor(x), Math.floor(y), w);
                color = pixelToHex(pixels[index], pixels[index+1], pixels[index+2]);
                context.beginPath();
                context.strokeStyle = color;
                context.lineWidth = 5;
                context.moveTo(x, y);
                context.lineTo(newX, newY);
                context.stroke();
                context.closePath();
            }
        }
};*/

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
