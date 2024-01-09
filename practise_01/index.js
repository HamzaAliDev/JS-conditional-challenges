// Write a program that asks the user for their age,
// and then outputs a message saying
//  "You are old enough to vote" if their age is 18 or older.

var userAge= parseInt(prompt("Write your age:","18"))
if (userAge >= 18) {
    console.log("You are old enough to vote");
}
 else {
    console.log("You are not old enough to vote");
}