const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    fs.readFile('view/03.helloworld.html','utf8')

})