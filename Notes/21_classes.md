# Summary

**- Classes as Templates:** Classes in JavaScript act as templates for creating objects, allowing you to define properties and methods that will be shared by all instances of the `class`.

**- Constructor Method:** The constructor method is used to initialize the properties of the `class` when a new object is created.

**- Creating Objects:** Use the `new` keyword followed by the class name to create a new object instance, passing in values for the properties defined in the constructor.

These points will help you understand how to efficiently create and manage multiple objects with shared properties and methods.

# Modules

In JavaScript, modules allow you to break your code into smaller, reusable pieces. Here's a brief overview of how module import/export works:

**- Exporting Modules:** You can export functions, objects, or primitives from a file so they can be used in other files. For example:

```
// backpack.js
export default class Backpack {
// class definition
}
```

**- Importing Modules:** You can import the exported modules into another file using the import keyword. For example:

```
// script.js
import Backpack from './backpack.js';
const everydayPack = new Backpack(/* parameters */);
```

**- Default Exports:** Each module can have one default export. When importing, you can name it anything you like.

**- Named Exports:** You can also export multiple values from a module using named exports:

```
// utils.js
export function add(a, b) {
return a + b;
}
export function subtract(a, b) {
return a - b;
}
```

And import them like this:

```
// main.js
import { add, subtract } from './utils.js';
```

Using modules helps keep your code organized and maintainable by separating functionality into distinct files.
