function distanceFromHqInBlocks(num) {
    if (num > 42) {
        return num - 42;
    } else if (num < 42) {
        return 42 - num;
    } else {
        return 0;
    }
};

function distanceFromHqInFeet(num) {
    return distanceFromHqInBlocks(num) *  264;
};

function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start) * 264;
    } else if (destination < start) {
        return (start - destination) * 264;
    } else {
        return 0;
    }
};

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0;
    } else if (feet <= 2000) {
        return (feet - 400) * 0.02;
    } else if (feet <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}
