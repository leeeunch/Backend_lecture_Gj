const http = require('http');

//화면에 보여지는 영역
const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hello world</title>
</head>
<body>
    <h1>hello world</h1>
</body>
</html>`;

//클라이언트에 전달하는 영역
const server = http.createServer(function(request, response){
    response.writeHead(200, //Status code(http 상태 코드), OK
        {'Content-Type':'text/html'});
    response.end(html);
});

server.listen(3000);        //localhost 3000으로 접속