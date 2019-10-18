const express = require("express");

const server = express();
const Country = require("../country/countryModel");
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/country", (req, res) => {
  Country.findAll()
    .then(countries => {
      res.status(200).json(countries);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post("/country", (req, res) => {
  const lugar = req.body;
  Country.add(lugar)
    .then(country => {
      res.status(200).json(country);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.delete("/:id", (req, res) => {
  const removeId = req.params.id;
  Country.remove(removeId)
    .then(country => {
      if (country.length > 0) {
        res.status(200).json({ message: "country removed" });
      } else {
        res
          .status(404)
          .json({ message: "There is no country associated with this id" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
