console.log('Hello World');
const fs = require('fs');
const sh = require('superheroes');
const chalk = require('chalk');

console.log(sh.random())
filename = 'file.txt';
fs.writeFileSync(filename, 'Hi there..');
var content = "My name is ";
fs.appendFileSync(filename, content);

setInterval(()=>{
    console.log(content+chalk.bold.bgMagenta(sh.random()))
},1000)