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
  return db.getUserDetail(id)
    .then(userDetail => res.json(userDetail))
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
  const obj = {}
  obj.id = id
  obj.address = req.body.address
  obj.suburb = req.body.suburb.toLowerCase()
  obj.names = req.body.names
  obj.powerDay = req.body.powerDay
  obj.waterDay = req.body.waterDay
  obj.wifiDay = req.body.wifiDay
  return db.addDetail(obj)
    .then(userDetail => res.json(userDetail))
    .catch(() => sendGenericErrorMessage(res))
})

router.post('/jobs/flatmates/:userId', decodeToken, (req, res) => {
  const usersId = Number(req.params.userId)
  const obj = { ...req.body, usersId }
  return db.addJobRelationship(obj)
    .then(() => db.getJobDetailByFlatmate(usersId)
      .then(jobDetails => res.json(jobDetails)))
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
