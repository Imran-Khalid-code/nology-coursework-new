// const translateBtn = document.querySelector(".translate-btn");

let input = "";

const message = "";
const alertMessage = "Sorry, please try again!";

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
//testing
for (let key in alphabet) {
	//console.log(key);
	//console.log(alphabet[key]);
}

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
		word.split("").map((value) => {
			messageInMorse.push(getKeyByValue(value));
		});
	});
	return messageInMorse.join("").toUpperCase();
}
console.log(englishToMorse("Imran"));
//get the keys:
// const messageTranslated = [];

// message.split(" ").forEach((word) => {
// 	word.split(" ").map((value) => {
// 		messageTranslated.push(alphabet[value]);
// 	});
// 	messageTranslated.push(" ");
// });

// console.log(messageTranslated.join("").toUpperCase());
///////////////////////
//if else statements to rule out incorrect logs:

// const checkInput = () => {
// 	if ((input = !alphabet)) {
// 		return `${alertMessage}.innerHTML`;
// 	}
// 	return checkInput;
// };

//start connecting to the DOM:
//NEDD TO ADD AN EVENT LISTENER AND THEN  PUT OUR FUNCTION INTO THEM.

// translateBtn.addEventListener("click", () => {
// 	//console.log("works");
// 	const englishWord = document.querySelector(".input-box").value;
// 	const translateMorseToEnglish = englishToMorse(englishWord);

// 	document.querySelector(".translate-result").innerHTML =
// 		translateMorseToEnglish;
// });

// //-reconfigure this.

function morseToEnglish(morse) {
	const messageTranslated = [];

	morse.split(" / ").forEach((word) => {
		word.split(" ").map((key) => {
			messageTranslated.push(getValueByKey(key));
		});
	});
	return messageTranslated.join("").toUpperCase();
}

console.log(morseToEnglish("...-"));

function getValueByKey(key) {
	return Object.values(alphabet).find((value) => alphabet[value] === key);
}
