# Summary

The `map` method creates a new array by applying a function to each item in an existing array, returning the modified items.

Unlike the `forEach` method, which iterates through an array without returning a new array, `map` is used when you need to transform data and create a **new array**.

The `map` method is heavily used in modern JavaScript, especially with frameworks like **React**, but should be used specifically for creating **new arrays**, not just for iterating.

Map is specifically for when you need to create a new array to do something further with the data.

If you just want to iterate through an array, and then output the content right away, use a `forEach` loop, that's what it's for.

The reason people are using map like this, is quite simply that map is a trendy new tool and people like to follow trends. What can I say? People do weird things sometimes.

So if you need to iterate through an array, use `forEach`.

If you need to create a new array, out of an old array and do something to each of the items before you do so, then use `map`.
