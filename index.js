// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};


const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(times){
    return function (fare){
        return fare * times
    }
}

function fareDoubler(double){
    return double * 2
}

function fareTripler(triple){
    return triple * 3
}

function selectDifferentDrivers(drivers, selectionFunction) {
    return selectionFunction(drivers);
}
