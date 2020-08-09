// for recursive
for(var i = 10; i>=1; i--){
    console.log(i);
}

//factorial for loop recursive
var factorial = 10;
for(var i = 10; i>=1; i--){
    factorial = factorial * i;
}
console.log(factorial);


//while recursive
var i = 10;
while(i>=1;){
    console.log(i);
    i--;
}



// function recursive

function factorial(n){
    if (n==0){
        return 1;
    } else {
        return n * factorial(n-1);
    }
}
var result = factorial(10);
console.log(result);