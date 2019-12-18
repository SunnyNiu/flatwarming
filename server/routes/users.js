const express = require('express')

const db = require('../db/users')

const router = express.Router()
const { getTokenDecoder } = require('authenticare/server')
const decodeToken = getTokenDecoder(false)

module.exports = router

const sendGenericErrorMessage = (res) => {
  res.status(500).send(
    "An Unexpected error has occurred and we're looking into it"
  )
}

router.get('/jobs/all', getTokenDecoder(), (req, res) => {
  return db.getJobsList()
    .then(jobs => res.json(jobs))
    .catch(() => sendGenericErrorMessage(res))
})

router.get('/:id', getTokenDecoder(), (req, res) => {
  const id = Number(req.params.id)
  console.log(id, ':users.js')
  return db.getUserDetail(id)
    .then(userDetail => { console.log('user details', userDetail); return res.json(userDetail) })
    .catch(() => sendGenericErrorMessage(res))
})

router.get('/flatmatelist/:userId', getTokenDecoder(), (req, res) => {
  const userId = req.params.userId
  return db.getFlatmatesList(userId)
    .then(flatmates => res.json(flatmates))
    .catch(() => sendGenericErrorMessage(res))
})

router.delete('/flatmatelist/:userId/:flatmateId', getTokenDecoder(), (req, res) => {
  const flatmateId = req.params.flatmateId
  const userId = req.params.userId
  return db.deleteFlatmate(flatmateId)
    .then(
      () => db.getFlatmatesList(userId)
        .then(flatmates => res.json(flatmates))
    )
    .catch(() => sendGenericErrorMessage(res))
})

router.delete('/jobs/:userId/:jobId', getTokenDecoder(), (req, res) => {
  const jobId = req.params.jobId
  const userId = req.params.userId
  return db.deleteJobs(jobId)
    .then(
      () => db.getJobsList()
        .then(jobs => res.json(jobs))
    )
    .catch(() => sendGenericErrorMessage(res))
})

router.get('/user/:username', getTokenDecoder(), (req, res) => {
  const username = req.params.username
  return db.getUserByName(username)
    .then(user => res.json(user))
    .catch(() => sendGenericErrorMessage(res))
})

router.post('/register/:id', decodeToken, (req, res) => {
  const id = Number(req.params.id)
  const suburb = req.body.suburb.toLowerCase()
  const obj = { ...req.body, id, suburb }
  return db.addDetail(obj)
    .then(userDetail => res.json(userDetail))
    .catch(() => sendGenericErrorMessage(res))
})

router.post('/jobs/flatmates/:userId', decodeToken, (req, res) => {
  const usersId = Number(req.params.userId)
  console.log('req.body in row 77', req.body)
  const obj = { ...req.body, usersId }
  console.log(obj, ':users router')
  return db.addJobRelationship(obj)
    .then(x => db.getJobDetailByFlatmate(usersId)
      .then(jobDetails => { console.log('jobDetails 81 row ', jobDetails); const obj = {}; obj.jobDetails = jobDetails; res.json(obj) }))
    .catch(() => sendGenericErrorMessage(res))
})

router.post('/jobs/newJob', decodeToken, (req, res) => {
  const job = req.body.job
  return db.addNewJob(job)
    .then(() => db.getJobsList()
      .then(jobs => res.json(jobs)))
    .catch(() => sendGenericErrorMessage(res))
})

router.post('/:id', decodeToken, (req, res) => {
  const newJob = {
    id: req.body.usersId,
    job: req.body.job,
    names: req.body.job,
    dueDay: req.body.dueDay
  }

  return db.addJobs(newJob)
    .then(newJob => res.json(newJob))
    .catch(() => sendGenericErrorMessage(res))
})

router.post('/flatmate/:id', decodeToken, (req, res) => {
  const id = Number(req.params.id)
  const names = req.body.names
  const newName = {
    id: id,
    names: names
  }
  return db.addName(newName)
    .then(newName => res.json(newName))
    .catch(() => sendGenericErrorMessage(res))
})

router.post('/flatmates/:userId', decodeToken, (req, res) => {
  const userId = Number(req.params.userId)
  const name = req.body.name
  return db.addNewFlatmate(userId, name)
    .then(() => db.getFlatmatesList(userId)
      .then(flatmates => res.json(flatmates)))
    .catch(() => sendGenericErrorMessage(res))
})
