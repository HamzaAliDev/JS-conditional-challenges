// 17. Write a ts program to find
//  all roots of a quadratic equation.
var a=2
var b=4
var c=6
var root= b**2-4*a*c
if (root>0) {
    console.log("equation has two distinct real root",root);
} 
else if(root==0){
    console.log("equation has one real root",root);
}
else {
    console.log("two complex conjugate root",root);
}