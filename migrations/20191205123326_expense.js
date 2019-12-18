exports.up = function (knex) {
  return knex.schema.createTable('expense', table => {
    table.increments('id')
    table.integer('userId')
    table.string('powerDay')
    table.string('waterDay')
    table.string('wifiDay')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('expense')
};
