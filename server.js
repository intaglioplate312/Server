// We require/import the HTTP module
var http = require("http");

// =====================================================================

// Then define the ports we want to listen to (api for one, web for another)
var PORTONE = 7000;
var PORTTWO = 7500;

// =====================================================================

// We need two different functions to handle requests, one for each server.
function handleRequestOne(request, response) {
  response.end("You Look Lovely");
}

function handleRequestTwo(request, response) {
  response.end("Oh Well, Tomorrow is another day.");
}

// =====================================================================

// Create our servers
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

// =====================================================================

// Starting our servers
serverOne.listen(PORTONE, function() {

  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORTONE);
});

serverTwo.listen(PORTTWO, function() {

  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORTTWO);
});
