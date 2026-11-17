// ==========================================
// CHAPTER 7: MATH EXPRESSIONS (ELIMINATING AMBIGUITY)
// ==========================================

function runDefaultPrecedence() {
    var totalCost = 1 + 3 * 4; // Multiplication happens first

    document.write("<h1>Chapter 7 - Default Precedence</h1>");
    document.write("Expression: var totalCost = 1 + 3 * 4;<br><br>");
    document.write("<b>Explanation:</b> Multiplication is performed before addition[cite: 14]. 3 * 4 = 12, then 1 + 12 = 13[cite: 14].<br>");
    document.write("Value of totalCost = <b>" + totalCost + "</b><br><br>");
    document.write("<a href='chapter7.html'>Go Back</a>");
}

function runParentheses1() {
    var totalCost = (1 + 3) * 4; // Parentheses override precedence

    document.write("<h1>Chapter 7 - Parentheses First</h1>");
    document.write("Expression: var totalCost = (1 + 3) * 4;<br><br>");
    document.write("<b>Explanation:</b> Parentheses force addition to happen first[cite: 14]. (1 + 3) = 4, then 4 * 4 = 16.<br>");
    document.write("Value of totalCost = <b>" + totalCost + "</b><br><br>");
    document.write("<a href='chapter7.html'>Go Back</a>");
}

function runComplexExample1() {
    var resultOfComputation = ((2 * 4) * 4) + 2;

    document.write("<h1>Chapter 7 - Complex Expression (Result 34)</h1>");
    document.write("Expression: var resultOfComputation = ((2 * 4) * 4) + 2;<br><br>");
    document.write("<b>Steps:</b><br>");
    document.write("1. 2 * 4 = 8<br>");
    document.write("2. 8 * 4 = 32<br>");
    document.write("3. 32 + 2 = 34<br><br>");
    document.write("Value of resultOfComputation = <b>" + resultOfComputation + "</b><br><br>");
    document.write("<a href='chapter7.html'>Go Back</a>");
}

function runComplexExample2() {
    var resultOfComputation = (2 * 4) * (4 + 2);

    document.write("<h1>Chapter 7 - Complex Expression (Result 48)</h1>");
    document.write("Expression: var resultOfComputation = (2 * 4) * (4 + 2);<br><br>");
    document.write("<b>Steps:</b><br>");
    document.write("1. (2 * 4) = 8<br>");
    document.write("2. (4 + 2) = 6<br>");
    document.write("3. 8 * 6 = 48<br><br>");
    document.write("Value of resultOfComputation = <b>" + resultOfComputation + "</b><br><br>");
    document.write("<a href='chapter7.html'>Go Back</a>");
}