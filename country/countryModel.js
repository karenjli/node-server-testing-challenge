const db = require("../data/dbConfig");

module.exports = { add, remove, findAll };

async function add(country) {
  return db("country").insert(country, "id");
}

function remove(id) {
  return db("country")
    .where({ id })
    .del();
}

function findAll() {
  return db("country");
}
