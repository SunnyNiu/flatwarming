import React from 'react'
import { mount } from 'enzyme'

import Water from '../../../client/components/Water'

describe('<Water /> component tests', () => {
  it('contains "WATER BILL"', () => {
    const expected = 'Water Bill'
    const component = <Water dueWaterDay={['12', '10', '15', '5']}/>

    const wrapper = mount(component)
    const actual = wrapper.text()
    expect(actual).toMatch(expected)
  })
})
