class motherShip {
	constructor(size, name) {
		this.size = size;
		this.name = name;
		this.points = 100;
	}
}
class defenceShip extends motherShip {
	constructor(size, name) {
		super(size, name);
		this.points = 80;
	}
}

class attackShip extends motherShip {
	constructor(size, name) {
		super(size, name);
		this.points = 45;
	}
}

//random function for hit
// const randomHit = () => {};

//function to restart game if mothership === 0
//function if ships hit zero cannot be hit again

document.querySelector(".attack").addEventListener("click", () => {
	shipHit();
});
//////////////
function shipHit(motherShip) {
	input.forEach((hit) => {
		if (!Object.points(motherShip).includes(hit)) {
			isValid = false;
		} else if (Object.points(motherShip).includes(hit)) {
			isValid = true;
		}
	});
	if (isValid == true) {
		reduce(this.points - 9);
	} else if (isValid == false) {
		this.point = this.points;
	}
}
let input = [];
let isValid = "";
