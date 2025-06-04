// 1. City Name
var city = prompt("Enter your city:");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}

// 2. Gender
var gender = prompt("Enter your gender (male/female):");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma’am.");
} else {
    alert("Good Morning!");
}

// 3. Traffic Signal
var signal = prompt("Enter traffic signal color:");
if (signal.toLowerCase() === "red") {
    alert("Must Stop");
} else if (signal.toLowerCase() === "yellow") {
    alert("Ready to move");
} else if (signal.toLowerCase() === "green") {
    alert("Move now");
} else {
    alert("Invalid color");
}

// 4. Fuel Check
var fuel = parseFloat(prompt("Enter remaining fuel in liters:"));
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// 5. Condition Checks
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

// 6. Marks Sheet
var totalMarks = 300;
var sub1 = parseInt(prompt("Enter marks of Subject 1:"));
var sub2 = parseInt(prompt("Enter marks of Subject 2:"));
var sub3 = parseInt(prompt("Enter marks of Subject 3:"));
var obtained = sub1 + sub2 + sub3;
var percentage = (obtained / totalMarks) * 100;

var grade = "";
var remarks = "";

if (percentage >= 80) {
    grade = "A+";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

alert("Total Marks: " + totalMarks + "\nMarks Obtained: " + obtained + "\nPercentage: " + percentage.toFixed(2) + "%\nGrade: " + grade + "\nRemarks: " + remarks);

// 7. Guess Game
var secretNumber = 7;
var guess = parseInt(prompt("Guess the secret number (1-10):"));

if (guess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Wrong guess!");
}

// 8. Divisible by 3
var number = parseInt(prompt("Enter a number:"));
if (number % 3 === 0) {
    alert("Number is divisible by 3");
} else {
    alert("Number is not divisible by 3");
}

// 9. Even or Odd
var num = parseInt(prompt("Enter a number:"));
if (num % 2 === 0) {
    alert("Even number");
} else {
    alert("Odd number");
}

// 10. Temperature Message
var temp = parseInt(prompt("Enter the temperature:"));
if (temp > 40) {
    alert("It is too hot outside.");
} else if (temp > 30) {
    alert("The Weather today is Normal.");
} else if (temp > 20) {
    alert("Today’s Weather is cool.");
} else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It’s freezing!");
}

// 11. Simple Calculator
var num1 = parseFloat(prompt("Enter first number:"));
var num2 = parseFloat(prompt("Enter second number:"));
var op = prompt("Enter operation (+, -, *, /, %):");
var result;

if (op === "+") {
    result = num1 + num2;
} else if (op === "-") {
    result = num1 - num2;
} else if (op === "*") {
    result = num1 * num2;
} else if (op === "/") {
    result = num1 / num2;
} else if (op === "%") {
    result = num1 % num2;
} else {
    alert("Invalid operator");
}

if (result !== undefined) {
    alert("Result: " + result);
}
