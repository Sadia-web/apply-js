// for loop

var n = 18;
for(i=2; i< = n-1; i++){
    console.log(i, n/i);
}

// 

var n = 18;
for(i=2; i<n-1; i++){
    console.log(i, n%i);
}

// if

var n = 18;
for(i=2; i<n; i++){
    //console.log(i, n/i);
    if(n%i == 0){
        console.log('Not Prime');
        break;
    }
}
console.log("prime");

// function (This answer is okay)

function isPrime(n){
    for(i = 2; i < n; i++){
        if (n % i == 0) {
            return "Not Prime Number";
        }
    }
    return " prime";
}
var result = isPrime(128);
console.log(result);
