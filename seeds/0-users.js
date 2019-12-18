exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { id: 1, email: 'row1@gmail.com', password: 'x1235r' },
        { id: 2, email: 'row2@gmail.com', password: 'x1235r' },
        { id: 3, email: 'row3@gmail.com', password: 'x1235r' }
      ])
    })
}
