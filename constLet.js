// const means fixed value

function inchToFeet(inch){
    const feet = inch/12;
    return feet;

}
const nanaFeet = inchToFeet(156);
console.log(nanaFeet);
const naniFeet = inchToFeet(288);
console.log(naniFeet);
const dadiFeet = inchToFeet(300);
console.log(dadiFeet);

// let means not fixed value(it may changed or not changed.nothing matter)
let age =15;

let name = "zabed";
if(name.length>4){
    name="Dab";
}
console.log(name);

