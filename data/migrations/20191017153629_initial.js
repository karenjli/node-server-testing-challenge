exports.up = function(knex) {
  return knex.schema.createTable("country", city => {
    city.increments();
    city.string("country", 255).notNullable();
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("country");
};
