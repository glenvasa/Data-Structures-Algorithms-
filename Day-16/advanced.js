// Day 16 Advanced Mission: RGB

// Part 1:  Create a function that takes three integer parameters between 0 and 255.  

// These three numbers will represent the red, green, and blue channel values  of any given color.
// You are to return the hex string for that color. Example: 255, 99, 71 would return #FF6347

// Part 2:  Write code that ensures the numbers passed in are between 0-255, otherwise throw an error.
const hexString = (r,g,b) => {
    if(r > 255 || r< 0 || g > 255 || g < 0 || b > 255 || b < 0){
        console.log('Each argument must be an integer between 0 and 255');
        return
    }
    r = r.toString(16)
    g = g.toString(16)
    b = b.toString(16)

    if(r.length === 1){ r = `0${r}`}
    if(g.length === 1){ g = `0${g}`}
    if(b.length === 1){ b = `0${b}`}

    return console.log(`#${r}${g}${b}`)
}

hexString(255, 99, 71)
hexString(44, 222,55);
hexString(100, 4, 33);
hexString(17, 177, 1);
hexString(233, 32, 122);
hexString(256, 44, 4);
hexString(230, 75, -1)











