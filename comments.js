// Create web server
// Create a web server that listens to incoming requests on port 3000 and serves the following responses:
// 1. For requests to /, the server should respond with a page that says "Welcome to the homepage!"
// 2. For requests to /comments, the server should respond with an array of comments from the comments variable defined above
// 3. For requests to any other path, the server should respond with a 404 error

const http = require("http");

const comments = [
  { name: "John", message: "Hello everyone!" },
  { name: "Jane", message: "How are you doing?" },
];

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to the homepage!</h1>");
  } else if (req.url === "/comments") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});