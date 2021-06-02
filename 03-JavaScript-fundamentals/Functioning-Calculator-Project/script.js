
// need to interact with DOM by using quesry selctors to access the different button on calc - Display:
const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const tempResult = document.querySelector('.temp-result');

// Math operations - reduce code by making one overall function call

const operationCalc = document.querySelectorAll('.mathCalcs');


//micellaneous:
const allNumbers = document.querySelectorAll('.calcNumber');
const allZero = document.querySelector('.zero');
const allDot= document.querySelector('.dot');
const allEquals= document.querySelector('.equals');
const lastClear = document.querySelector('.last-entity-clear');
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


// 3 step check - 1- Checking to see if num is present in display then. 2- Check each number for dot. 3 - Whether we have all three displays to conduct operation which we will define later:

operationCalc.forEach((mathCalcs) => {
    mathCalcs.addEventListener("click", (event) => {
      if (!dis2Num) return;
      haveDot = false;
      const mathCalcsName = event.target.innerText;
      if (dis1Num && dis2Num && lastOperation) {
        mathOperation();
      } else {
        result = parseFloat(dis2Num);
      }

 //- clear the result after the last operation and move it into the hx:
 clearVar(mathCalcsName);
 lastOperation = mathCalcsName;
 console.log(result);
      
    });
  });

//move display 2 into display 1 (clear display 2) and the math operation used + then store this in temp.result:
function clearVar(mathCalcsName = ""){
    dis1Num += dis2Num + " " + mathCalcsName + " ";
    //update screen:
    display1.innerText = dis1Num;
    display2.innerText = "";
    dis2Num = "";
    tempResult.innerText = result;
    
    }
  


 //Defining the math operation above:

 function mathOperation() {
    if (lastOperation === "x") {
      result = parseFloat(result) * parseFloat(dis2Num);
    } else if (lastOperation === "+") {
      result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOperation === "-") {
      result = parseFloat(result) - parseFloat(dis2Num);
    } else if (lastOperation === "/") {
      result = parseFloat(result) / parseFloat(dis2Num);
    } else if (lastOperation === "%") {
      result = parseFloat(result) % parseFloat(dis2Num);
    }
  }
  
  //Equal function:

  allEquals.addEventListener("click", () => {
    if (!dis2Num || !dis1Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2.innerText = result;
    tempResult.innerText = "";
    dis2Num = result;
    dis1Num = "";
  });


  //Clear All function:


  allClear.addEventListener("click", () => {
    dis1Num = "";
    dis2Num = "";
    display1.innerText = "";
    display2.innerText = "";
    result = "";
    tempResult.innerText = "";
  });

  //clear last function:
  
  lastClear.addEventListener("click", () => {
    display2.innerText = "";
    dis2Num = "";
  });


// keyboard functionally operation:


window.addEventListener("keydown", (event) => {
    if (
      event.key === "0" ||
      event.key === "1" ||
      event.key === "2" ||
      event.key === "3" ||
      event.key === "4" ||
      event.key === "5" ||
      event.key === "6" ||
      event.key === "7" ||
      event.key === "8" ||
      event.key === "9" ||
      event.key === "." ||
      event.key === "*" ||
      event.key === "/" ||
      event.key === "+" ||
      event.key === "-" ||
      event.key === "%" ||
      event.key === "=" ||
      //press tab C to delete:
      event.key === "C" 
    
    ) {
      clickButton(event.key);
    }
     
 
  });

  function clickButton(key) {
    allNumbers.forEach((button) => {
      if (button.innerText === key) {
        button.click();
      }
    });
  };


 


