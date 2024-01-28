//  Write a ts program to input angles of a triangle
//  and check whether triangle is valid or not.
var angle1=parseInt(prompt("enter first angle."))
var angle2=parseInt(prompt("enter second angle."))
var angle3=parseInt(prompt("enter third angle."))
if (angle1+angle2+angle3 ==180) {
    console.log("valid");
}
else {
    console.log("not valid");
}