const translateBtn = document.querySelector(".translate-btn");
const morseTranslate = document.querySelector(".translate-morseCode");

const alertMessage = "Sorry, please try again!";
const alertMessage1 = "Secret message unlocked!";
let input = [];

let isValid = "";
const alphabet = {
	".-": "a",
	"-...": "b",
	"-.-.": "c",
	"-..": "d",
	".": "e",
	"..-.": "f",
	"--.": "g",
	"....": "h",
	"..": "i",
	".---": "j",
	"-.-": "k",
	".-..": "l",
	"--": "m",
	"-.": "n",
	"---": "o",
	".--.": "p",
	"--.-": "q",
	".-.": "r",
	"...": "s",
	"-": "t",
	"..-": "u",
	"...-": "v",
	".--": "w",
	"-..-": "x",
	"-.--": "y",
	"--..": "z",
	".----": "1",
	"..---": "2",
	"...--": "3",
	"....-": "4",
	".....": "5",
	"-....": "6",
	"--...": "7",
	"---..": "8",
	"----.": "9",
	"-----": "0",
};

// Change into an array using Object.entries() and the iterate over it.
const validMessageEntries = Object.entries(alphabet);
//console.log(alphabet);

//get the values
function getKeyByValue(value) {
	return Object.keys(alphabet).find((key) => alphabet[key] === value);
}

function englishToMorse(letters) {
	const messageInMorse = [];
	letters.split("").forEach((word) => {
		word.split("  ").map((value) => {
			messageInMorse.push(getKeyByValue(value));
			input.push(value);
		});
	});
	return messageInMorse.join(" ").toUpperCase();
}
//console.log(englishToMorse("imran khalid"));

translateBtn.addEventListener("click", () => {
	const englishWord = document.querySelector(".input-box").value;
	const translateEnglishToMorse = englishToMorse(englishWord);

	document.querySelector(".translate-result").innerHTML =
		translateEnglishToMorse;
	checkInput1();
});

function checkInput1() {
	input.forEach((value) => {
		//console.log(alphabet[key]);

		if (!Object.values(alphabet).includes(value)) {
			isValid = false;
		} else if (Object.values(alphabet).includes(value)) {
			isValid = true;
		}
	});
	//outside foreach
	if (isValid == true) {
		alert(alertMessage1);
	} else if (isValid == false) {
		alert(alertMessage);
	}
}

///////////
function getValueByKey(key) {
	return alphabet[key];
}

function morseToEnglish(morse) {
	const messageTranslated = [];

	morse.split("/").forEach((word) => {
		word.split(" ").map((key) => {
			messageTranslated.push(getValueByKey(key));
			input.push(key);
			console.log(input);
		});
	});
	return messageTranslated.join(" ").toUpperCase();
}

// console.log(morseToEnglish("..- .--.   -... .-. ---"));

morseTranslate.addEventListener("click", () => {
	const morseWord = document.querySelector(".input-box2").value;
	const translateMorseToEnglish = morseToEnglish(morseWord);
	document.querySelector(".translate-morse").innerHTML =
		translateMorseToEnglish;
	checkInput();
});

function checkInput() {
	input.forEach((key) => {
		//console.log(alphabet[key]);

		if (!(key in alphabet)) {
			isValid = false;
		} else if (key in alphabet) {
			isValid = true;
		}
	});
	//outside foreach
	if (isValid == true) {
		alert(alertMessage1);
	} else if (isValid == false) {
		alert(alertMessage);
	}
}
