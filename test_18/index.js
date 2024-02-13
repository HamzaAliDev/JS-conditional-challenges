// Write a ts program to input marks of five subjects
//  Physics, Chemistry, Biology, Mathematics and Computer.
//  Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
var t1=parseInt(prompt("Biology total marks:"))
var bio=parseInt(prompt("Biology obtain marks:"))
var t2=parseInt(prompt("Physics total marks:"))
var phy=parseInt(prompt("Physics obtain marks:"))
var t3=parseInt(prompt("Chemistry total marks:"))
var chem=parseInt(prompt("chemistry obtain marks:"))
var t4=parseInt(prompt("Math total marks:"))
var math=parseInt(prompt("Math obtain marks:"))
var t5=parseInt(prompt("Computer total marks:"))
var com=parseInt(prompt("computer obtain marks:"))
var total=t1+t2+t3+t4+t5
var totalObtain=bio+phy+chem+math+com
var per=totalObtain/total*100
console.log(per,"%");
if (per>=90) {
    console.log("Grade A");
}
else if (per>=80) {
    console.log("Grade B");
}
else if (per>=70) {
    console.log("Grade C");
}
else if (per>=60) {
    console.log("Grade D");
}
else if (per>=40) {
    console.log("Grade E");
}
else{
    console.log("Grade F");
}