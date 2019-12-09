const connection = require('../connection')
const { generateHash } = require('authenticare/server')

module.exports = {
  createUser,
  userExists,
  getUserByName,
  getUserDetail,
  addDetail,
  editName,
  addJobs,
  deleteJobs,
  addName,
  deleteName,
  editPower,
  editWater,
  editWifi,
  addJobRelationship,
  getJobDetailByFlatmate,
  getJobsList,
  getFlatmatesList
}

function createUser (user, db = connection) {
  return userExists(user.username, db)
    .then(exists => {
      if (exists) {
        return Promise.reject(new Error('User exists'))
      }
    })
    .then(() => generateHash(user.password))
    .then(passwordHash => {
      return db('users').insert({ email: user.username, password: passwordHash })
    })
}

function addJobRelationship (jobDetail, db = connection) {
  return db('jobs_relationships')
    .insert({
      usersId: jobDetail.usersId,
      jobId: jobDetail.jobId,
      flatmateId: jobDetail.flatmateId,
      dueDay: jobDetail.dueDay
    })
}

function getJobDetailByFlatmate (userId, db = connection) {
  return db('jobs')
    .join('jobs_relationships', 'jobs.id', 'jobs_relationships.jobId')
    .join('flatmates', 'jobs_relationships.flatmateId', 'flatmates.id')
    .where('flatmates.usersId', userId)
    .select('flatmates.names as name', 'jobs.job as job', 'jobs_relationships.dueDay as dueDay')
}

function getJobsList (db = connection) {
  return db('jobs')
    .select('jobs.id as id', 'jobs.job as job')
}

function getFlatmatesList (userId, db = connection) {
  return db('flatmates')
    .where('usersId', userId)
    .select('flatmates.id as id', 'flatmates.names as name')
}

function userExists (email, db = connection) {
  return db('users')
    .count('id as n')
    .where('email', email)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName (email, db = connection) {
  return db('users')
    .select('id as id', 'email as email', 'password as hash')
    .where('email', email)
    .first()
}

function getUserDetail (id, db = connection) {
  return db('users')
    .where('users.id', id)
    .join('rubbishUsers', 'users.id', 'rubbishUsers.usersId')
    .join('rubbishPlan', 'rubbishUsers.suburb', 'rubbishPlan.suburb')
    .join('flatmates', 'users.id', 'flatmates.usersId')
    .join('expense', 'users.id', 'expense.usersId')
    // .join('jobs', 'users.id', 'jobs.usersId')
    .select()
    .first()
}

function addDetail (obj, db = connection) {
  const { id, address, suburb, names, powerDay, waterDay, wifiDay } = obj
  return addAddress(id, address, suburb, db)
    .then(() =>
      addName(id, names, db)
        .then(() =>
          addExpenseDay(id, powerDay, waterDay, wifiDay, db)
            .then(() => getUserDetail(id, db))))
}

function addAddress (id, address, suburb, db = connection) {
  return db('rubbishUsers')
    .insert({
      usersId: id,
      address: address,
      suburb: suburb
    })
}

function addName (id, names, db = connection) {
  const array = []
  for (let i = 0; i < names.length; i++) {
    const obj = {}
    obj.usersId = id
    obj.names = names[i]
    array.push(obj)
  }
  return db.batchInsert('flatmates', array, 30)
}

function addExpenseDay (id, powerDay, waterDay, wifiDay, db = connection) {
  return db('expense')
    .insert({
      usersId: id,
      powerDay: powerDay,
      waterDay: waterDay,
      wifiDay: wifiDay
    })
}

function addJobs (newJob, db = connection) {
  const { id, job, names, dueDay } = newJob
  return db('jobs')
    .insert({
      usersId: id,
      job: job,
      names: names,
      dueDay: dueDay
    })
    .then(() => getUserDetail(id, db))
}

function deleteJobs (id, db = connection) {
  return db('jobs')
    .where('jobs.id', id)
    .del()
}

function editName (editedName, db = connection) {
  const { id } = editedName
  return db('flatmates')
    .where('id', id)
    .update({
      usersId: id,
      names: editedName.names
    })
    .then(() => getUserDetail(id, db))
}

// editName has not been checked func yet
function deleteName (id, db = connection) {
  return db('flatmates')
    .where('flatmates.id', id)
    .del()
}

function editPower (id, powerDay, db = connection) {
  return db('expense')
    .where('expense.usersId', id)
    .update({
      powerDay: powerDay
    })
}

function editWater (id, waterDay, db = connection) {
  return db('expense')
    .where('expense.usersId', id)
    .update({
      waterDay: waterDay
    })
}

function editWifi (id, wifiDay, db = connection) {
  return db('expense')
    .where('expense.usesId', id)
    .update({
      wifiDay: wifiDay
    })
}
