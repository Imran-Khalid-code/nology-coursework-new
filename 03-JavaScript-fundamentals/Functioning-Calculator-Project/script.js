
// need to interact with DOM by using quesry selctors to access the different button on calc - Display:
const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const tempResult = document.querySelector('temp-result');

// Math operations - reduce code by making one overall function call

const operationCalc = document.querySelectorAll('.mathCalcs');


//micellaneous:
const allNumbers = document.querySelectorAll('.calcNumber');
const allZero = document.querySelector('.zero');
const allDot= document.querySelector('.dot');
const allEquals= document.querySelector('.equals');
const all = document.querySelector('.last-entity-clear');
const allClear = document.querySelector('.is-clear');



//running display variables:
let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;


//method to check if the number already has a dot using eventlistener and event object:

allNumbers.forEach((calcNumber)=> { 
    calcNumber.addEventListener("click", (event) => {
        if(event.target.innerText === "." && !haveDot) {
            haveDot = true;
        } else if (event.target.innerText === "." && haveDot)
    {
        return;

        }
        
// whenever we click a number, we want to display it as our display2 variable:
        dis2Num += event.target.innerText;
        display2.innerText = dis2Num;
    });
});

// 3 step check - 1- Checking to see if num is present in display then. 2- Check each number for dot. 3 - Whether we have all three displays to conduct operation:

operationCalc.forEach((mathCalcs) => {
    mathCalcs.addEventListener("click", (event) => {
      if (!dis2Num) return;
      haveDot = false;
      const mathCalcName = event.target.innerText;
      if (dis1Num && dis2Num && lastOperation) {
        mathOperation();
      } else {
        result = parseFloat(dis2Num);
      }
      //- clear the result after the last operation and move it into the hx:
      clearVar(mathCalcName);
      lastOperation = mathCalcName;
      console.log(result);
    });
  });

