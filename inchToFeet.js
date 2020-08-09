// Normal
var inch = 156;
console.log(inch);

//Again normal
var inch = 156;
var feet = inch/12;
console.log(feet);



// using function
function inchToFeet(inch){
    var feet = inch/12;
    return feet;

}
var nanaFeet = inchToFeet(156);
console.log(nanaFeet);
var naniFeet = inchToFeet(288);
console.log(naniFeet);
var dadiFeet = inchToFeet(300);
console.log(dadiFeet);

// loop use kore

function inchToFeet(inch){
    var feet = inch/12;
    return feet;

}
var senior = [156,288,300];

var nanaFeet = inchToFeet(senior[0]);
console.log(nanaFeet);
var naniFeet = inchToFeet(senior[1]);
console.log(naniFeet);
var dadiFeet = inchToFeet(senior[2]);
console.log(dadiFeet);



