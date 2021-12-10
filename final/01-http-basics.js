const http = require("http");

const server = http.createServer((request, response) => {
  const url = request.url;

  //Home Page
  if (url === "/") {
    response.writeHead(200, { "content-type": "text/html" });
    response.write("<h1>Home Page</h1>");
    response.end();
  }
  //About Page
  else if (url === "/about") {
    response.writeHead(200, { "content-type": "text/html" });
    response.write("<h1>About Page</h1>");
    response.end();
  }
  //Error Page
  else {
    response.writeHead(404, { "content-type": "text/html" });
    response.write("<h1>Page Not Found</h1>");
    response.end();
  }
});

server.listen(5000, () => {
  console.log("Server is up in port 5000");
});
