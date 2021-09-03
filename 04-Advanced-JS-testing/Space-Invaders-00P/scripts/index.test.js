//this file wiill look for any file that has test.js suffix and run test on it.
//to use it we must import from the corressponding index.js file.
//write a script for each test
import { expect, it, test } from "@jest/globals";
import { describe } from "yargs";
import { shipHit } from "./index.js";

it("Should return the new reduced score for the corresponding ship", () => {
	const output = shipHit("score, is now 10 points less");
	expect(output).toBe("Score is now 10 points less");
});

//describe test()

describe("Tests to determine wheter or not all ships has been defeated", () => {
	test("all ships gunned down ", () => {
		const ships = new Ships(1, 2, 3, 4, 5);
		expect(ships.defeated).toBe(true);
	});
});
