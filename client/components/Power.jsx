import React from 'react'
import { Card, Popup } from 'semantic-ui-react'

class Power extends React.Component {
  state = {

  }

  componentDidMount () {
    this.setState({
      days: Number(this.props.duePowerDay[0])
    })
  }
  render () {
    return (
      <>
      {this.state.days
        ? <Card color='red'>
          <img src='/power-1 (1).jpg' style={{ height: '30vh', width: 'auto' }} />
          <div className="countholder">

            <h3>Power Bill</h3>
            <div style={{ padding: '4px 10px', display: 'inline-block' }}>{this.props.duePowerDay[0]}<span></span><div className="smalltext">Days</div></div>

            <div style={{ padding: '4px 10px', display: 'inline-block' }}>{this.props.duePowerDay[1]}<span></span><div className="smalltext">Hours</div></div>

            <div style={{ padding: '4px 10px', display: 'inline-block' }}>{this.props.duePowerDay[2]}<span></span><div className="smalltext">Mins</div></div>

            <div style={{ padding: '4px 10px', display: 'inline-block' }}>{this.props.duePowerDay[3]}<span></span><div className="smalltext">Secs</div></div>
          </div>
        </Card>
        : null }

      {!this.state.days &&
        <Popup
          content='LESS THAN 1 DAY LEFT'
          open
          position='top center'
          trigger={
            <Card color='red'>
              <img src='/power-1 (1).jpg' style={{ height: '30vh', width: 'auto' }} />
              <div className="countholder" style={{ color: '#f78686' }}>

                <h3>Power Bill</h3>
                <div style={{ padding: '4px 10px', display: 'inline-block' }}>{this.props.duePowerDay[0]}<span></span><div className="smalltext">Days</div></div>

                <div style={{ padding: '4px 10px', display: 'inline-block' }}>{this.props.duePowerDay[1]}<span></span><div className="smalltext">Hours</div></div>

                <div style={{ padding: '4px 10px', display: 'inline-block' }}>{this.props.duePowerDay[2]}<span></span><div className="smalltext">Mins</div></div>

                <div style={{ padding: '4px 10px', display: 'inline-block' }}>{this.props.duePowerDay[3]}<span></span><div className="smalltext">Secs</div></div>
              </div>
            </Card>} />
      }
      </>
    )
  }
}

export default Power
