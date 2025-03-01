# Summary

**- Updating Button Text:** The video demonstrates how to update the button text to reflect its current action (e.g., "open lid" vs. "close lid").

**- Arrow Functions vs. Function Declarations:** It highlights the difference between using arrow functions and function declarations as event listener callbacks. Arrow functions do not have their own `this`, which can cause issues when trying to reference the object within the event listener.

**- Using `this` Keyword:** To properly use the `this` keyword within an event listener, you need to use a function declaration instead of an arrow function. This allows the event listener to correctly reference the object it is interacting with.

These points help you understand how to effectively manage event listeners and the `this` keyword in JavaScript.
