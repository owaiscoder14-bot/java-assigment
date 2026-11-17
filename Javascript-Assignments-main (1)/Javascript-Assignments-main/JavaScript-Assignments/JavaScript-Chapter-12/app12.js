// ==========================================
// CHAPTER 12: IF...ELSE AND ELSE IF STATEMENTS
// ==========================================

function runIfElse() {
    // Basic if...else example from Chapter 12 video
    var correctAnswer = "Vatican";
    var userAns = prompt("Where does the Pope live?");

    if (userAns === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
}

function runElseIf() {
    // else if example checking multiple conditions in sequence
    var x = prompt("Enter a city (e.g., Karachi, Lahore, Islamabad):");

    if (x === "Karachi") {
        alert("Welcome to the city of lights!");
    } 
    else if (x === "Lahore") {
        alert("Welcome to the cultural heart of Pakistan!");
    } 
    else if (x === "Islamabad") {
        alert("Welcome to the capital city!");
    } 
    else {
        alert("City not recognized, but welcome!");
    }
}