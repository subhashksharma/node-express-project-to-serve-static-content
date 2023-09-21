const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const http = require("http");

const dev = process.env.NODE_ENV !== "production";

  const app = express();
  app.use(express.static(path.join(__dirname+"/public/")));

  app.use(bodyParser.json());
  app.get("/*", (req, res) => {
    return res.sendFile(path.join(__dirname));
  });

const server = http.createServer(app);
  const PORT = process.env.PORT || 3000;

  server.listen(PORT, (err) => {
    console.log(`Sample project will serve static file`);
    if (err) throw err;
    console.log(`> Check in browser at  http://localhost:${PORT}`);
  });
