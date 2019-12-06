exports.up = function(knex) {
  return knex.schema.createTable("jobs", table => {
    table.increments("id");
    table.integer("usersId");
    table.string("job");
    table.string("names");
    table.string("dueDay");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("jobs");
};
