const fs = require('fs');

// 순서 보장이 안됨
// console.log('순서 보장이 안됨');
fs.readFile('01.Nodejs/07.File/tmp/1.txt', 'utf8', (err, bufA) => {
    console.log(bufA);
});
fs.readFile('01.Nodejs/07.File/tmp/2.txt', 'utf8', (err, bufB) => {
    console.log(bufB);
});
fs.readFile('01.Nodejs/07.File/tmp/3.txt', 'utf8', (err, bufC) => {
    console.log(bufC);
});

// 순서 보장 방법 => callback 지옥
fs.readFile('01.Nodejs/07.File/tmp/1.txt', 'utf8', (err, bufA) => {
    //console.log('순서 보장 방법 1');
    console.log(bufA);
    fs.readFile('01.Nodejs/07.File/tmp/2.txt', 'utf8', (err, bufB) => {
        console.log(bufB);
        fs.readFile('01.Nodejs/07.File/tmp/3.txt', 'utf8', (err, bufC) => {
            console.log(bufC);
        });
    });
});

fs.readFile('01.Nodejs/07.File/tmp/1.txt', 'utf8', (err, bufA) => {
    fs.readFile('01.Nodejs/07.File/tmp/2.txt', 'utf8', (err, bufB) => {
        fs.readFile('01.Nodejs/07.File/tmp/3.txt', 'utf8', (err, bufC) => {
            //console.log('순서 보장 방법 2');
            console.log(bufA);
            console.log(bufB);
            console.log(bufC);
        });
    });
});