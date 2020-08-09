// normal while loop
var i = 0;
while(i <=10){
    console.log(i);
    i++;
}

// factorial while

var i = 1;
var factorial = 1;
while(i <=10){
    factorial = factorial * i;
    //console.log(factorial); 
    //console.log(i, factorial);
    i++;
}
console.log(factorial); 


// using function

function factorial(n){
    var i = 1;
    var fact =1;
    while (i<=n){
        fact= fact*i;
        i++;
    }
    return fact(10);
}
var result = factorial(10);
console.log(result);