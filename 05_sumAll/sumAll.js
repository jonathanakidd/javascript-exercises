const sumAll = function(firstInt, secondInt) {
    let error = errorCheck(firstInt, secondInt)
    while (error == false) {
        let sum = 0;
        let beginning = 0;
        let end = 0;
        //Check to see which int is greater to determine start order
        if (firstInt < secondInt) {
            beginning = firstInt;
            end = secondInt;
        }
        else {
            beginning = secondInt;
            end = firstInt;
        }
        for (i = beginning; i <= end; i++) {
            sum += i;
            console.log(sum)
        }
        return sum
    };
    if (error == true) {
        return "ERROR"
    }
}
const errorCheck = function(firstInt, secondInt) {
    if ((Number.isInteger(firstInt) == false) || (Number.isInteger(secondInt) == false)) {
        return true;
    }
    else if (firstInt < 0 || secondInt< 0) {
        return true;
    }
    else {
        return false;
    }
}


// Do not edit below this line
module.exports = sumAll;
