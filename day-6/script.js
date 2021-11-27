// https://medium.com/@reach2arunprakash/guvi-zen-class-find-the-culprits-and-nail-them-9ee6c67c44fb

// Find the culprit and invoke the alert
alert(`I’m invoked!`);

// Fix the below to alert Guvi geek
let admin = 9,
  fname = 10.5;
fname = "Guvi";
lname = "geek";
admin = fname + lname;
alert(admin); // "Guvi geek"

// Fix the below to alert hello Guvi geek
let fname = 10.5;
fname = "Guvi";
lname = "geek";
let name = fname + lname;
alert(`hello ${fname} ${lname}`);

// Fix the below to alert sum of two numbers
let a = parseInt(prompt("First number?"));
let b = parseInt(prompt("Second number?"));
alert(a + b);

// If you run the below scritpt you will get “Code is Blasted”
// Explain Why the Code is blasted and how to diffuse it and get “Diffused”

var a = "2" > "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted");
} else {
  console.log("Diffused");
}
// This is because when comparing 2 and 12 the condition becomes true and hence we get true
// If we make the condition to fail (12>2) we can get diffused

// How to get the success in console.
let a = prompt("Enter a number?");
//Don't modify any code below this
if (a) {
  console.log("OMG it works for any number inc 0");
} else {
  console.log("Success");
}
// When we press cancel on the prompt we can get success in the console

// How to get the correct score in console?
let value = parseInt(prompt("How many runs you scored in this ball"));
if (value === 4) {
  console.log("You hit a Four");
} else if (value === 6) {
  console.log("You hit a Six");
} else {
  console.log("I couldn't figure out");
}
// Convert the string to integer using parseInt and enter the value in the prompt

// Fix the code to welcome the Employee
let login = "Employee";
let message =
  login == "Employee"
    ? "Welcome"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
console.log(message);

// Fix the code to welcome the boss
let message = 2;
if (null || 2 || undefined) {
  message = "welcome boss";
} else {
  message = "Go away";
}
console.log(message);

// Fix the code to welcome the boss
let message;
let lock;
//Dont change any code below this
if (null || lock || undefined) {
  message = "Go away";
} else {
  message = "welcome";
}
console.log(message);

// Fix the code to welcome the boss
let message;
let lock;
//Dont change any code below this
if ((lock && " ") || undefined) {
  message = "Go away";
} else {
  message = "welcome";
}
console.log(message);

// Change the code to print
3;
2;
1;
// You can change only 2 characters
let i = 3;
while (i) {
  console.log(i--);
}

// Change the code to print 1 to 10 in 4 lines
let num = 1;
for (num; num <= 10; num++) {
  console.log(num);
}

// Change the code to print even numbers
// You are allowed to modify only one character
for (let num = 2; num <= 20; num += 2) {
  console.log(num);
}

// Change the code to print all the gifts
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

// Fix the code to disarm the bomb.
let countdown = -1;
while (countdown > 0) {
  countdown--;
  if (countdown == 0) {
    console.log("bomb triggered");
  }
}

// Whats the msg printed and why?
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
  msg += "hi";
}
if (lemeout) {
  msg += "Hello";
}
console.log(msg);
// Messgae printed is hi because the first condition passess
// and the second fails since 0 is false
