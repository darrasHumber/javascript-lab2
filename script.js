/*
Step 2: If-else Conditional Statement
Write a simple program in script.js to check if a number is positive, negative, or zero using an if-else statement.
I will use a function to make the code reusable.
*/
console.log("If-else Conditional Statement\n\n");
function positiveOrNegative(number) {
  if (number > 0) {
    return `${number} is a positive number`;
  } else if (number < 0) {
    return `${number} is a negative number`;
  } else {
    return `${number} is zero`;
  }
}
let number = 7; // Assign any number here
console.log(`number is: ${number}`);
console.log(positiveOrNegative(number)); // Output: 7 is a positive number
console.log("+++++++++++++++++++++++++++++++++++++++++++++");
number = -7;
console.log(`number is: ${number}`);
console.log(positiveOrNegative(number)); // Output: -7 is a negative number
console.log("+++++++++++++++++++++++++++++++++++++++++++++");
number = 0;
console.log(`number is: ${number}`);
console.log(positiveOrNegative(number)); // Output: 0 is zero

console.log("\n=============================================\n\n");
/*
Step 3: Switch Statement

Create a program that takes a number (1 to 7) and prints the corresponding day of the week.
*/
console.log("Switch Statement\n\n");
function dayOfWeek(day) {
  switch (day) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid day";
  }
}

number = 3; // Assign any number between 1 to 7 here
console.log(`number is: ${number} and day is: ${dayOfWeek(number)}`); // Output: number is: 3 and day is: Tuesday

number = 7; // Assign any number between 1 to 7 here
console.log(`number is: ${number} and day is: ${dayOfWeek(number)}`); // Output: number is: 7 and day is: Saturday

number = 8;
console.log(`number is: ${number} and day is: ${dayOfWeek(number)}`); // Output: number is: 8 and day is: Invalid day

console.log("\n=============================================\n\n");
/*
Step 4: Loops (For, While, Do...While)
Practice using loops to print numbers from 1 to 5. Implement this using for, while, and do...while loops.
*/
console.log("Loops (For, While, Do...While)\n\n");

console.log("For Loop");

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("+++++++++++++++++++++++++++++++++++++++++++++");
console.log("While Loop");
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
console.log("+++++++++++++++++++++++++++++++++++++++++++++");
console.log("Do...While Loop");
i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

/*
Step 5: Control Flow with break and continue

Modify your loop to stop when it reaches the number 3 using break. Try skipping the number 3 with continue.
*/
console.log("\n=============================================\n\n");
console.log("Control Flow with break and continue\n\n");
console.log("Break");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
console.log("\n=============================================\n\n");
console.log("Continue");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

console.log("\n=============================================\n\n");
/*Step 6: Scope and Context

Explore scope by declaring variables inside and outside functions. Test which variables you can access.
*/
console.log("Scope and Context\n\n");
let globalVariable = "I am a global variable"; //global variable accessible everywhere outside and inside the function
function scopeTest() {
  let localVariable = "I am a local variable"; //local variable accessible only inside the function
  console.log(localVariable);
  console.log(globalVariable);
}
scopeTest();
console.log("+++++++++++++++++++++++++++++++++++++++++++++");
console.log(
  "Now we will try to access the local variable outside the function usoing try-catch block"
);
try {
  console.log(localVariable); //ReferenceError: localVariable is not defined
} catch (error) {
  console.log(error);
}
