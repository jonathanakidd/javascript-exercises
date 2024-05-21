const findTheOldest = function(people) {
    people.reduce((oldest, person) => {
        oldest = people[1];
        if (age(oldest) < age(person)) {
            oldest = person;
            console.log(oldest)
        }
        return oldest
    })
};



const age = function(birthYear, deathYear) {
    if (!deathYear) {
        let currentDate = new Date();
        deathYear = currentDate.getFullYear();    
    }
    return deathYear - birthYear;
}


// Do not edit below this line
module.exports = findTheOldest;
