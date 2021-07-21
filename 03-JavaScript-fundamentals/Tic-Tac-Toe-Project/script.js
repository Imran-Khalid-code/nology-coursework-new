"use strict";

let allSquares = document.querySelectorAll(".space");
let player1 = document.getElementById("O");
let player2 = document.getElementById("X");
const gameBoard = document.querySelector(".gameboard");
const newGame = document.querySelector(".restartbtn");
let matchTie = document.querySelector(".tie");
let currentPlayer = "O";
let currentWinner = document.querySelector(".newWinner");
let numOfClicks = 0;
let winner = false;

let winningCombinations = [
	[("A", "B", "C")],
	[("D", "E", "F")],
	[("G", "H", "I")],
	[("A", "D", "G")],
	[("B", "E", "H")],
	[("C", "F", "I")],
	[("A", "E", "I")],
	[("C", "E", "G")],
];

// allSquares.addEventListener("click", function () {
// 	console.log("hit me!");
// });

allSquares = document.querySelectorAll(".space");
for (let i = 0; i < allSquares.length; i++) {
	let selection = allSquares[i];

	selection.addEventListener("click", clickTheBtn, { once: true });
}

//display image on after making an array board:

function clickTheBtn(event) {
	const spaceArray = Array.from(allSquares);
	const findIndex = spaceArray.indexOf(event.target);
	numOfClicks++;
	// console.log(findIndex);

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
	let one = document.getElementById("A").innerText;
	let two = document.getElementById("B").innerText;
	let three = document.getElementById("C").innerText;
	console.log(one, two, three);

	if (one == two && two == three && one == three && one != "") {
		winner = true;
		cleanBoard();

		currentWinner.innerText = `${one} player is the winner!`;
		// console.log(currentWinner);
	} else {
	}
}
function secondRow() {
	let one = document.getElementById("D").innerText;
	let two = document.getElementById("E").innerText;
	let three = document.getElementById("F").innerText;
	// console.log(one, two, three);

	if (one == two && two == three && one == three && one != "") {
		winner = true;
		cleanBoard();
		currentWinner.innerText = `${one} player is the winner!`;
	}
}
function thirdRow() {
	let one = document.getElementById("G").innerText;
	let two = document.getElementById("H").innerText;
	let three = document.getElementById("I").innerText;
	// console.log(one, two, three);

	if (one == two && two == three && one == three && one != "") {
		winner = true;
		cleanBoard();
		currentWinner.innerText = `${one} player is the winner!`;
	}
}
function firstColumn() {
	let one = document.getElementById("A").innerText;
	let two = document.getElementById("D").innerText;
	let three = document.getElementById("G").innerText;
	// console.log(one, two, three);

	if (one == two && two == three && one == three && one != "") {
		winner = true;
		cleanBoard();
		currentWinner.innerHTML = `${one} player is the winner!`;
	}
}
function middleColumn() {
	let one = document.getElementById("B").innerText;
	let two = document.getElementById("E").innerText;
	let three = document.getElementById("H").innerText;
	// console.log(one, two, three);

	if (one == two && two == three && one == three && one != "") {
		winner = true;
		cleanBoard();
		currentWinner.innerHTML = `${one} player is the winner!`;
	}
}
function lastColumn() {
	let one = document.getElementById("C").innerText;
	let two = document.getElementById("F").innerText;
	let three = document.getElementById("I").innerText;
	// console.log(one, two, three);

	if (one == two && two == three && one == three && one != "") {
		winner = true;
		cleanBoard();

		currentWinner.innerHTML = `${one} player is the winner!`;
	}
}
function leftDiagonal() {
	let one = document.getElementById("A").innerText;
	let two = document.getElementById("E").innerText;
	let three = document.getElementById("I").innerText;
	// console.log(one, two, three);

	if (one == two && two == three && one == three && one != "") {
		winner = true;
		cleanBoard();
		currentWinner.innerHTML = `${one} player is the winner!`;
	}
}
function rightDiagonal() {
	let one = document.getElementById("C").innerText;
	let two = document.getElementById("E").innerText;
	let three = document.getElementById("G").innerText;
	// console.log(one, two, three);

	if (one == two && two == three && one == three && one != "") {
		winner = true;
		cleanBoard();
		currentWinner.innerHTML = `${one} player is the winner!`;
	}
}
function checkForDraw() {
	if (winner != true && numOfClicks == 9) {
		matchTie.innerHTML = "It's a tie!";
	}
}
//reset the game
function cleanBoard() {
	winner = false;
	numOfClicks = 0;
	currentPlayer = "O";
	document.querySelector(".tie").innerText = "";
	currentWinner.innerHTML = "";

	for (let i = 0; i < allSquares.length; i++) {
		let selection = allSquares[i];
		selection.addEventListener("click", clickTheBtn, { once: true });
	}

	allSquares.forEach(function (allSquares) {
		allSquares.innerText = "";
	});
}
newGame.addEventListener("click", cleanBoard);

// alternate way to rest game..

// newGame.onclick = () =>{
// 	window.location.reload();
// }
