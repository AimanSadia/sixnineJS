
/* -----------------------ASSIGNMENT 6 - 9 -------------------------------- */

/* ===========QUESTION NO 01 =============*/

/* document.write('Result: <br>')
var a = 10;
document.write(`The value of a is: ${a}<br>`);
document.write('.............................................. <br><br>')

var a = ++a;
document.write(`The value of ++a of a is: ${a}<br>`)
document.write(`Now the value of a is: ${a}<br><br><br>`);

var a = a++;
document.write(`The value of a++  is: ${a}<br>`)
a++;
document.write(`Now the value of a is: ${a}<br><br><br>`);

var a = --a;
document.write(`The value of --a  is: ${a}<br>`)
document.write(`Now the value of a is: ${a}<br><br><br>`);

var a = a--;
document.write(`The value of a--  is: ${a}<br>`)
--a;
document.write(`Now the value of a is: ${a}<br><br><br>`); */
 

/* ===========QUESTION NO 02 =============*/

/* var a = 2;
var b = 1;

var var1 = --a;
document.write(`The value of --a is ${var1}<br><br>`)

var var2 = --a;
var var3 = --b;
document.write(`The value of --a is ${var2}<br><br>`);
document.write(`The value of --b is ${var3}<br><br>`);
var resultant = var2 - var3;
document.write(`The resultant value is ${resultant} <br><br>`);

var var4= --a;
var var5 = --b;
document.write(`The value of --a is ${var4}<br><br>`);
document.write(`The value of --b is ${var5}<br><br>`);
var var6 = ++b;
document.write(`The value of ++b is ${var6}<br><br>`);

var resultant = var4 - var5 + var6;
document.write(`The resultant value is ${resultant} <br><br>`);

var var7 = --a;
var var8 = --b;
var var9 = ++b;
var var10 = b--;

document.write(`The value of --a is ${var7}<br><br>`);
document.write(`The value of --b is ${var8}<br><br>`);
document.write(`The value of ++b is ${var9}<br><br>`);
document.write(`The value of b-- is ${var10}<br><br>`);

var resultant = var7 - var8 + var9 + var10;
document.write(`The resultant value is ${resultant} <br><br>`); 

document.write(`a is ${a}<br><br>`);
document.write(`b is ${b}<br><br>`);
document.write(`result is ${resultant}<br><br>`); */

/* ===========QUESTION NO 03 =============*/

/* var name1 = prompt("Enter your name");
alert(`Greetings Miss ${name1} from Saylani Welfare`);  */

/* ===========QUESTION NO 05 =============*/

/* var userInput = prompt("Enter a number:");
userInput = parseInt(userInput);

if (isNaN(userInput)){
  userInput = 5; 
}

document.write("<h2>Multiplication Table of " + userInput + ":</h2>");

for (var i = 1; i <= 10; i++) {
  var table = userInput * i;
  document.write(userInput + " x " + i + " = " + table + "<br>");
}  */

/* ===========QUESTION NO 06 =============*/

/* // a) Take three subjects name from user and store them in 3 different variables.
var subOne = prompt("Enter the name of subject one:");
var subTwo = prompt("Enter the name of subject two:");
var subThree = prompt("Enter the name subject three:");

// b) Total marks for each subject is 100, store it in another variable.
var totalMarks = 100;

// c) Take obtained marks for first subject from user and stored it in different variable.
var obtainedMarksOne = Number(prompt("Enter obtained marks for " + subOne + ":"));

// d) Take obtained marks for remaining 2 subjects from user and store them in variables.

var obtainedMarksTwo = Number(prompt("Enter obtained marks for " + subTwo + ":"));
var obtainedMarksThree = Number(prompt("Enter obtained marks for " + subThree + ":"));

// e) Now calculate total marks and percentage and show the result in browser like this

var totalObtainedMarks = obtainedMarksOne + obtainedMarksTwo + obtainedMarksThree;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

document.write("<table border='4'>");
document.write("<tr><th> SUBJECT </th> <th>TOTAL MARKS</th> <th>OBTAINED MARKS</th></tr>");
document.write("<tr><td>" + subOne + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksOne + "</td></tr>");
document.write("<tr><td>" + subTwo + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksTwo + "</td></tr>");
document.write("<tr><td>" + subThree + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksThree + "</td></tr>");
document.write("<tr><th colspan='2'>Total Marks</th><td>" + totalMarks * 3 + "</td></tr>");
document.write("<tr><th colspan='2'>Total Obtained Marks</th><td>" + totalObtainedMarks + "</td></tr>");
document.write("<tr><th colspan='2'>Percentage</th><td>" + percentage + "%</td></tr>");
document.write("</table>"); */

