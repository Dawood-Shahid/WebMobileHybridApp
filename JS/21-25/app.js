//task1
var firstName = prompt("\nTask 1:\n\nEnter your first name:");
var lastName = prompt("\nTask 1:\n\nEnter your last name:");
var fullName = firstName.concat(" " + lastName)

document.write("<br><br><br><br>Task 1<br><br>")
document.write("Hellow! Welcome " + fullName);

//task2
var mobileModel = prompt("\nTask 2:\n\nEnter your favorite mobile phone model:");
var modelLength = mobileModel.length;

document.write("<br><br><br><br>Task 2<br><br>")
document.write("Your favorite mobile phone model is: " + mobileModel);
document.write("<br>Length of string: " + modelLength);

//task3&5
var string = "Pakistan";
var index = string.indexOf('k');
var char = string.charAt(5);

document.write("<br><br><br><br>Task 3 & 5<br><br>")
document.write("String: " + string);
document.write("<br>Index of 'k': " + index);
document.write("<br>Character at index 5: " + char);

//task4
var string = "Hello World";
var index = string.lastIndexOf('l');

document.write("<br><br><br><br>Task 4<br><br>")
document.write("String: " + string);
document.write("<br>Last index of 'l': " + index);

//task7
var city = "Hyderabad";

document.write("<br><br><br><br>Task 7<br><br>")
document.write("Cirt: " + city);
var city = city.replace("Hyder", "Islam")
document.write("<br>City after replace: " + city);

//task8
var message = "Ali and Sami are best friends. They play cricket and football together.";

document.write("<br><br><br><br>Task 8<br><br>")
document.write("Before replace: " + message);
var message = message.replace(/and/g, "&")
document.write("<br>After replace: " + message);

//task13
var userName = prompt("\nTask 13:\n\nEnter your full name:");
var specialSymbol = ["!", ",", ".", "@"];
var message = null;

for (i = 0; i < userName.length; i++) {
    for (j = 0; j < specialSymbol.length; j++) {
        if (userName[i] === specialSymbol[j]) {
            message = "Please enter a valid user name";
        }
    }
}

if (!message){
    document.write("<br><br><br><br>Task 13<br><br>")
    document.write("Hellow! Welcome " + userName);
}
else {
    alert("\nTask 13:\n\n" + message);
}

//task14
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]
var userInput = prompt("\nTask 14:\n\nPlease enter any bakery items for search.").toLowerCase();

for (i = 0; i < bakeryItems.length; i++) {
    if (bakeryItems[i] === userInput) {
        document.write("<br><br><br><br>Task 14:<br><br> "+userInput + " is available at index " + i + " in our bakery");
        break;
    }
    else if (i+1 === bakeryItems.length && bakeryItems[i] != userInput) {
        document.write("<br><br><br><br>Task 14:<br><br>"+userInput + " is not available in our bakery");
    }
}

//task18
var string = "The quick brown fox jumps over the lazy dog";
var word = null;
var counter = 0;

for (i = 0; i < string.length; i++) {
    word = string.slice(i, i + 4);
    if (word === "the " || word === "The ") {
            counter++;
    }
}

document.write("<br><br><br><br>Task 18:<br><br>");
document.write("Text: " + string);
document.write("<br>There are " + counter + " occurances of the word 'the'");
