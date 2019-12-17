const db = require('../../server/db/users')
const env = require('./test-environment')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

describe('getUserByName function', () => {
  it('get user by email', () => {
    const email = 'row1@gmail.com'
    const expected = {
      id: 1,
      email: 'row1@gmail.com',
      hash: 'x1235r'
    }

    return db.getUserByName(email, testDb)
      .then(user => {
        const actual = user
        expect(actual).toEqual(expected)
      })
  })
})

describe('getFlatmatesList function', () => {
  it('should get flatmates names by users id', () => {
    const userId = 3
    const expected = [{
      'id': 3,
      'name': 'rowValue3'
    }]
    return db.getFlatmatesList(userId, testDb)
      .then(user => {
        const actual = user
        expect(actual).toEqual(expected)
      })
  })
})

describe('getUserDetail database function', () => {
  it('get correct user details', () => {
    const id = 1
    const expected = {
      id: 1,
      email: 'row1@gmail.com',
      password: 'x1235r',
      usersId: 1,
      address: 'rowValue1 street',
      suburb: 'suburb1',
      dayOfWeek: 'day1',
      names: 'rowValue1',
      powerDay: '11',
      waterDay: '22',
      wifiDay: '33'
    }

    return db.getUserDetail(id, testDb)
      .then(user => {
        const actual = user
        expect(actual).toEqual(expected)
      })
  })
})

describe('delete jobs by id', () => {
  it('delete jobs by id', () => {
    const expected = 1
    const id = 2
    return db.deleteJobs(id, testDb)
      .then(number =>
        expect(number).toEqual(expected)
      )
  })
})

describe('delete jobs by id', () => {
  it('delete jobs by id', () => {
    const expected = 1
    const id = 2
    return db.deleteFlatmate(id, testDb)
      .then(number =>
        expect(number).toEqual(expected)
      )
  })
})

describe('add new job', () => {
  it('add new job', () => {
    const expected = 1
    const id = 2
    return db.deleteFlatmate(id, testDb)
      .then(number =>
        expect(number).toEqual(expected)
      )
  })
})

describe('userExists', () => {
  it('user exists', () => {
    const expected = true
    const email = 'row1@gmail.com'
    return db.userExists(email, testDb)
      .then(actualResult =>
        expect(actualResult).toEqual(expected)
      )
  })
})

describe('user does not Exists', () => {
  it('user does not exists', () => {
    const expected = false
    const email = 'roxw1@gmail.com'
    return db.userExists(email, testDb)
      .then(actualResult =>
        expect(actualResult).toEqual(expected)
      )
  })
})
