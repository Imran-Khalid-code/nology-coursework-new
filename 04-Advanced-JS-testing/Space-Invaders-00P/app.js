const shipArr = []

class Ships {
	constructor(name, size) {
		this.name = name
		this.size = size
		this.score = 150

		shipArr[0] = this
	}

	///This ship class is our Mothershiptemplate

	///function for when one of the ships are hit
	//static - can only be called on the template class main. otherwise it would not work.
	static hitAShip() {
		if (shipArr.length > 0 && shipArr[0].name === 'Mother Ship') {
			const randNumber = Math.round(Math.random() * (shipArr.length - 1))
			//random selection
			const randShip = shipArr[randNumber]
			//pass through a random ship to the randNumber Array
			console.log(randShip)
			console.log(randNumber)
			randShip.shipHit()

			//checking if the score is less than 1
			shipArr.forEach((ship, i) => {
				if (ship.score < 1) {
					shipArr.splice(i, 1)
				}
			})
		}
		//consditoin for game over - nothing in array or no ms.
		if (shipArr.length < 1 || shipArr[0].name != 'Mother Ship') {
			console.log('game over')
		}
		console.log(shipArr)
	}

	///method is on randship that reduces the score.
	shipHit() {
		this.score = this.score - 200
		return this.score
	}
}

//from this template we will inherit its features and make new instances : Mothership,defenceship, attackship.

motherShip1 = new Ships('Mother Ship', 'Large')

class defenceShip extends Ships {
	constructor(name, size) {
		super(name, size)
		this.score = 80

		shipArr.push(this)
	}
}

// shipArr.push(this) - global scope - browser so wont work.
console.log(this)

defenceShip1 = new defenceShip('Defence Ship 1', 'Medium')
defenceShip2 = new defenceShip('Defence Ship 2', 'Medium')
defenceShip3 = new defenceShip('Defence Ship 3', 'Medium')
defenceShip4 = new defenceShip('Defence Ship 4', 'Medium')
defenceShip5 = new defenceShip('Defence Ship 5', 'Medium')

class attackShip extends Ships {
	constructor(name, size) {
		super(name, size)
		this.score = 45
		shipArr.push(this)
	}
}

attackShip1 = new attackShip('Attack Ship 1', 'Small')
attackShip2 = new attackShip('Attack Ship 2', 'Small')
attackShip3 = new attackShip('Attack Ship 3', 'Small')
attackShip4 = new attackShip('Attack Ship 4', 'Small')
attackShip5 = new attackShip('Attack Ship 5', 'Small')
attackShip6 = new attackShip('Attack Ship 6', 'Small')
attackShip7 = new attackShip('Attack Ship 7', 'Small')
attackShip8 = new attackShip('Attack Ship 8', 'Small')

//now I can put the below in to an event listner:
//then you can style this puuppy.

shipArr.unshift(motherShip1)

const hitTheBtn = document.querySelector('.attack')
document.addEventListener('click', Ships.hitAShip)

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()
// motherShip2 = new Ships('Mother Ship', 'Large')
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()

// Ships.hitAShip()
// Ships.hitAShip()
// motherShip2 = new Ships('Mother Ship', 'Large')
// Ships.hitAShip()
