/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

backpackContents.push('bear', 'pencil'); // adding to end of array

backpackContents.unshift('hat', 'umbrella'); // adding to beginning of array

backpackContents.shift('hat'); // removing from beginning of array

backpackContents.pop(); // removes from end of array

let backpackString = backpackContents.join(', '); // join converts to string

// the for loop doesn't alter the array, it just loops through the array to do something on each item
backpackContents.forEach(function (item) {
    item = `<li>${item}</li>`;
    console.log(item);
});

// find the first item that meets our parameters 
let longItems = backpackContents.find(function (item) {
    if (item.length >= 5) {
        return item;
    }
});
console.log("longItems:", longItems);

console.log(backpackString);