const nock = require('nock')
const { getUserDetails } = require('../client/api/registerFlatDetails')

describe('Get User detail', () => {
  const apiURL = 'http://localhost:3000'

  it('should get user detail by Id', () => {
    const expected = {
      id: 1,
      email: 'row1@gmail.com',
      password: 'x1235r',
      userId: 1,
      address: 'rowValue1 street',
      suburb: 'suburb1',
      dayOfWeek: 'day1',
      names: 'rowValue1',
      powerDay: '11',
      waterDay: '22',
      wifiDay: '33'
    }

    nock(apiURL)
      .get('/1')
      .reply(200, expected)

    return getUserDetails(1)
      .then(userDetail => {
        expect(userDetail).toEqual(expected)
      })
  })
})
