// Array of images
var fruits = ["chat1.jpeg", "Mahi4.jpeg", "mahi7look.jpeg", "smile.jpeg", "look.jpeg"];

// Function to display the length of an array
function displayLength(arr) {
  console.log("Length of the array: " + arr.length);
}

// Function to display the elements of an array
function displayElements(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log("Element " + i + ": " + arr[i]);
  }
}

// Function to add an element to an array
function addElement(arr, elem) {
  arr.push(elem);
  console.log("Element added: " + elem);
}

// Function to remove an element from an array
function removeElement(arr, elem) {
  var index = arr.indexOf(elem);
  if (index > -1) {
    arr.splice(index, 1);
    console.log("Element removed: " + elem);
  } else {
    console.log("Element not found: " + elem);
  }
}

// Function to display the array after adding and removing elements
function displayArray(arr) {
  console.log("Array after adding and removing elements: ");
  displayElements(arr);
}

// Display the length of the array
displayLength(fruits);

// Display the elements of the array
displayElements(fruits);

// Add an element to the array
addElement(fruits, "mango");

// Remove an element from the array
removeElement(fruits, "banana");

// Display the array after adding and removing elements
displayArray(fruits);

// Object with properties and methods
var person = {
  name: "John",
  age: 30,
  gender: "male",
  displayName: function() {
    console.log("Name: " + this.name);
  },
  displayAge: function() {
    console.log("Age: " + this.age);
  },
  displayGender: function() {
    console.log("Gender: " + this.gender);
  }
};

// Display the properties and methods of the object
console.log("Name: " + person.name);
console.log("Age: " + person.age);
console.log("Gender: " + person.gender);
person.displayName();
person.displayAge();
person.displayGender();

// Loop through the properties of the object
for (var prop in person) {
  console.log("Property: " + prop + " = " + person[prop]);
}

// Array of numbers
var numbers = [1, 2, 3, 4, 5];

// Function to display the sum of the elements of an array
function displaySum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log("Sum of the elements: " + sum);
}

// Display the sum of the elements of the array
displaySum(numbers);

// Array of objects
var studentsclass = [
  { name: "sbj1", age: 20, gen: "propimt" },
  { name: "sbj3", age: 22, gen: "flex" },
  { name: "sbj9", age: 21, ger: "757" }
];

// Function to display the properties of the objects in an array
function displayProperties(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log("Student " + i + ": ");
    for (var prop in arr[i]) {
      console.log(prop + ": " + arr[i][prop]);
    }
  }
}

// Display the properties of the objects in the array
displayProperties(students);

// Function to find an object in an array based on a property
function findObject(arr, prop, value) {
