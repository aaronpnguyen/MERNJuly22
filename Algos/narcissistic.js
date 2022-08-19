function narcissistic(value) {
    let numString = value.toString();
    let sum = 0;
    for (let i of numString) {
        sum += Math.pow(parseInt(i), numString.length);
    }
    return sum === value
}

console.log(narcissistic(153))