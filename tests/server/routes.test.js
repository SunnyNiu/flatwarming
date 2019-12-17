const request = require('supertest')
const server = require('../../server/server')

const mockUser = {
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
  wifiDay: '33',
  job: 'rowValue1',
  dueDay: '1234'

}

jest.mock('../../server/db/users', () => ({
  getUserDetail: () => Promise.resolve(mockUser),
  addDetail: () => Promise.resolve(mockUser),
  deleteJobs: () => Promise.resolve(mockUser),
  deleteFlatmate: () => Promise.resolve(mockUser),
  userExists: () => Promise.resolve(mockUser)
}))

describe('Gets user detail by id', () => {
  it('GET /:id', () => {
    return request(server)
      .get('/api/v1/users/1')
      .then((res) => {
        expect(res.body).toEqual(mockUser)
      })
  })
})

describe('Add more detail to a user', () => {
  it('POST /register/:id', () => {
    const moreDetail = {
      address: 'test for route post register/:id',
      suburb: 'test4',
      names: ['test4', 'test5'],
      powerDay: 'test power day',
      waterDay: 'test water day',
      wifiDay: 'test wifi day'

    }

    return request(server)
      .post('/api/v1/users/register/4')
      .send(moreDetail)
      .then((res) => {
        expect(res.body).toEqual(mockUser)
      })
  })
})
