import React from 'react'
import { Header } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Names extends React.Component {
  flatmateFunction = () => {
    const newArr = []
    const flatmates = this.props.flatmates
    for (let i = 0; i < flatmates.length; i++) {
      newArr.push(flatmates[i].name)
    }
    return newArr.join(' ')
  }

  render () {
    return (
      <>
        <Header size='large' style={{ color: 'orange', marginTop: 100 }} textAlign='center'>
            Welcome back {this.flatmateFunction()}!
        </Header>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    flatmates: state.flatmatesReducer
  }
}

export default connect(mapStateToProps)(Names)
