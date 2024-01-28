//  Write a ts program to input all sides of a triangle
//  and check whether triangle is valid or not.
var side1=parseInt(prompt("enter first length"))
var side2=parseInt(prompt("enter second length"))
var side3=parseInt(prompt("enter third length"))
if (side1+side2 > side3 && side1+side3 > side2 && side3+side2 > side1) {
    console.log("valid");
}
else {
    console.log("not valid");
}