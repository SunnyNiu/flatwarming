import React from 'react'
import { Card, Popup } from 'semantic-ui-react'

class Water extends React.Component {
  state = {
  }

  componentDidMount () {
    this.setState({
      days: Number(this.props.dueWaterDay[0])
    })
  }

  render () {
    return (
    <>
    {this.state.days
      ? <Card color='blue'>
        <img src='/water-1 (1).jpg' style={{ height: '30vh', width: 'auto' }} />
        <div className="countholder">
          <h3>Water Bill</h3>

          <div style={{ padding: '4px 10px', display: 'inline-block' }}>{this.props.dueWaterDay[0]}<span></span><div className="smalltext">Days</div></div>

          <div style={{ padding: '4px 10px', display: 'inline-block' }}>{this.props.dueWaterDay[1]}<span></span><div className="smalltext">Hours</div></div>

          <div style={{ padding: '4px 10px', display: 'inline-block' }}>{this.props.dueWaterDay[2]}<span></span><div className="smalltext">Mins</div></div>

          <div style={{ padding: '4px 10px', display: 'inline-block' }}>{this.props.dueWaterDay[3]}<span></span><div className="smalltext">Secs</div></div>
        </div>

      </Card>
      : null }

    {!this.state.days &&
    <Popup
      content='LESS THAN 1 DAY LEFT'
      open
      position='top center'
      trigger={
        <Card color='blue'>
          <img src='/water-1 (1).jpg' style={{ height: '30vh', width: 'auto' }} />
          <div className="countholder" style={{ color: '#f78686' }}>
            <h3>Water Bill</h3>

            <div style={{ padding: '4px 10px', display: 'inline-block' }}>{this.props.dueWaterDay[0]}<span></span><div className="smalltext">Days</div></div>

            <div style={{ padding: '4px 10px', display: 'inline-block' }}>{this.props.dueWaterDay[1]}<span></span><div className="smalltext">Hours</div></div>

            <div style={{ padding: '4px 10px', display: 'inline-block' }}>{this.props.dueWaterDay[2]}<span></span><div className="smalltext">Mins</div></div>

            <div style={{ padding: '4px 10px', display: 'inline-block' }}>{this.props.dueWaterDay[3]}<span></span><div className="smalltext">Secs</div></div>
          </div>

        </Card>}/>
    }
    </>
    )
  }
}

export default Water
