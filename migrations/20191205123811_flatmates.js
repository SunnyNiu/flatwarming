exports.up = function (knex) {
  return knex.schema.createTable('flatmates', table => {
    table.increments('id')
    table.integer('userId')
    table.string('names')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('flatmates')
}
