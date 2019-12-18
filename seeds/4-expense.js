exports.seed = function (knex) {
  return knex('expense')
    .del()
    .then(function () {
      return knex('expense').insert([
        { id: 1, userId: 1, powerDay: '11', waterDay: '22', wifiDay: '33' },
        { id: 2, userId: 2, powerDay: '11', waterDay: '22', wifiDay: '33' },
        { id: 3, userId: 3, powerDay: '11', waterDay: '22', wifiDay: '33' }
      ])
    })
}
