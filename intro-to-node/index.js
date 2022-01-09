//to run a JS file using NodeJS instead of HTML page:::
//write the code here and run this command in terminal window:
// > node index.js

//to run JS commands in terminal using Node REPL instead of dev tools console:
// > node
//to exit press ctrl+c


// // test node.js using node in terminal
// console.log('Hello World!');



// // using nodejs internal/native/built-in modules eg. filesystem
//
// //jshint esversion:6
// const fs = require('fs');
// fs.copyFileSync('file1.txt', 'newfile.txt');
// console.log('newfile.txt replaced by file1.txt');
// // in terminal"
// // > node index.js


// using nodejs external NPM modules

//creat a project (package.json file) in your own directory
// > npm init
// press enter for all questions

//install an external library
//eg. https://www.npmjs.com/package/superheroes
// > npm install superheroes
// will add 'dependencies section' into bottom of package.json file

//use the external module
const superheroes = require('superheroes');
var mySuperhero = superheroes.random();
console.log('mySuperhero: ', mySuperhero);
// in terminal"
// > node index.js

const supervillains = require('supervillains');
var mySupervillain = superheroes.random();
console.log('mySupervillain: ', mySupervillain);
