import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store'

import Register from '../../../client/components/Register'

const middleware = []
const mockStore = configureStore(middleware)

describe('<Register /> component tests', () => {
  it('render unchanged from previous snapshot', () => {
    const initialState = {
      login: true,
      register: true
    }

    const store = mockStore(initialState)
    const component =
    <Provider store = {store}>
      <Register />
    </Provider>

    const wrapper = mount(component)

    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
