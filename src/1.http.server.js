const http = require("http");

// HTTP
// http.createServer();
// http.createServer((req, res) => {});

// Server always run on a port :: 3000/4200/8080
// http.createServer((req, res) => {}).listen(8080);

http
  .createServer((req, res) => {
    res.write("Hello World");
    res.end();
  })
  .listen(8080);
