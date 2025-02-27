/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const speaker = {
    height: 50,
    width: 100,
    material: 'wood',
    colour: 'white',
    frequencySplits: 3,
    interface: 'xlr',
    segment: 'pro',
    type: 'nearfield',
    maxSpl: 112,
    playSound: function () {
        console.log('Playing music...');
    }
};

console.log("This object is a speaker:", speaker);

const lamp = {
    height: 80,
    width: 20,
    material: 'wood',
    colour: 'beige',
    bulbTemperature: 'warm',
    turnOn: function () {
        console.log('Lamp is on.');
    }
};

console.log("This object is a lamp:", lamp);

const headphones = {
    height: 7,
    width: 10,
    material: 'plastic',
    colour: 'white',
    contents: {
        leftEarbud: 'l',
        rightEarbud: 'r'
    },
    noiseIsolation: function () {
        console.log('I am now isolating noise.');
    },
    batteryStatus: function () {
        console.log('100%');
    }
}

console.log("This object is headphones:", headphones);
