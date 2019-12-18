exports.seed = function (knex) {
  return knex('rubbishUsers')
    .del()
    .then(function () {
      return knex('rubbishUsers').insert([
        { id: 1, userId: 1, address: 'rowValue1 street', suburb: 'suburb1' },
        { id: 2, userId: 2, address: 'rowValue2 street', suburb: 'suburb2' },
        { id: 3, userId: 3, address: 'rowValue3 street', suburb: 'suburb3' }
      ])
    })
}
