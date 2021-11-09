import fs from 'fs';

// read the file with a synchronous fs request
const rawData = fs.readFileSync('./data/cartocolors.json');

// data are in raw form 
console.log(rawData); // <Buffer 7b 0a 20 20 20 20 22 42 ...

// use JSON.parse() to parse raw string to JSON
const data = JSON.parse(rawData);

// this looks familiar
console.log(Object.keys(data));

// create a new object with key 'Emrld' and value the object
const outputData = {'SunsetDark': data['SunsetDark'] };

// write the output file, stringifying the JS object
fs.writeFileSync('./data/sunsetDarkcolors.json', JSON.stringify(outputData));

console.log('data/sunsetDarkcolors.json written to file!');
