var date = new Date();

//task1
document.write("<br><br><br><br>Task 1<br><br>");
document.write(date);

//task2
var fullMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.write("<br><br><br><br>Task 2<br><br>");
document.write("Current month: " + fullMonth[date.getMonth()]);


//task3
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

document.write("<br><br><br><br>Task 3<br><br>");
document.write("Today is " + days[date.getDay()]);

//task4
document.write("<br><br><br><br>Task 4<br><br>");

if (date.getDay() === 0 || date.getDay() === 6) {
    document.write("It’s Fun day");
}

//task5
document.write("<br><br><br><br>Task 5<br><br>");

if (date.getDate() <= 15) {
    document.write("First fifteen days of the month");
}
else {
    document.write("Last days of the month");
}

//task9
var ramadan2015 = new Date("June 18, 2015");
var timeDiffer = date.getTime() - ramadan2015.getTime();
var daysPast = Math.floor(timeDiffer / (1000 * 60 * 60 * 24));

document.write("<br><br><br><br>Task 9<br><br>");
document.write(daysPast + " days past since 1st Ramadan 2015");

//task13
var userAge = + prompt("\nTask 13:\n\nEnter your age:");
var birthYear = date.getFullYear() - userAge;

document.write("<br><br><br><br>Task 13<br><br>");
document.write("Your birth age is: " + userAge);
document.write("<br>Your birth year is: " + birthYear);