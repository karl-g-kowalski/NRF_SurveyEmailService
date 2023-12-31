// note: the server side of things does not use the "import XYZ from 'xyz';"
// syntax because the version of NodeJS may not support that JS syntax

const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send({ hi: "there" });
});

// use env variable from runtime to determine the port - or use constant if not defined
// Heroku uses PORT environment variable
const PORT = process.env.PORT || 5100;

app.listen(PORT, () => {
  // cannot use port 5000 on macOS because something called "ControlCenter.app" (/System/Library/CoreServices/ControlCenter.app) is using port 5000
  console.log(`App now running on http://localhost:${PORT}`); //
});

//
