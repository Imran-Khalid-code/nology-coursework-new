class Ships {
	constructor(name, size) {
		this.name = name;
		this.size = size;
		this.score = 100;
		shipHit === false;
	}
}

motherShip1 = new Ships();

class defenceShip extends Ships {
	constructor(name, size) {
		super(name, size);
		this.score = 80;
		shipHit === false;
	}
}

defenceShip1 = new defenceShip();
defenceShip2 = new defenceShip();
defenceShip3 = new defenceShip();
defenceShip4 = new defenceShip();
defenceShip5 = new defenceShip();

class attackShip extends Ships {
	constructor(name, size) {
		super(name, size);
		this.score = 45;
		shipHit === false;
	}
}

attackShip1 = new attackShip();
attackShip2 = new attackShip();
attackShip3 = new attackShip();
attackShip4 = new attackShip();
attackShip5 = new attackShip();
attackShip6 = new attackShip();
attackShip7 = new attackShip();
attackShip8 = new attackShip();

function shipHit() {
	if (Ships === !hit)
		for (let Ships = 1; Ships < 10; Ships++) {
			return Math.random(10);
		}
}
console.log(shipHit);
