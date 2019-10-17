const express = require("express");

const server = express();
const Country = require("../country/countryModel");
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
