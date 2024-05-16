const repeatString = function(string, iteration) {
    if (iteration < 0) {
        return "ERROR"
    }
    else {
        let output = ''
        let loop = iteration;
        for (i = 0; i < iteration; i++) {
            output += string;
        }
        return output;
    }
};

// Do not edit below this line
module.exports = repeatString;
