// Make a new folder called Calculator on your Desktop
// > mkdir Calculator

// Change Directory to this new folder
// > cd Calculator

// Inside the Calculator folder, create a new file called calculator.js
// > touch calculator.js

// Set up a new NPM package
// > npm init // press enter all questions

// Open the project folder in Atom
// > atom .

// Using NPM install the express module
// > npm install express

// Require express in your calculator.js
// jshint esversion:6
const express = require('express');

// Setup express
const app = express();
const port = 3000;

// Page load user request::::
// Create a root route GET method with app.get()
// Send the words Hello World from the root route as the response
app.get('/', function(req, res) {
  // res.send('<h1>Hello World</h1>')
  res.sendFile(__dirname + '/index.html');
});

app.get('/bmicalculator', function(req, res) {
  res.sendFile(__dirname + '/bmiCalculator.html');
});

// Submit button user action::::
// in HTML: replace action="index.html" with action="/" to point to app def JS file instead
// in terminal: 'npm install body-parser' for parsing the user REQUEST message
// in JS: Require and setup body-parser in your calculator.js
// Create a root route POST method with app.post()
// Send the words Thank you from the root route as the response
// jshint esversion:6
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true})); //bodyParser.text()

app.post('/', function(req, res) {
  // res.send('Thanks for your info post.');
  var result = Number(req.body.num1) + Number(req.body.num2);
  console.log('Result: ', result);
  res.send('Result: ' + result);
});

app.post('/bmicalculator', function(req, res) {
  var
    weight = parseFloat(req.body.weight),
    height = parseFloat(req.body.height),
    bmi = weight / (height * height);
  console.log('weight and height: ', weight, height);
  console.log('BMI: ', bmi);
  res.send('Your BMI is: ' + bmi);
});

// Spin up our server on port 3000 with app.listen
app.listen(port, function() {
  console.log('Example app listening at http://localhost:' + port);
  console.log('Click on the URL or press Ctrl+C to exit.');
});

// Run server with nodemon
// > nodemon calculator.js
//OR
// > npm install -g nodemon // if nodemon not already installed
