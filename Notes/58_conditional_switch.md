# Summary

**- Simplifies Complex Conditionals:** The `switch` statement is used to simplify complex conditional logic that would otherwise require multiple nested `if...else` statements.

**- Case Clauses:** Each `case` clause represents a specific condition. The `switch` statement evaluates each `case` in order until it finds a match and then executes the corresponding code.

**- Default Case:** If none of the `case` conditions are met, the `default` case is executed, ensuring that there is always a fallback action.

These points help in understanding how to use switch statements to make your code more readable and maintainable.

// switch example

```
  switch (true) {
    case age < 30:
      description = 'new';
      break;
    case age >= 30 && age < 365:
      description = 'lightly used';
      break;
    case age >= 365 && age < 1095:
      description = 'used';
      break;
    case age >= 1095:
      description = 'old';
      break;
    default:
      console.log(`There is no description for ${age}.`);
  }
```
