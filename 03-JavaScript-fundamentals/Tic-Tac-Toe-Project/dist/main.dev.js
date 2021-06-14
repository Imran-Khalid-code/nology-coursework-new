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
var playerSelection = document.querySelector('#player');
playerSelection.innerHTML = currentPlayer;
var allSquares = document.querySelectorAll('.space');
allSquares.forEach(function (space) {
  space.addEventListener('click', hitTheButton, {
    once: true
  });
}); //need to turn our 9 squares into an array instead of HTML collection- in-built method called array.from can perform this action for us, which we can then index
//the index will tell the user which space they are clicking on our grid.

function hitTheButton(event) {
  var spaceArray = Array.from(allSquares);
  var findIndex = spaceArray.indexOf(event.target);

  if (currentPlayer === "playerZero") {
    allSquares[findIndex].classList.add('playerZero');
    currentPlayer = 'playerX';
  } else {
    allSquares[findIndex].classList.add('playerX');
    currentPlayer = 'playerZero';
  }

  for (var i = 0; i < 3; i++) {
    if (allSquares[i][0] === allSquares[i][1] && allSquares[i][1] === allSquares[i][2]) return allSquares[i][0];
    console.log(allSquares);
  }
} //now we need to display this player in the console - use innerHTML for this.
//need an if statement to swap players & and then stop from pressing on the same place twice
//for loop to say if you get three in a row you will win:
//A message to say you have won or drawn