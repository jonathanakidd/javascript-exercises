const findTheOldest = function(people) {
    
};



const age = (birthYear, deathYear) {
    if (!deathYear) {
        let currentDate = new Date();
        deathYear = currentDate.getFullYear();    
    }
    return deathYear - birthYear;
}


// Do not edit below this line
module.exports = findTheOldest;
