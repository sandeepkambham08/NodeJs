const http = require('http');
const fs = require('fs');

http.createServer(function(req,res){
    
    if(req.url === '/'){
        let val = fs.createReadStream(__dirname+ '/index.htm').pipe(res);
        res.end(val);
    }

    else if(req.url === '/api'){
    res.writeHead(200, {'Content-Type': 'application/json'});
    const obj ={
        Company : "Github",
        Location : 'USA'
    }
    res.end(JSON.stringify(obj));
    }

    else{
        res.writeHead(404);
        res.end();
    }

}).listen(1337, '127.0.0.1'); 
