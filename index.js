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
// console.log(courseName); // error due to the variable is within the function scope

// Block scope
// this will different with function scope variable since function scope has hoisting
function watchCourse() {
  const courseName = "JavaScript Fundamentals";
  // console.log(started); this will be error since block scope var didn't have hoisting
  let started = false;

  if (started) {
    let progress = 50;
    console.log(`I am ${progress} percent done with ${courseName}`);
  } else {
    let progress = 0;
    console.log(`I am ${progress} percent done with ${courseName}`);
  }
  // console.log(progress); // this will be an error since it use outside of the block scope of if-else
}
watchCourse();
