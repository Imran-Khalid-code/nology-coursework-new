//positive & negative challenge//

const number = 0;

if (number > 0) {
    console.log('The number is positive');
}
else if (number < 0) {
    console.log('The number is negative');
}
else if ( number == 0) {
    console.log('The number is neither negative or positive, please enter a new value!');
}

//determine the greatest of three numbers using an if statement//



const a = 5;
const b = 10;
const c = 15;

const x = c

if (x > 11) {
    console.log('Well done you scored the highest score!');

}
else if (x <= 10 && x > 5) {
    console.log('Nice try, close but not quite, you scored second place');
}
else if (x <= 5) {
    console.log('Sorry buddy, better luck next time');
}
else{
    console.log('Please enter another value');
}



//Days until the weekend switch case//


const one = 'Monday';
const two = 'Tuesday';
const three = 'Wednesday';
const four = 'Thursday';
const five = 'Friday';
const six = 'Saturday';
const severn = 'Sunday';


const day = three;

switch(day) {
    case one:
        console.log('It Monday..only five more days until the weekend!');
        break;
    case two:
        console.log('It Tuesday..only four more days until the weekend!');
        break;
    case three:
        console.log('It Wednesday..only three more days until the weekend!');
        break;
     case four:
        console.log('It Thursday..only two more days until the weekend!');
        break;
     case five:
        console.log('It Friday..only one more days until the weekend!');
        break;
     case six:
        console.log('It Saturday..enjoy the weekend!');
        break;
    case severn:
        console.log('It Sunday..make the most out of it!');
        break;
    default:
        console.log('please enter the correct day of the week');

}