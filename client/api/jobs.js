import request from 'superagent'
import { getEncodedToken } from 'authenticare/client'

const apiURL = '/api/v1/users'

export function addJobToFlatmate (userId, jobDetails) {
  return request.post(`${apiURL}/jobs/flatmates/${userId}`)
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .send(jobDetails)
    .then(res => { const obj = {}; obj.jobDetailsByUserId = res.body; return obj })
    .catch(err => {
      if (err.message === 'Not Found') {
        throw new Error('ID not found')
      } else {
        const errorMessage = 'An unknown error has occurred'
        // eslint-disable-next-line no-console
        console.error(errorMessage)
        throw new Error(errorMessage)
      }
    })
}

export function getAllJobs () {
  return request.get(`${apiURL}/jobs/all`)
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .then(res => { const obj = {}; obj.jobs = res.body; return obj })
    .catch(err => {
      if (err.message === 'Not Found') {
        throw new Error('ID not found')
      } else {
        const errorMessage = 'An unknown error has occurred'
        // eslint-disable-next-line no-console
        console.error(errorMessage)
        throw new Error(errorMessage)
      }
    })
}

export function removeJobById (userId, jobId) {
  return request.delete(`${apiURL}/jobs/${userId}/${jobId}`)
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .then(res => res.body)
    .catch(err => {
      if (err.message === 'Not Found') {
        throw new Error('ID not found')
      } else {
        const errorMessage = 'An unknown error has occurred'
        // eslint-disable-next-line no-console
        console.error(errorMessage)
        throw new Error(errorMessage)
      }
    })
}

export function addJob (job) {
  return request.post(`${apiURL}/jobs/newJob`)
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .send({ 'job': job })
    .then(res => {const obj = {}; obj.job = res.body; return obj )
    .catch(err => {
      if (err.message === 'Not Found') {
        throw new Error('ID not found')
      } else {
        const errorMessage = 'An unknown error has occurred'
        // eslint-disable-next-line no-console
        console.error(errorMessage)
        throw new Error(errorMessage)
      }
    })
}
