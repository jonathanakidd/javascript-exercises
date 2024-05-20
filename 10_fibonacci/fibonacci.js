const fibonacci = function(sequence) {
    sequence = Number(sequence) -1;
    console.log(sequence)
    let numbers = [1,1];
    for (i = 2; i <= sequence; i++) {
            numbers.push(numbers[i-2] + numbers[i-1]);
        }
    console.log(numbers);
    return numbers[sequence];
};

// Do not edit below this line
module.exports = fibonacci;
