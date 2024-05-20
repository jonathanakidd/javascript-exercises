const fibonacci = function(sequence) {
    sequence = Number(sequence);
    let numbers = [];
    for (i = (sequence-1); i < sequence; i++) {
        if (i < 2) {
            numbers.push(1);
        }
        else {
            numbers.push(numbers[i-2] + numbers[i-1]);
        }
    }
    console.log(numbers);
    return numbers[sequence -1];
};

// Do not edit below this line
module.exports = fibonacci;
