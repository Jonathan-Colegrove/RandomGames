// Your Age in Days
function ageInDays() {
  var birthYear = prompt("What year were you born in?");
  var days = ((new Date().getFullYear()) - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode("You are " + days + " days old")
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

// Cat generator
function generateCat() {
  var image = document.createElement('img');
  var div = document.getElementById('flex-cat-gen');
  image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
  div.appendChild(image);
}

// Rock Paper Scissors
function rpsGame(yourChoice) {
  var humanChoice, botChoice;
  // humanChoice = yourChoice.id
  // botChoice = numberToChoice(randToRpsInt());
  // results = decideWinner(humanChoice, botChoice); // [0,1] human lost | bot won
  // message = finalMessage(results); {message: 'You won!', 'color': 'green'}
  // rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ['rock', 'paper', 'scissors'][number];
}

// left off 3:20:00 in video
