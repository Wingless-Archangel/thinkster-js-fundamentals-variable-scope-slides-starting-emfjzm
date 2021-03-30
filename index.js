const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>Variable Scope</h1>`;

// Global Scope
var name;

console.log(name);

name = "Preston Lamb";

function sayHi() {
  console.log(`Hello ${name}`); // this will using global variable scope
}
sayHi();

// using global variables could cause confusion as shwon in this example
// this function could make dev confuse which variable they referred to
// global one or the scoped one?
function sayGoodbye(name) {
  console.log(`Goodbye ${name}`);
}
sayGoodbye("Joe Eames");

function courseInfo() {
  var courseName = "JavaScript Fundamentals";
  console.log(courseName);

  function output() {
    // this is ok since it allows nested function to access the variable
    console.log(courseName);
  }
}
courseInfo();
console.log(courseName); // error due to the variable is within the function scope
