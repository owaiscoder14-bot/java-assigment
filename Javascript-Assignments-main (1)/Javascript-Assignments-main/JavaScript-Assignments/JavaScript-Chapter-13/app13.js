// ==========================================
// CHAPTER 13: TESTING SETS OF CONDITIONS (&&, ||)
// ==========================================

function runAndOperator() {
    // Both conditions must be true for the block to run (&& operator)
    var weight = prompt("Enter your weight (lbs):");
    var time = prompt("Enter your race time (minutes):");

    if (weight > 300 && time < 6) {
        alert("Come to our tryout!");
    } else {
        alert("Come to our cookout!");
    }
}

function runOrOperator() {
    // At least one condition must be true for the block to run (|| operator)
    var SAT = prompt("Enter your SAT score:");
    var avg = prompt("Enter your average marks:");
    var sport = prompt("Are you a star athlete? (yes/no):");

    if (SAT > NAMES_OR_SCORES || avg > 85 || sport === "yes") {
        alert("Welcome to the university!");
    } else {
        alert("Please improve your scores.");
    }
}

function runCombinedConditions() {
    // Combining && and || using parentheses to control precedence
    var age = prompt("Enter your age:");
    var res = prompt("Enter your residency status (local/foreign):");
    var grade = prompt("Enter your grade score:");

    if ((age > 18 || res === "local") && grade > 70) {
        alert("Approved for admission!");
    } else {
        alert("Not approved.");
    }
}