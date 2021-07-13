"use strict";

var allSquares = document.querySelectorAll(".space");
var player1 = document.getElementById("O");
var player2 = document.getElementById("X");
var gameBoard = document.querySelector(".gameboard");
var newGame = document.querySelector(".restartbtn");
var matchTie = document.querySelector(".tie");
var currentPlayer = "O";
var currentWinner = document.querySelector(".newWinner");
var numOfClicks = 0;
var winner = false;
var winningCombinations = [[("A", "B", "C")], [("D", "E", "F")], [("G", "H", "I")], [("A", "D", "G")], [("B", "E", "H")], [("C", "F", "I")], [("A", "E", "I")], [("C", "E", "G")]]; // allSquares.addEventListener("click", function () {
// 	console.log("hit me!");
// });

allSquares = document.querySelectorAll(".space");

for (var i = 0; i < allSquares.length; i++) {
  var selection = allSquares[i];
  selection.addEventListener("click", clickTheBtn, {
    once: true
  });
} //display image on after making an array board:


function clickTheBtn(event) {
  var spaceArray = Array.from(allSquares);
  var findIndex = spaceArray.indexOf(event.target);
  numOfClicks++; // console.log(findIndex);

  if (currentPlayer === "playerZero") {
    allSquares[findIndex].innerText = "X";
    currentPlayer = "playerX";
  } else {
    allSquares[findIndex].innerText = "O";
    currentPlayer = "playerZero";
  }

  firstRow();
  secondRow();
  thirdRow();
  firstColumn();
  middleColumn();
  lastColumn();
  leftDiagonal();
  rightDiagonal();
  checkForDraw();
}

function firstRow() {
  var one = document.getElementById("A").innerText;
  var two = document.getElementById("B").innerText;
  var three = document.getElementById("C").innerText;
  console.log(one, two, three);

  if (one == two && two == three && one == three && one != '') {
    winner = true;
    currentWinner.innerText = "".concat(one, " player is the winner!");
    console.log(currentWinner);
  } else {}
}

function secondRow() {
  var one = document.getElementById("D").innerText;
  var two = document.getElementById("E").innerText;
  var three = document.getElementById("F").innerText;
  console.log(one, two, three);

  if (one == two && two == three && one == three && one != '') {
    winner = true;
    currentWinner.innerText = "".concat(one, " player is the winner!");
  }
}

function thirdRow() {
  var one = document.getElementById("G").innerText;
  var two = document.getElementById("H").innerText;
  var three = document.getElementById("I").innerText;
  console.log(one, two, three);

  if (one == two && two == three && one == three && one != '') {
    winner = true;
    currentWinner.innerText = "".concat(one, " player is the winner!");
  }
}

function firstColumn() {
  var one = document.getElementById("A").innerText;
  var two = document.getElementById("D").innerText;
  var three = document.getElementById("G").innerText;
  console.log(one, two, three);

  if (one == two && two == three && one == three && one != '') {
    winner = true;
    currentWinner.innerHTML = "".concat(one, " player is the winner!");
  }
}

function middleColumn() {
  var one = document.getElementById("B").innerText;
  var two = document.getElementById("E").innerText;
  var three = document.getElementById("H").innerText;
  console.log(one, two, three);

  if (one == two && two == three && one == three && one != '') {
    winner = true;
    currentWinner.innerHTML = "".concat(one, " player is the winner!");
  }
}

function lastColumn() {
  var one = document.getElementById("C").innerText;
  var two = document.getElementById("F").innerText;
  var three = document.getElementById("I").innerText;
  console.log(one, two, three);

  if (one == two && two == three && one == three && one != '') {
    winner = true;
    currentWinner.innerHTML = "".concat(one, " player is the winner!");
  }
}

function leftDiagonal() {
  var one = document.getElementById("A").innerText;
  var two = document.getElementById("E").innerText;
  var three = document.getElementById("I").innerText;
  console.log(one, two, three);

  if (one == two && two == three && one == three && one != '') {
    winner = true;
    currentWinner.innerHTML = "".concat(one, " player is the winner!");
  }
}

function rightDiagonal() {
  var one = document.getElementById("C").innerText;
  var two = document.getElementById("E").innerText;
  var three = document.getElementById("G").innerText;
  console.log(one, two, three);

  if (one == two && two == three && one == three && one != '') {
    winner = true;
    currentWinner.innerHTML = "".concat(one, " player is the winner!");
  }
}

function checkForDraw() {
  if (winner != true && numOfClicks == 9) {
    matchTie.innerHTML = "It's a tie!";
  }
} //reset the game


function cleanBoard() {
  winner = false;
  numOfClicks = 0;
  currentPlayer = "O";
  document.querySelector(".tie").innerText = "";
  currentWinner.innerHTML = "";

  for (var _i = 0; _i < allSquares.length; _i++) {
    var _selection = allSquares[_i];

    _selection.addEventListener("click", clickTheBtn, {
      once: true
    });
  }

  allSquares.forEach(function (allSquares) {
    allSquares.innerText = "";
  });
}

newGame.addEventListener('click', cleanBoard); // alternate way to rest game..
// newGame.onclick = () =>{
// 	window.location.reload();
// }