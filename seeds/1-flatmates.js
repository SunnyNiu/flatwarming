exports.seed = function (knex) {
  return knex('flatmates').del()
    .then(function () {
      // Inserts seed entries
      return knex('flatmates').insert([
        { id: 1, userId: 1, names: 'rowValue1' },
        { id: 2, userId: 2, names: 'rowValue2' },
        { id: 3, userId: 3, names: 'rowValue3' }
      ])
    })
}
