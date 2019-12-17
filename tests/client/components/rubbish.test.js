import React from 'react'
import { mount } from 'enzyme'

import Rubbish from '../../../client/components/Rubbish'

describe('<Rubbish /> component tests', () => {
  it('contains "RUBBISH DAY"', () => {
    const expected = 'Rubbish Pickup'
    const component = <Rubbish />

    const wrapper = mount(component)
    const actual = wrapper.text()
    expect(actual).toMatch(expected)
  })
})
