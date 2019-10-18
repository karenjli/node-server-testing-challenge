exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("country")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("country").insert([
        { id: 1, country: "Hong Kong" },
        { id: 2, country: "Ecuador" },
      ]);
    });
};
