import fs from 'fs';

fs.readFile('./welcome.txt' , (err , data) => {
    if (err) return console.error(err);
    console.log(data.toString())
})