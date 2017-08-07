// References
// https://www.youtube.com/watch?v=NGMRB4O922I
// https://www.youtube.com/watch?v=6z7GQewK-Kss

function setup() {
    createCanvas(600, 600)
    pixelDensity(1)
    loadPixels()
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {

            const c_a = map(x, 0, width, -2, 2)
            const c_b = map(y, 0, height, -2, 2)
            
            let a = c_a
            let b = c_b
            let n = 0
            let color = 0;

            const index = (x + y * width) * 4
            while (n < 21) {
                var aa = a**2 - b**2 + c_a
                var bb = 2 * a * b + c_b
                a = aa
                b = bb
                n++
            }
            if (Math.sqrt(a**2 + b**2) > 2) {
                color = 255
            }
            pixels[index + 0] = color
            pixels[index + 1] = color
            pixels[index + 2] = color
            pixels[index + 3] = 255
        }
    }
    updatePixels()
}

function draw() {
    noLoop()
}