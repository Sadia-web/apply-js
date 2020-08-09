function isPrime(n){
    for(i = 2; i<n; i++){
        if(n%i == 0){
            return "Not Prime"
        }
    }
    return "Prime";
}
var check = isPrime(75);
console.log(check);
