// A basic Node server

const http = require('http');


const server = http.createServer(function(req, res){

    res.setHeader('Content-type','application/json');
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.writeHead(200);//status code HTTP 200/OK

    let dataObj = {"id":123,"name":"Kim","email":"kim@work.org"};
    let data = JSON.stringify(dataObj);
    res.end(data);
});

server.listen(1234,function(){
    console.log('listening on port 8080');
})
