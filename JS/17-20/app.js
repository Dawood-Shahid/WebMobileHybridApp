//task 1 & 2

var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    ["a", "b", "c", "d"]
];

document.write("<p><br><br><br><br>Task 1 & 2:</p><br>")
for (i = 0; i < 3; i++) {
    for (j = 0; j < 4; j++) {
        document.write(matrix[i][j] + " ");
    }
    document.write("<br>");
}

//task 3

document.write("<p><br><br><br><br>Task 3:</p><br>")

for (i = 0; i < 10; i++) {
    document.write(i+1 + "<br>");
}

// task 4, 5 & 6



//task 7

var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]

var userInput = prompt("\nTask 7:\n\nPlease enter any bakery items for search.");

for (i = 0; i < bakeryItems.length; i++) {
    if (bakeryItems[i] === userInput) {
        alert("\nTask 7:\n\n"+userInput + " is available at index " + i + " in our bakery");
        break;
    }
    else if (i+1 === bakeryItems.length && bakeryItems[i] != userInput) {
        alert("\nTask 7:\n\n"+userInput + " is not available in our bakery")
    }
}

//task 8

var numbers = [1, 100, 24, 53, 78, 999, 91, 12]
var maxNumber = numbers[0]

document.write("<p><br><br><br><br>Task 8:</p><br>")
document.write(numbers);
for (i = 0; i < numbers.length; i++) {
    if (maxNumber < numbers[i+1]) {
        maxNumber = numbers[i+1];
    }
}
document.write("<br><br> The largest number is " + maxNumber);

// task 9

var numbers = [100, 24, 53, 78, 999, 91, 1, 12]
var minNumber = numbers[0]

document.write("<p><br><br><br><br>Task 9:</p><br>")
document.write(numbers);
for (i = 0; i < numbers.length; i++) {
    if (minNumber > numbers[i+1]) {
        minNumber = numbers[i+1];
    }
}
document.write("<br><br> The smallest number is " + minNumber);

// task 10

document.write("<p><br><br><br><br>Task 10:</p><br>")
for (i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
        document.write(i + ", ");
    }
}