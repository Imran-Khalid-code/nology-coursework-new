function handleCalculateGrade(event)  {

   

    let grade = event.target.value;

   /* if (!grade) {
        return;
    };*/




    grade = grade.toUpperCase();

    let percentage;
    switch (grade) {
        case "A":
            percentage = "90-100%";
            break;
        case "B":
            percentage = "89-70%";
            break;
        case "C":
            percentage = "69-50%";
            break;
        case "D":
            percentage = "49-30%";
            break;
        case "E":
            percentage = "0-29%";
            break;
        default:
            percentage = ('see the headmaster');
            break;
    }

    alert("The percentage was " + percentage);

}