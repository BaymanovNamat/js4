// very simple function
function callFriend(friendsName = "Bakyt") {
  console.log("Pick up the phone");
  console.log("Type in the number of " + friendsName);
  console.log("Press call");
  console.log("Wait for the answer");
}
// callFriend("Bakyt");
// callFriend("Akjol");
// callFriend("Seitek");

function calculateRectArea(a, b) {
  console.log(a * b);
}

// calculateRectArea(5, 10);
// calculateRectArea(10, 11);
// calculateRectArea(1, 0);

// function calculateCylinderVolume(r, h) {
//   return 3.14 * r * r * h;
// }
// var volume = calculateCylinderVolume(3, 4);
// console.log(volume);

function calculateCylinderVolume(r, h) {
  return 3.14 * r * r * h;
}
var smallGlassVol = calculateCylinderVolume(3, 4);
var bottleVol = calculateCylinderVolume(3, 10);

// console.log(smallGlassVol);
// console.log(bottleVol);

// document.write("Hello!");
// document.write("World<br>");
// document.write("Bye world!");
// document.writeln("Goodbye world!");

// document.writeln

// document.write("<h1>Hello world</h1>");

function countdown(number) { // i++ it is >>>  i = i + 1
  for (let i = number; i > 0; i--) {
    document.write(i + " ")
  }
  document.write("<br>");
}
// countdown(5);
// countdown(15);

// countdown(prompt("Enter the number!, 100"));

// document.write = Math.random();
// document.write(number * 100);


function randomColor() {
  var red = Math.random() * 255;
  var green = Math.random() * 255;
  var blue = Math.random() * 255;
  return `rgb(` + red + ` , ` + green + ` , ` + blue + `)`;
}
function colorfulText(text, color) {
  document.write(`<h1 style="color: ` + color + `;">` + text + `</h1>`);
}
var color = randomColor(); // red
colorfulText("Hello world", color);
colorfulText("Bye world", color);
