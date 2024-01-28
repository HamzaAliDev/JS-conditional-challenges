// 16. Write a ts program to check whether the triangle 
// is equilateral, isosceles or scalene triangle.
var side1=10
var side2=10
var side3=8
var angle1=80
var angle2=40
var angle3=60
if (side1 ==side2 && side1==side3 && angle1 ==angle2 && angle1==angle3) {
    console.log("equileteral triangle");
}
else if (side1!=side2 && side1!=side3 &&side2!=side3 && angle1!=angle2 && angle1!=angle3 &&angle2!=angle3) {
    console.log("scalene triangle");
} 
else if (side1==side2 && side1!=side3||side2==side3 && side2!=side1||side1==side3 && side1!=side2 ){
    console.log("isosceles triangle");
}
else {
    console.log("nothing");
}