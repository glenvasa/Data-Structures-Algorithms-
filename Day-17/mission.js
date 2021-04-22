// Day 17 Mission Part 1: Simple Sorting



const simpleSort = (arr) => {
  arr = arr.sort((a, b) => {return a - b;});
  return arr;
};

console.log(`simpleSort:`, simpleSort([14, 2, 35, 16, 1, 12]))

// Part 2: Sorting From Scratch

const scratchSort = (arr) => {
  let sorted = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < sorted.length; j++) {
      if (arr[i] < sorted[0]) {
        sorted.unshift(arr[i]);
        break;
      } else if (arr[i] > sorted[sorted.length - 1]) {
        sorted.push(arr[i]);
        break;
      } else if (arr[i] < sorted[j]) {
        sorted.splice(j, 0, arr[i]);
        break;
      }
    }
  }

  return sorted
};

console.log(`scratchSort:`, scratchSort([14, 2, 35, 16, 1, 12]));
