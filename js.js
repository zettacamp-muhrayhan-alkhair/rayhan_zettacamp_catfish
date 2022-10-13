//get random value from array
var colors = ['red', 'blue', 'green', 'yellow', 1, 2, 3, 4, 5, 6, 7, 8];
var randColor = [];
console.log(randColor);

for (let i = 0; i < colors.length; i++) {
  randColor.push(colors[Math.floor(Math.random() * colors.length)]);
}
console.log(randColor);

console.log(Math.random());
