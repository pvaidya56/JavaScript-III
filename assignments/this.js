/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding 
    This represents the window. It is basically all of the JS objects, functions and variables.
    Logging this will output the whole window.

* 2. Implicit Binding
    This has a function within the object. An easy way to remember this is 'this' gets the value of whatever is left of the last dot in the function innvocation.

* 3. Explicit Binding
    Explicit binding is explicitly calling the function using the call, apply, and bind functions.
    In these, we basically are telling 'this' what to be.

* 4. New Binding
*   This is using the 'new' keyword to create an object from a constructor. 
    Constructor methods are preferred for reusability.

* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function window(param) {
    console.log(this)
}
// window();

// Principle 2

// code example for Implicit Binding

const person = {
    name: 'Priya',
    age: 20,
    food: 'pizza',
    speak() {
        return `${this.name} loves to eat ${this.food}`;
    }
}
console.log(person.speak());
// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding