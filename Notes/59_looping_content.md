# Summary

**- For Loop:** The classic method for iterating through arrays, allowing you to specify the start, end, and increment conditions.

```
let array = ['apple', 'banana', 'cherry'];
for (let i = 0; i < array.length; i++) {
console.log(array[i]);
}
```

**- For...of Loop:** A modern approach for iterating through arrays, making the code cleaner by directly working with each item.

```
let array = ['apple', 'banana', 'cherry'];
for (const item of array) {
console.log(item);
}
```

**- ForEach Method:** The preferred method for arrays in modern JavaScript, applying a function to each item in the array.

```
let array = ['apple', 'banana', 'cherry'];
array.forEach(item => {
console.log(item);
});
```

**- For...in Loop:** Used for iterating through the properties of objects, allowing you to work with each property individually.

```
let object = {a: 1, b: 2, c: 3};
for (const key in object) {
console.log(${key}: ${object[key]});
}
```

**- While Loop:** The while loop continues to execute a block of code as long as a specified condition is true. It is useful when you don't know in advance how many times you need to iterate.

```
let i = 0;
while (i < 3) {
console.log(i);
i++;
}
```

These methods provide various ways to loop through arrays and objects, each with its own advantages.
