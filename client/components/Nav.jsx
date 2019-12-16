import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Dropdown, Menu, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { hideLogin, showLogin, hideReg, showReg, hideLogout, showLogout } from '../actions/nav-buttons'

import ErrorComponent from './ErrorComponent'

class Nav extends React.Component {
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

  render () {
    const user =  this.props.user
    const userId = user[user.length-1]
    const settingLink = `/setting/${userId}`
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

              {this.props.logout && <Menu.Item as={Link} to={settingLink}>
              <Dropdown item text='Settings'>
                <Dropdown.Menu>
                <Dropdown.Item>Job Settings</Dropdown.Item>
                <Dropdown.Item>Flatmate Settings</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Menu.Item>
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
