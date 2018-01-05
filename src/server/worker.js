"use strict";

(() => {
  const express = require("express");
  const path = require("path");

  const server = express();

  server.use(express.static(path.join(__dirname, "../public")));

  server.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
  });

  const listener = server.listen(8080, () => {
    console.log(`Process ${process.pid} started on port ${listener.address().port}`);
  });

  module.exports = server;
})();
