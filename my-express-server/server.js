// // install and use ExpressJS framework on top of NodeJS

// // in terminal setup new project with ExpressJs:
// // https://expressjs.com/en/starter/installing.html

// $ mkdir myapp
// $ cd myapp
// $ touch server.js // creat new file
// $ npm init
// // press enter all questions
// $ npm install express
// // will add express module as dependency to the project in package.json myMainJsFile

// in JS file import and use ExpressJs:
// https://expressjs.com/en/starter/hello-world.html

// jshint esversion:6
const express = require('express');
const app = express();
const port = 3000;

// for users requesting root(/) of  http://localhost:3000
// we can send back a message
//otherwise will show an ERROR: Cannot GET /
app.get('/', function(req, res) {
  // console.log('req: ', req); // <ref *2> IncomingMessage { ...user browser info...
  res.send('<h1>Home Page</h1>')
});

app.get('/contact', function(req, res) {
  res.send('<h1>Contact Page</h1>')
});

app.get('/about', function(req, res) {
  res.send('<h1>About Page</h1>')
});

// make the server to listen to a port
app.listen(port, function() {
  console.log('Example app listening at http://localhost:' + port);
  console.log('Click on the URL or press Ctrl+C to exit.');
});

// in terminal run the ExpressJS server (JS code)
// > node server.js
// OR
// > nodemon server.js
// to avoid repeating 'node server.js' command foe very code change
// if nodemon is already globally installed via 'npm install -g nodemon' for all projects

// in browser go to:
// http://localhost:3000
// OR
// http://localhost:3000/about
