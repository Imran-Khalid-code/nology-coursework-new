const grid = document.querySelector('.grid')
const scoreDisplay = document.getElementById('score')
let score = 0

const width = 28 // 28 x 28 = 784

//layout of grid and what is in the grid - 748 items in the array.

const layout = [
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0,
	1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1,
	1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
	1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
	1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
	4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4,
	4, 4, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1,
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0,
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1,
	1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4,
	4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
	1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
	1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0,
	1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
	1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
	0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1,
	1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0,
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
	1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1,
]

const squares = []

//symbol of each of the numbers :

//0 - pac-dot
//1 - wall
//2 - ghost-lair
//3-power-pellet
//4-empty

function createBoard() {
	for (let i = 0; i < layout.length; i++) {
		const square = document.createElement('div')
		grid.appendChild(square)
		squares.push(square)

		//add layout to the board
		//we want to check what is on the board on every position :
		if (layout[i] === 0) {
			squares[i].classList.add('pac-dot')
		} else if (layout[i] === 1) {
			squares[i].classList.add('wall')
		} else if (layout[i] === 2) {
			squares[i].classList.add('ghost-lair')
		} else if (layout[i] === 3) {
			squares[i].classList.add('power-pellet')
		}
	}
}
createBoard()

//add pac-man to the board and then make move around
//where we want him to start

let pacmanCurrentIndex = 490

squares[pacmanCurrentIndex].classList.add('pac-man')

//move pac-man

const movePacman = (e) => {
	//remove it at the begining of the game and in this case we start at 490
	squares[pacmanCurrentIndex].classList.remove('pac-man')
	//when we are moving pacman we dont want him to stick on a specific place we want him to chnages places.

	switch (e.keyCode) {
		case 37:
			if (
				pacmanCurrentIndex % width !== 0 &&
				!squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
				!squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair')
			)
				pacmanCurrentIndex -= 1

			//check if pacman is in the left exit :exit is from 364 - 391
			//so when we get to 364 -1 == 363 then we move oppopsite side to 391.
			if (pacmanCurrentIndex - 1 === 363) {
				pacmanCurrentIndex = 391
			}

			//index 489
			break
		case 38:
			if (
				pacmanCurrentIndex - width >= 0 &&
				!squares[pacmanCurrentIndex - width].classList.contains('wall') &&
				!squares[pacmanCurrentIndex - width].classList.contains('ghost-lair')
			)
				pacmanCurrentIndex -= width
			break
		case 39:
			if (
				pacmanCurrentIndex % width < width - 1 &&
				!squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
				!squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair')
			)
				pacmanCurrentIndex += 1

			//check if pacman is in the right exit
			//so when we get to 391 and add 1 = 392 which triggers it to move to the opposite side 364
			if (pacmanCurrentIndex + 1 === 392) {
				pacmanCurrentIndex = 364
			}

			break
		case 40:
			if (
				pacmanCurrentIndex + width < width * width &&
				!squares[pacmanCurrentIndex + width].classList.contains('wall') &&
				!squares[pacmanCurrentIndex + width].classList.contains('ghost-lair')
			)
				pacmanCurrentIndex += width
			break
	}

	squares[pacmanCurrentIndex].classList.add('pac-man')

	//On each game we want to check for :
	pacDotEaten() // invoked within the movePacman fucntion with eventlistner
	powerPelletEaten()
	checkForGameOver()
	checkForWin()
}
document.addEventListener('keyup', movePacman)

// wHAT happens when Pac-man eats a dot( pac-dot) - we need to keep a track of the score. Create a variable score and set it to zero.

const pacDotEaten = () => {
	if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
		score++
		//adding 1 to the score
		//display this in the DOM:
		scoreDisplay.innerHTML = score
		//we want to remove the dot off the boaard to show empty before carrying on signalling the fact that it has been taken and recored.
		squares[pacmanCurrentIndex].classList.remove('pac-dot')
	}
}

const powerPelletEaten = () => {
	if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
		score += 10
		ghosts.forEach((ghost) => (ghost.isScared = true))
		setTimeout(unScareGhosts, 10000)
		squares[pacmanCurrentIndex].classList.remove('power-pellet')
	}
}

//make the ghosts stop appearing as aquamarine:

function unScareGhosts() {
	ghosts.forEach((ghost) => (ghost.isScared = false))
}

//using constructor method we can create our ghosts forthis section:
class Ghost {
	constructor(className, startIndex, speed) {
		this.className = className
		this.startIndex = startIndex
		this.speed = speed
		this.currentIndex = startIndex
		this.isScared = false
		this.timerId = NaN
	}
}

ghosts = [
	new Ghost('blinky', 348, 235),
	new Ghost('slinky', 376, 35),
	new Ghost('dinky', 351, 250),
	new Ghost('pinky', 379, 140),
]

// draw ghosts on tthe grid:

ghosts.forEach((ghost) => {
	squares[ghost.currentIndex].classList.add(ghost.className)
	squares[ghost.currentIndex].classList.add('ghost')
})

//move each ghost randomly with the moveGhost function below(precussor), we call the fuction moveGhost here:

ghosts.forEach((ghost) => moveGhost(ghost))

//now we need a function for moveGhost randomly

function moveGhost(ghost) {
	//direction options - {one back, one forward, one down, one up}
	const directions = [-1, +1, width, -width]
	let direction = directions[Math.floor(Math.random() * directions.length)]

	ghost.timerId = setInterval(function () {
		//so if the next square your ghost is going to go does not have a ghost and does not have a wall, else find a next direction and the loops starts over:
		if (
			!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
			!squares[ghost.currentIndex + direction].classList.contains('wall')
		) {
			//then the ghost can go here so remove all ghost classes
			squares[ghost.currentIndex].classList.remove(ghost.className)
			squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
			//change ghost index to new index
			ghost.currentIndex += direction
			//redraw the ghost in new square using classList
			squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
		} else direction = directions[Math.floor(Math.random() * directions.length)]

		// if the ghost is currently scared:
		if (ghost.isScared) {
			squares[ghost.currentIndex].classList.add('scared-ghost')
		}

		//if the specific ghost is scared and pacman runs into it we want to remove it:
		if (
			ghost.isScared &&
			squares[ghost.currentIndex].classList.contains('pac-man')
		) {
			squares[ghost.currentIndex].classList.remove(
				ghost.className,
				'ghost',
				'scared-ghost'
			)
			//put ghost back in original position and give pac man another 100 and add the ghost image back.
			ghost.currentIndex = ghost.startIndex
			score += 100
			squares[ghost.currentIndex].classList.add(ghost.className)
		}
		checkForGameOver()
	}, ghost.speed)
}

//check for a game over
//if there is a ghost not a scared ghost as it cant kill pacman. in the pacman space then pac man is dead. we then remove eventlistener for moving pacmann and remove the ghost timer Id to stop them moving, and temporarily create an alert.

function checkForGameOver() {
	if (
		squares[pacmanCurrentIndex].classList.contains('ghost') &&
		!squares[pacmanCurrentIndex].classList.contains('scared-ghost')
	) {
		ghosts.forEach((ghost) => clearInterval(ghost.timerId))
		document.removeEventListener('keyup', movePacman)
		scoreDisplay.innerHTML = 'GAME OVER !'
	}
}

//CHECK WIN - MAKE 150 ARE BENCHMARK

const checkForWin = () => {
	if (score === 150) {
		ghosts.forEach((ghost) => clearInterval(ghost.timerId))
		document.removeEventListener('keyup', movePacman)
		scoreDisplay.innerHTML = 'You Won!'
	}
}
