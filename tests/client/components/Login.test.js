import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store'

import Login from '../../../client/components/LogIn'

const middleware = []
const mockStore = configureStore(middleware)

describe('<Login /> component tests', () => {
  it('render unchanged from previous snapshot', () => {
    const initialState = {
      login: true,
      register: true
    }

    const store = mockStore(initialState)
    const component =
    <Provider store = {store}>
      <Login />
    </Provider>

    const wrapper = mount(component)

    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
