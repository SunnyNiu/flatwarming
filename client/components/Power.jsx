import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class Power extends React.Component {
  state = {

  }

  render () {
    return (
      <>
      <Card color='red'>
      <img src='/power-1.jpg' style={{ height: '50vh', width: 'auto' }} />
      <Card.Content>
        <Card.Header>POWER BILL</Card.Header>
        <Card.Meta>
          <span className='date'>DUE IN 15 DAYS</span>
        </Card.Meta>
      </Card.Content>
    </Card></>
    )
  }
}

export default Power
