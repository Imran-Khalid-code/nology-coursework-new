"use strict";

//pseudocode logic:
//1- need to make a board - use an array
//2- interact with DOM - so the buttons are operational
//3- have a place holder so we know who goes first
//4- swap turns
//5- dont allow to put in the same place if there is already an element there
//6- have a message saying - you won
//7- no need to refresh when you start a new game
//8- add media queries
//Running variables:
var currentPlayer = 'playerZero';
var allSquares = document.querySelectorAll('.space');
allSquares.forEach(function (space) {
  space.addEventListener('click', hitTheButton); // console.log('clicked');
}); //need to turn our 9 squares into an array - in-built method called array.from can perform this action for us, which we can then index
//the index will tell the user which space they are clicking on our grid.

function hitTheButton(event) {
  var spaceArray = Array.from(allSquares);
  var findIndex = spaceArray.indexOf(event.target); //now we need to display this player in the console - use innerHTML for this.

  var playerSelection = document.querySelector('#player');
  playerSelection.innerHTML = currentPlayer; //need an if statement to swap players & and then stop from pressing on the same place twice

  if (currentPlayer === "playerZero") {
    allSquares[findIndex].classList.add('playerZero');
    currentPlayer = 'playerX';
  } else {
    allSquares[findIndex].classList.add('playerX');
    currentPlayer = 'playerZero';
  }
} //need to add an alert message when someone wins.


var alertMessage = document.getElementById('.victory-message');

function endResult(result) {
  if (currentPlayer === '0' && '0' && '0' || 'X' && 'X' && 'X') ;else {
    currentPlayer = "Draw!";
  }
  alertMessage('victory-message');
  console.log('alertMessage');
}