//task3

document.write("<p><br><br><br><br>Task 3:</p><br>");
var trafficLightColor = prompt("Task 3:\n\nEnter a Traffic Light Color.");
var instructions;

if(trafficLightColor === "Red" || trafficLightColor === "red"){
    instructions = "Must Stop";
}
else if(trafficLightColor === "Yellow" || trafficLightColor === "yellow"){
    instructions = "Read to Move";
}
else if(trafficLightColor === "Green" || trafficLightColor === "green"){
    instructions = "Move now";
}
else{
    instructions = "Wrong color entered"
}

document.write("<h1>Traffic Instructions:</h1>")
document.write("<h3>"+ instructions +"</h3>");

//task5

var a = 4;
if (++a === 5){
alert("Task 5(a):\n\nGiven condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("Task 5(b):\n\nGiven condition for variable b is true");         //not execute
}

var c = 12;
if (c++ === 13){
alert("Task 5(c):\n\nCondition 1 is true");                            //not execute
}
if (c === 13){
alert("Task 5(c):\n\nCondition 2 is true");
}
if (++c < 14){
alert("Task 5(c):\n\nCondition 3 is true");                            //not execute
}
if(c === 14){
alert("Task 5(c):\n\nCondition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("Task 5(d):\n\nThe cost equals");
}

if (true){
alert("Task 5(e):\n\nTrue");
}
if (false){
alert("Task 5(d):\n\nFalse");
}
if("cow" > "cat"){                                      //also check the alphabetical order
    // alert("car is smaller than cat");
    alert("Task 5(f):\n\nCow is grater than cat");
}

//task6

document.write("<p><br><br><br><br>Task 3:</p><br>");
var subject1 = prompt("Enter Subject 1 nanme");
var subject2 = prompt("Enter Subject 2 nanme");
var subject3 = prompt("Enter Subject 3 nanme");
var totalMarks = 75;
var sub1Marks = +prompt("Enter Subject 1 marks (out of 75)")
var sub2Marks = +prompt("Enter Subject 2 marks (out of 75)")
var sub3Marks = +prompt("Enter Subject 3 marks (out of 75)")
var sub1Per = (sub1Marks / totalMarks) * 100;
var sub2Per = (sub2Marks / totalMarks) * 100;
var sub3Per = (sub3Marks / totalMarks) * 100;
var sub1Grade;
var sub2Grade;
var sub3Grade;
var grandTotal = 225;
var grandTotalObt = sub1Marks + sub2Marks + sub3Marks;
var percentage = (grandTotalObt/grandTotal)*100; 
var grade;

if (sub1Per >= 80) {
    sub1Grade = "A1";
}
else if (sub1Per >= 70 && sub1Per < 80) {
    sub1Grade = "A";
}
else if (sub1Per >= 60 && sub1Per < 70) {
    sub1Grade = "B";
}
else {
    sub1Grade = "Fail";
}

if (sub2Per >= 80) {
    sub2Grade = "A1";
}
else if (sub2Per >= 70 && sub2Per < 80) {
    sub2Grade = "A";
}
else if (sub2Per >= 60 && sub2Per < 70) {
    sub2Grade = "B";
}
else {
    sub2Grade = "Fail";
}

if (sub3Per >= 80) {
    sub3Grade = "A1";
}
else if (sub3Per >= 70 && sub1Per < 80) {
    sub3Grade = "A";
}
else if (sub3Per >= 60 && sub3Per < 70) {
    sub3Grade = "B";
}
else {
    sub3Grade = "Fail";
}

if (percentage >= 80) {
    grade = "A1";
}
else if (percentage >= 70 && percentage < 80) {
    grade = "A";
}
else if (percentage >= 60 && percentage < 70) {
    grade = "B";
}
else {
    grade = "Fail";
}

document.write("<h1>Marksheet</h1>");
document.write("<table>" +
    "<tr> <th>Subject</th> <th>Total</th> <th>Obtained</th> <th>Presentage</th> <th>Grade</th> </tr>" +
    "<tr> <td>" + subject1 + "</td> <td>" + totalMarks + "</td> <td>" + sub1Marks + "</td> <td>" + sub1Per + "% </td> <td>" + sub1Grade + "</td> </tr>" +
    "<tr> <td>" + subject2 + "</td> <td>" + totalMarks + "</td> <td>" + sub2Marks + "</td> <td>" + sub2Per + "% </td> <td>" + sub2Grade + "</td> </tr>" +
    "<tr> <td>" + subject3 + "</td> <td>" + totalMarks + "</td> <td>" + sub3Marks + "</td> <td>" + sub3Per + "% </td> <td>" + sub3Grade + "</td> </tr>" +
    "<tr> <th>Grand Total</th> <td>" + grandTotal + "</td> <td>" + grandTotalObt + "</td> <td>" + percentage + "% </td> <td>" + grade + "</td> </tr>" +
    "</table>");