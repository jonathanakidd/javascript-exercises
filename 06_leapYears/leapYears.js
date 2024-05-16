const leapYears = function(year) {
    let leapyear = true;
    while (leapyear == true) {
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                if (year % 400 != 0) {
                    leapyear = false;
                }
                else {
                    return leapyear
                }
            }
        }
        else {
            leapyear = false;
        }
        return leapyear
    }
}

// Do not edit below this line
module.exports = leapYears;
