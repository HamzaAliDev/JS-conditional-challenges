// Write a ts program to calculate profit or loss.
var cp=parseInt(prompt("cost of product"))
var sp=parseInt(prompt("sale price"))
var r=(sp-cp)/cp*100
if (r>0) {
    console.log(r,"%profit");
}
else if (r<0) {
    console.log(r,"%loss");
}
else{
    console.log("no profit no loss");
}