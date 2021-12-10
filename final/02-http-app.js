const http = require("http");
const { readFileSync, readFile } = require("fs");

//Get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((request, response) => {
  const url = request.url;
  console.log(url);

  //Home Page
  if (url === "/") {
    response.writeHead(200, { "content-type": "text/html" });
    response.write(homePage);
    response.end();
  }
  //About Page
  else if (url === "/about") {
    response.writeHead(200, { "content-type": "text/html" });
    response.write("<h1>About Page</h1>");
    response.end();
  }
  //Style
  else if (url === "/styles.css") {
    response.writeHead(200, { "content-type": "text/css" });
    response.write(homeStyles);
    response.end();
  }
  //Home Logo
  else if (url === "/logo.svg") {
    response.writeHead(200, { "content-type": "image/svg+xml" });
    response.write(homeImage);
    response.end();
  }
  //Home Logic
  else if (url === "/browser-app.js") {
    response.writeHead(200, { "content-type": "text/javascript" });
    response.write(homeLogic);
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
