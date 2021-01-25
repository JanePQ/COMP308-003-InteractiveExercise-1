const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Well hello there, my name is Jane with student ID(300983295)\n');
  });

  /**
   * --Other way of coding
   * function myServerParams = http.createServer((req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
   }
    const server = http.createServer(myServerParams);
   */

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

  server.listen()