const http = require("http");

// Server Side
// http://localhost:8080/
// http://localhost:8080/login
// http://localhost:8080/register

http
  .createServer((req, res) => {
    const url = req.url;

    switch (url) {
      case "/":
        res.write("Hello World");
        res.end();
        break;
      case "/login":
        res.write("Hello Login");
        res.end();
        break;
      case "/register":
        res.write("Register");
        res.end();
        break;
      default:
        res.write("Invalid URL");
        res.end();
        break;
    }
  })
  .listen(8080, () => console.log("Server Started Successfully...."));
