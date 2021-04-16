// convert rgb to hex value

// function componentToHex(c) {
//     let hex = c.toString(16);
//     console.log(hex);
//     return hex.length == 1 ? "0" + hex : hex;
//   }


  function rgbToHex(r, g, b) {
    r > 255 ? r = 255 : r < 0 ? r = 0 : null
    g > 255 ? g = 255 : g < 0 ? g = 0 : null
    b > 255 ? b = 255 : b < 0 ? b = 0 : null
 let rHexValue = r.toString(16)
    let gHexValue = g.toString(16) 
    let bHexValue = b.toString(16)

    return `#${rHexValue.length == 1 ? "0" + rHexValue : rHexValue}${gHexValue.length == 1 ? "0" + gHexValue : gHexValue}${bHexValue.length == 1 ? "0" + bHexValue : bHexValue} `
  }
  
//   console.log(rgbToHex(0, 0, 0))

// Given a list lst and a number N, create a new list that contains each number of lst at most N times without 
// reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] 
// since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

function deleteNth(arr,n){ 
    for(let i=0; i<arr.length; i++){
        for(let j=0; )
    }
  }


deleteNth([1,2,3,1,2,1,2,3], 2)