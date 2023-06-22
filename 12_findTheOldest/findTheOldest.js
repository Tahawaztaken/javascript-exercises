"use strict";
const findTheOldest = function(people) {
    let presentYear = 2023
    let oldestPerson = null;
    let oldestAge = 0

    for (let i = 0; i < people.length; i++) {
        if (people[i]["yearOfDeath"] === undefined) {
            let age = 2023 - people[i]["yearOfBirth"]
            if (age > oldestAge) {
                oldestPerson = people[i]
                oldestAge = age
            }
        }
        let age = people[i]["yearOfDeath"] - people[i]["yearOfBirth"]
        if (age > oldestAge) {
            oldestPerson = people[i]
            oldestAge = age
        }
    }
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
