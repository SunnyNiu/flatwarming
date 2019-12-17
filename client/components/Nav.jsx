import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Dropdown, Menu, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { hideLogin, showLogin, hideReg, showReg, hideLogout } from '../actions/nav-buttons.action'

import ErrorComponent from './ErrorComponent'

const options = [
  { key: 1, text: 'Job Settings', value: 'jobsetting' },
  { key: 2, text: 'Flatmate Settings', value: 'flatmatesetting' }
]
class Nav extends React.Component {
  state = {
    setting: ''
  }

  clickRegister = () => {
    this.props.dispatch(hideReg())
    this.props.dispatch(showLogin())
  }

  clickLogin = () => {
    this.props.dispatch(hideLogin())
    this.props.dispatch(showReg())
  }

  clickLogout = () => {
    this.props.dispatch(hideLogout())
    this.props.dispatch(showReg())
  }

  clickHome = () => {
    this.props.dispatch(showReg())
    this.props.dispatch(showLogin())
  }

  onChangeDropdownList = (event, data) => {
    this.setState({
      setting: data.value
    }, () => this.navigateToSetting())
  }

  navigateToSetting = () => {
    const user = this.props.user
    const userId = user.userid
    const setting = this.state.setting
    const settingLink = `/setting/${userId}/${setting}`
    this.props.history.push(settingLink)
  }

  render () {
    return (
      <>
        <Container>
          <Menu inverted fixed='top'>
            <Menu.Item header as={Link} to='/' onClick={this.clickHome} style={{ fontSize: '1.3rem' }}>Flat Warming<img src='/favicon.png'></img></Menu.Item >

            <Menu.Menu position='right' style={{ fontSize: '1.2rem' }}>

              {this.props.register && <Menu.Item as={Link} to='/register' onClick={this.clickRegister}>
                <Icon name='pencil alternate' />Register
              </Menu.Item>
              }

              {this.props.login && <Menu.Item as={Link} to='/log-in' onClick={this.clickLogin}>
                <Icon name='sign in' />Log In
              </Menu.Item>
              }

              {this.props.logout &&
                <Dropdown item text='Settings'
                  options={options}
                  onChange={this.onChangeDropdownList}>
                </Dropdown>
              }

              {this.props.logout && <Menu.Item as={Link} to='/log-in' onClick={this.clickLogout}>
                <Icon name='log out' />Log Out
              </Menu.Item>
              }

            </Menu.Menu>
          </Menu>
        </Container>
        <Container>
          <ErrorComponent />
        </Container>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    login: state.login,
    register: state.register,
    logout: state.logout,
    user: state.userReducer
  }
}

export default connect(mapStateToProps)(Nav)
