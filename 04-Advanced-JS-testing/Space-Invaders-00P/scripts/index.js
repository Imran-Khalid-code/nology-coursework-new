//function to recdue each score when ship is hit by 10 points.
export function shipHit() {
	Input.forEach((hit) => {
		if (!Object.values(shipClass).includes(hit)) {
			isValid = false;
		} else if (Object.values(shipClass).includes(value)) {
			isValid = true;
		}
	});
	if (isValid == true) {
		reduce(score - 10);
	} else if (isValid == false) {
		score = score;
	}
}

//
export class Defeated {
	constructor(...hit) {
		this.hit = hit;
	}
	get isValid() {
		const [ship1, ship2, ship3, ship4, ship5] = this.hit;
		const gameIsOver =
			ship1 === 0 && ship2 === 0 && ship3 === 0 && ship4 === 0 && ship5 === 0;
		return gameIsOver;
	}
}
Defeated();
