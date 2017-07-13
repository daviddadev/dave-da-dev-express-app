// Dependencias
var http = require('http');
var fs = require('fs');
var url = require('url');
var PORT = 8888;
var server = http.createServer(handleRequest);

// Starts our server.
server.listen(PORT, function() {
  console.log("All systems are green, server is locked and loaded: " + PORT);
});

function handleRequest(req, res) {
	var urlParts = url.parse(req.url);

	switch (urlParts.pathname) {

    // Depending on the URL we display a different HTML file.
    case "/":
      fs.readFile(__dirname + "/index.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;

    case "/food":
      fs.readFile(__dirname + "/food.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;

    case "/movies":
      fs.readFile(__dirname + "/movies.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;

    case "/coding":
      fs.readFile(__dirname + "/coding.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;

    default:
      fs.readFile(__dirname + "/index.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
      break;
	}
}







// When we visit any path that is not specifically defined, this function is run.
function display404(url, req, res) {
  res.writeHead(404, {
    "Content-Type": "text/html"
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
}