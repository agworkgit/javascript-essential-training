// 1. Remove the last item in the array
// 2. Sort the remaining array items alphabetically
// 3. Move the last item in the array to the first position
// 4. Find the 'USB drive' item in the array and move it to the last position
// 5. Find the 'laptop' item in the array and remove it.

const deskArray = [
    "pen",
    "camera",
    "phone",
    "notebook",
    "headphones",
    "laptop",
    "light bulb",
    "USB drive",
    "elephant"
];

const processArray = deskArray => {

    let newDeskArr = [...deskArray];

    // Your code goes here
    newDeskArr.pop();
    newDeskArr.sort();

    let lastToFirst = function (arr) {
        let last = arr.pop();
        arr.unshift(last);
    }
    lastToFirst(newDeskArr);

    newDeskArr.find((item) => item === 'USB drive');
    let found = newDeskArr.splice(1, 1).join('');
    newDeskArr.push(found);
    newDeskArr.splice(3, 1);

    // Your code ends here

    return newDeskArr;
};

// Test Code

// This is how your code will be called.
// Your answer should be the largest value in the numbers array.
// You can edit this code to try different testing cases.
const result = processArray(deskArray);

console.log(result);
