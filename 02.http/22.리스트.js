const http = require('http');
const url = require('url');
const fs = require('fs');
const qs = require('querystring');
const view = require('02.http/view/index.js');
http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    switch(pathname) {
    case '/':
        fs.readdir('data', (err,files)=> {
            list='';
            for (let file of files) {
                const title = file.substring(0,file.length-4);   // .txt를 제외한 나머지
                list += `<li><h3><a href="/?id=${title}">${title}</a></h></li>`;
            }
            const html = view.index();
            res.end(html);
        });
        break;
    default:
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});