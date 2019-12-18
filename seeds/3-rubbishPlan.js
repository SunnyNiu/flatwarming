exports.seed = function (knex) {
  return knex('rubbishPlan')
    .del()
    .then(function () {
      return knex('rubbishPlan').insert([
        { id: 1, suburb: 'suburb1', dayOfWeek: 'day1' },
        { id: 2, suburb: 'suburb2', dayOfWeek: 'day2' },
        { id: 3, suburb: 'suburb3', dayOfWeek: 'day3' },
        { id: 4, suburb: 'mt eden', dayOfWeek: 'Tuesday' },
        { id: 5, suburb: 'epsom', dayOfWeek: 'Monday' },
        { id: 6, suburb: 'pukekohe', dayOfWeek: 'Friday' },
        { id: 7, suburb: 'glenfield', dayOfWeek: 'Friday' }
      ])
    })
};
