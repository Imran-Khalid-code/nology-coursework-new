function handleCalculateNumber(event)  {

   

    let number = event.target.value;

  




    let grade;
    switch (number) {
        case "90":
            grade = "A";
            break;
        case "70":
            grade = "B";
            break;
        case "50":
            grade = "C";
            break;
        case "40":
            grade = "D";
            break;
        case "30":
            grade = "E";
            break;
        default:
            grade = ('see the headmaster');
            break;
    }

    alert("The grade was " + grade);

}