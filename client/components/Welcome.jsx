import React from 'react'
import { Image } from 'semantic-ui-react'
import WelcomeText from './WelcomeText'
import { connect } from 'react-redux'
import { showLogin, showReg, hideLogout } from '../actions/nav-buttons'
import { setError } from '../actions/error'

class welcomeImg extends React.Component {
  showNavButtons = () => {
    this.props.dispatch(showReg())
    this.props.dispatch(showLogin())
    this.props.dispatch(hideLogout())
  }

  componentDidMount () {
    this.showNavButtons()
    this.props.dispatch(setError(''))
  }

  render () {
    return (
      <>
      <Image style={{ marginBottom: 0 }}
        src='welcome-2.jpg'
      />
      <WelcomeText />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    login: state.login,
    register: state.register,
    logout: state.logout,
    setError
  }
}

export default connect(mapStateToProps)(welcomeImg)
