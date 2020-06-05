//task 1

var studentNames = [];

//task 2

var studentNames = new Array();

//task 3 to 6

var strings = ["apple", "orrange"];
var numbers = [1, 2, 3];
var boolean = [true, false];
var mixdArray = ["apple", "orrange", 1, 2, 3, true, false];

//task 7

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

document.write("<p><br><br><br><br>Task 7:</p><br>")
document.write("<h1>Qualifications:</h1><br>")
document.write("1) " +qualifications[0]+ "<br>")
document.write("2) " +qualifications[1]+ "<br>")
document.write("3) " +qualifications[2]+ "<br>")
document.write("4) " +qualifications[3]+ "<br>")
document.write("5) " +qualifications[4]+ "<br>")
document.write("6) " +qualifications[5]+ "<br>")
document.write("7) " +qualifications[6]+ "<br>")
document.write("8) " +qualifications[7]+ "<br>")

//task 8

document.write("<p><br><br><br><br>Task 8:</p><br>")
var studentNames = ["Ahmed Ali", "Aizaz Nadeem", "Dawood Shahid", "Talha Siddique"];
var studentMarks = [480, 330, 250, 450];
var totalMarks = 500;
var studentPercentage = [];

studentPercentage[0] = (studentMarks[0] / totalMarks) * 100;
studentPercentage[1] = (studentMarks[1] / totalMarks) * 100;
studentPercentage[2] = (studentMarks[2] / totalMarks) * 100;
studentPercentage[3] = (studentMarks[3] / totalMarks) * 100;

document.write("Marks of " + studentNames[0] + " is " + studentMarks[0] + " and percentage is " + studentPercentage[0] + "%<br>")
document.write("Marks of " + studentNames[1] + " is " + studentMarks[1] + " and percentage is " + studentPercentage[1] + "%<br>")
document.write("Marks of " + studentNames[2] + " is " + studentMarks[2] + " and percentage is " + studentPercentage[2] + "%<br>")
document.write("Marks of " + studentNames[3] + " is " + studentMarks[3] + " and percentage is " + studentPercentage[3] + "%<br>")

// task 9

// a
var colorsA = ["red", "green", "brown", "orange"];
var userInputBegn = prompt("\nTask 9(a):\n\n" + colorsA + "\nEnter a color that you want to add in the beginning.");


document.write("<p><br><br><br><br>Task 9(a):</p><br>")
document.write("<br>Array before upadte:<br>");
document.write(colorsA);

document.write("<br>Array after upadte:<br>");
colorsA.unshift(userInputBegn);
document.write(colorsA);

// b
var colorsB = ["red", "green", "brown", "orange"];
var userInputEnd = prompt("\nTask 9(b):\n\n" + colorsB + "\nEnter a color that you want to add in the end.");

document.write("<p><br><br><br><br>Task 9(b):</p><br>")
document.write("<br>Array before upadte:<br>");
document.write(colorsB);

document.write("<br>Array after upadte:<br>");
colorsB.push(userInputEnd);
document.write(colorsB);

// c
var colorsC = ["red", "green", "brown", "orange"];
var userInput1 = prompt("\nTask 9(c):\n\n" + colorsC +"\nEnter first color that you want to add in the begning.");
var userInput2 = prompt("\nTask 9(c):\n\n" + colorsC +"\nEnter second color that you want to add in the begning.");

document.write("<p><br><br><br><br>Task 9(c):</p><br>")
document.write("<br>Array before upadte:<br>");
document.write(colorsC);

document.write("<br>Array after upadte:<br>");
colorsC.unshift(userInput1, userInput2);
document.write(colorsC);

// d
var colorsD = ["red", "green", "brown", "orange"];

document.write("<p><br><br><br><br>Task 9(d):</p><br>")
document.write("<br>Array before upadte:<br>");
document.write(colorsD);

document.write("<br>Array after upadte:<br>");
colorsD.shift();
document.write(colorsD);

// e
var colorsE = ["red", "green", "brown", "orange"];

document.write("<p><br><br><br><br>Task 9(e):</p><br>")
document.write("<br>Array before upadte:<br>");
document.write(colorsE);

document.write("<br>Array after upadte:<br>");
colorsE.pop();
document.write(colorsE);

// f
var colorsF = ["red", "green", "brown", "orange"];
var userAddArrayIndex = +prompt("\nTask 9(f):\n\n" + colorsF +"\nEnter the position number where you want to add a color.");
var userInput1 = prompt("\nTask 9(f):\n\n" + colorsF +"\nEnter first color that you want to add in the begning.");

document.write("<p><br><br><br><br>Task 9(f):</p><br>")
document.write("<br>Array before upadte:<br>");
document.write(colorsF);

document.write("<br>Array after upadte:<br>");
colorsF.splice(userAddArrayIndex-1, 0, userInput1);
document.write(colorsF);

// g
var colorsG = ["red", "green", "brown", "orange"];
var userRemArrayIndex = +prompt("\nTask 9(g):\n\n" + colorsG +"\nEnter the position number where you want to remove a color.");
var userArrayEleRemove = +prompt("\nTask 9(g):\n\n" + colorsG +"\nEnter the number of elements that you want to remove.");

document.write("<p><br><br><br><br>Task 9(g):</p><br>")
document.write("<br>Array before upadte:<br>");
document.write(colorsG);

document.write("<br>Array after upadte:<br>");
colorsG.splice(userRemArrayIndex-1, userArrayEleRemove);
document.write(colorsG);

// task 10

var studentMarks = [320, 230, 480, 120];

document.write("<p><br><br><br><br>Task 10:</p><br>")
document.write("<br>Array before upadte:<br>");
document.write(studentMarks);

document.write("<br>Array after upadte:<br>");
studentMarks.sort();
document.write(studentMarks);
