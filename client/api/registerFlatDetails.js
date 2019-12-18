import request from 'superagent'
import { getEncodedToken } from 'authenticare/client'

const apiURL = '/api/v1/users'

// This call should GET the details given a userId
export function getUserDetails (id) {
  return request.get(`${apiURL}/${id}`)
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .then(res => { console.log(res.body, 'here'); return res.body })
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

export function addUserDetail (userDetail) {
  const userId = userDetail.userId
  return request.post(`${apiURL}/register/${userId}`)
    .set({ 'Accept': 'application/json' })
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .send(userDetail)
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

export function getUserByName (email) {
  return request.get(`${apiURL}/user/${email}`)
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
