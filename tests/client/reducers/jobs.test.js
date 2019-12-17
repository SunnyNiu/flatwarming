import jobsReducer from '../../../client/reducers/jobs.reducer'

import { GET_JOBS_PENDING, GET_JOBS_SUCCESS, GET_JOBS_BY_USER_PENDING, GET_JOBSBYUSER_SUCCESS } from '../../../client/actions/jobs.action'

describe('JOB reducer and action tests', () => {
  it('case GET_JOBS_SUCCESS', () => {
    // Arrange
    const INITIAL_STATE = {
      jobs: [],
      jobsDetail: []
    }
    const expected =
    {
      jobs: ['elly', 'matt', 'jackie'],
      jobsDetail: []
    }

    const action = {
      type: GET_JOBS_SUCCESS,
      jobs: ['elly', 'matt', 'jackie']
    }
    // Act
    const actual = jobsReducer(INITIAL_STATE, action)
    // Assert
    expect(actual).toEqual(expected)
  })

  it('case GET_JOBSBYUSER_SUCCESS', () => {
    // Arrange
    const INITIAL_STATE = {
      jobs: [],
      jobsDetail: []
    }
    const expected =
    {
      jobs: [],
      jobsDetail: ['elly', 'matt', 'jackie']
    }

    const action = {
      type: GET_JOBSBYUSER_SUCCESS,
      jobsDetail: ['elly', 'matt', 'jackie']
    }
    // Act
    const actual = jobsReducer(INITIAL_STATE, action)
    // Assert
    expect(actual).toEqual(expected)
  })
})
