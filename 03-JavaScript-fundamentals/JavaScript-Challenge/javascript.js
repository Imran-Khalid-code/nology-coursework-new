
function calculateYearsUntilRetirement(event) {
    const currentAge = event.target.value;


    
    const yearsLeft = 65 - currentAge;

    alert(yearsLeft)
 
}




function getGreetingInFrench(event) {
    const greeting = event.target.value;

    const Hello = "Bonjour";
    const Goodbye = "Au revoir";

    if (greeting == "Hello") {
        alert('Bonjour')
    }

        else if (greeting == "Goodbye") {
            alert('Au revoir')
        }
        else {
            alert('not recognised')
        }


    }

  
function calculateHolidaysRemaining(event) {
    const currentTimeTaken = event.target.value;

    const daysLeft = 28 - currentTimeTaken;

    alert(daysLeft)

}



function convertHoursIntoSeconds(event) {
    const hour = event.target.value;

    const timeInSeconds = hour * 60;
    alert(timeInSeconds)
}




    