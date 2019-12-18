exports.seed = function (knex) {
  return knex('jobs_relationships')
    .del()
    .then(function () {
      return knex('jobs_relationships').insert([
        { id: 1, jobId: 1, userId: 1, flatmateId: 1, dueDay: 1 }
      ])
    })
}
