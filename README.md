1) What is the difference between var, let, and const?

Answer:
var - old way, scooped function, it can be redeclared and reassign.
let - block scooped, can be reassigned but can not be redeclared.
const - block-scoped, cannot reassign.

2) What is the difference between map(), forEach(), and filter()?

Answer:
forEach() - just loops and executes a function, but always returns undefined.
map() - transforms each element into a new value, returns a new array of the same length.
filter() - makes a new array but only keeps items that pass a test.

3) What are arrow functions in ES6?

Answer:
const add = (a, b) => a + b;

4) How does destructuring assignment work in ES6?

Answer:
Destructuring allows extracting values from arrays or objects into variables in a concise way.
const [x, y] = [10, 20];  
const {name, age} = {name: "Ali", age: 22};

5)  Explain template literals in ES6. How are they different from string concatenation?

Answer:
Strings with backticks ` that let you use ${} inside.

const name = "Ali";  
console.log(`Hello, ${name}!`);

Differences from string concatenation:
-Allow embedding expressions using ${}.
-Support multiline strings without \n.
-More readable and cleaner than + concatenation.

