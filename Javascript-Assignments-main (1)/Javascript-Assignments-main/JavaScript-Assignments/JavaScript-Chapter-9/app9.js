// ==========================================
// CHAPTER 9: PROMPTS SOLUTIONS
// ==========================================

function runBasicPrompt() {
    // Basic prompt asking for species with default value "human"
    var spec = prompt("Your species?", "human");
    
    document.write("<h1>Chapter 9 - Basic Prompt Output</h1>");
    document.write("Your entered/selected species is: <b>" + spec + "</b><br><br>");
    document.write("<a href='chapter9.html'>Go Back</a>");
}

function runVariablePrompt() {
    // Prompt where question and default answer are stored in variables
    var question = "Your species?";
    var defaultAnswer = "human";
    var spec = prompt(question, defaultAnswer);

    document.write("<h1>Chapter 9 - Prompt Using Variables Output</h1>");
    document.write("Question variable: " + question + "<br>");
    document.write("Default answer variable: " + defaultAnswer + "<br>");
    document.write("Result in spec: <b>" + spec + "</b><br><br>");
    document.write("<a href='chapter9.html'>Go Back</a>");
}

function runStringConcatenationPrompt() {
    // Demonstrating that prompt returns a string even if a number is entered
    var numberOfCats = prompt("How many cats?");
    var tooManyCats = numberOfCats + 1; // Concatenation occurs instead of addition

    document.write("<h1>Chapter 9 - String Concatenation Issue</h1>");
    document.write("You entered numberOfCats as: <b>" + numberOfCats + "</b> (Data type: string)<br>");
    document.write("When adding 1 using '+', JavaScript concatenates it instead of doing math.<br>");
    document.write("Result of tooManyCats = <b>" + tooManyCats + "</b> (e.g., if you entered 3, it becomes '31')<br><br>");
    document.write("<a href='chapter9.html'>Go Back</a>");
}