const removeFromArray = function(array, ...removals) {
    console.log(removals)
    for (i = 0; i <= removals.length; i ++) {
        let match = removals[i];
        let index = array.indexOf(match);;
        if (index > -1) {
            array.splice(index, 1)
        }
    }
    console.log(array)
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
