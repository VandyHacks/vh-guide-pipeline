"use strict";
let path = require("path"),
  express = require("express");

let app = express();
let port = process.env.PORT ? process.env.PORT : 8080;

app.use(express.static(path.join(__dirname, "../../public")));
app.set("views", __dirname);

let server = app.listen(port, () => {
  console.log("Listening on " + server.address().port);
});
