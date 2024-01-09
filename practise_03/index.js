// Write a program that prompts the user to enter two numbers,and then outputs a message saying
// "The first number is greater" if the first number is greater than the second number,
// "The second number is greater"if the second number is greater than the first number,
//  or "The numbers are equal" if they are the same.

var num1= parseInt(prompt("Enter first value:"))
var num2= parseInt(prompt("Enter second value:"))
if (num1 > num2) {
    console.log("The first number is greater.");
}
 else {
    console.log("The second number is greater");
}

