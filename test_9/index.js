// Write a ts program to input any character and
//  check whether it is alphabet, digit or special character
var num=prompt("Write any single character")
if (num=='a' ||num=='b' ||num=='c' ||num=='d'||num=='e' ||num=='f' ||num=='g' ||num=='h'||num=='i' ||num=='j' ||num=='k' ||num=='l'||num=='m' ||num=='n' ||num=='o' ||num=='p'||num=='q' ||num=='r' ||num=='s' ||num=='t'||num=='u' ||num=='v' ||num=='w' ||num=='x'||num=='y' ||num=='z') {
    console.log("alphabet");
}
else if (num==0 ||num==1 ||num==2 ||num==3 ||num==4 ||num==5 ||num==6 ||num==7 ||num==8 ||num==9) {
    console.log("digit");
} 
else {
    console.log("special character");
}