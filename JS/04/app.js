//task1
var userName, user_name, userName123;

//task2
document.write("<p><br><br><br><br>Task 2:</p><br>")
document.write("<p><b>Legal variables</b><br>userName, user_name, userName123, $userName, $user_Name</p>")
document.write("<p><b>Illegal variables</b><br>%username, -username, 123userName, *userName, !userName</p>")

//task3
var num = "numbers";
var dol = "$";
var hif = "_";
var lett = "letter"; 
var cas = "sensitive";
var word = "keywords";
document.write("<br><p>Task 3:</p><br><h2>Rules for naming JS variables</h2><br>");
document.write("<p>Variable names can only contain: " + num + ", " + dol + " and " + hif +". <strong>For example:</strong> $my_1stVariable</p>");
document.write("<p>Variable must begin with a: " + lett + ", " + dol + " and " + hif +". <strong>For example:</strong> $name, _name or Name</p>");
document.write("<p>Variable names are case " + cas + "</p>");
document.write("<p>Variable names should not be JS <b>"+word+"</b></p>");