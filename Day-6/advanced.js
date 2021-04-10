// Day 6: Advanced Mission

// Area of a triangle when you know the lengths of all 3 sides

const triangleArea = (length, width, height) => {
  const p = (length + width + height) / 2;
  const area = Math.sqrt(p * (p - length) * (p - width) * (p - height));
  return console.log(`The area of the triangle is ${area}`);
};

triangleArea(125, 81, 74);
