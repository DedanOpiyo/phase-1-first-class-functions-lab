// Code your solution in this file!

// The assigned function should take one argument, an array containing the names of Scuber's drivers, and return a new array containing the first two drivers in the array:
const returnFirstTwoDrivers = function(arrayOfDriverNames) {
    return arrayOfDriverNames.slice(0, 2); // returns an array of what is removed.
}

returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])
// => ['Antonia', 'Nuru']


// The assigned function should take one argument, an array containing the names of Scuber's drivers, and return a new array containing the last two drivers in the array
const returnLastTwoDrivers = function(arrayOfDriverNames) {
    return arrayOfDriverNames.slice(-2); // slice non-destructively modifies the originam array. (-2 means remove from second last to the end).
}


returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])
// => ['Amari', 'Mo']


// selectingDrivers — This is an array containing two elements: the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. 
// For example, if createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.
function createFareMultiplier(anIntegerMultiplier) {
    return function(fare) {
        return fare * anIntegerMultiplier;
    }
}

// fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
// Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.

const fareDoubler = createFareMultiplier(2);


// fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
// Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.

const fareTripler = createFareMultiplier(3);


// selectDifferentDrivers() returns the first two drivers when passed returnFirstTwoDrivers() as the second argument.
// returns the last two drivers when passed returnLastTwoDrivers() as the second argument.
function selectDifferentDrivers(arrayOfDrivers, functionArgument) {
    return functionArgument(arrayOfDrivers); 
}
