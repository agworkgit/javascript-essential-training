/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

// function declaration

function hunger(name) {
    console.log(`${name} is hungry.`);
}

hunger('Frank');

// function expression

const dogWalk = function (dog) {
    console.log(`Taking ${dog} for a walk.`);
}

dogWalk('Flakey');

// arrow function

const result = ((a, b) => {
    return a + b;
})(2, 5);

console.log(result);