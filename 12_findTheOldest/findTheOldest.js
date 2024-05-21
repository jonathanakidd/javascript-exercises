const findTheOldest = function(people) {
    oldest = people[0];
    return people.reduce((oldest, person) => {
        if (age(oldest.yearOfBirth, oldest.yearOfDeath) < age(person.yearOfBirth, person.yearOfDeath)) {
            oldest = person;
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
