// ==========================================
// CHAPTER 14: NESTED IF STATEMENTS
// ==========================================

function runNestedIf() {
    // Nested if checking multiple dependent conditions
    var score = prompt("Enter your exam score (0-100):");

    if (score >= 50) {
        alert("You passed!");
        if (score >= 80) {
            alert("Amazing! You got an A grade.");
        } else {
            alert("Good effort, keep improving.");
        }
    } else {
        alert("Sorry, you failed the exam.");
    }
}

function runAdvancedNestedIf() {
    // Nested if checking username and password
    var username = prompt("Enter username:");
    
    if (username === "admin") {
        var password = prompt("Enter password:");
        if (password === "12345") {
            alert("Access Granted! Welcome Admin.");
        } else {
            alert("Incorrect password!");
        }
    } else {
        alert("Unknown username!");
    }
}