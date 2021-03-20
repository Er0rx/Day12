function sumFibonacci(num) {
    if(num === 1) {
        return 1;
    }

    var fibArray = [0, 1];
    var sum = 0;

    while(num >= fibArray[fibArray.length - 1]) {
        if (fibArray[fibArray.length - 1] % 2 !== 0) {
            sum += fibArray[fibArray.length - 1];
        }
        fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
    }
    
    return sum
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));

module.exports = sumFibonacci;
