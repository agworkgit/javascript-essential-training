/**
 * The map() array method.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

const article = document.querySelector("article");
let stuffList = document.createElement("ul");

// forEach() array method
/* stuff.forEach((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  stuffList.append(listItem);
}); */

// map will iterate and make changes at the same time
// map will output a new array from an old array
const stuffItems = stuff.map((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;

  return listItem
});

console.log(stuff);
console.log(stuffItems);

// forEach will only iterate and output, no changes made
stuffItems.forEach((item) => stuffList.append(item));

article.append(stuffList)