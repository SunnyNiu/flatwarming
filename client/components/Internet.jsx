import React from 'react'
import { Card, Icon, Image, Popup } from 'semantic-ui-react'

class Internet extends React.Component {
  state = {
  }

  componentDidMount () {
    this.setState({
      days: Number(this.props.dueWifiDay[0])
    })
  }

  render () {
    return (
      <>
      

    {this.state.days ?
      <Card color='orange'>
        <img src='/wifi-1 (1).jpg' size='large' style={{ height: '30vh', width: 'auto' }} />
        <div className="countholder">
          <h3>Internet Bill</h3>

          <div style={{ padding: '4px 10px', display: 'inline-block'}}>{this.props.dueWifiDay[0]}<span></span><div className="smalltext">Days</div></div>

          <div style={{ padding: '4px 10px', display: 'inline-block' }}>{this.props.dueWifiDay[1]}<span></span><div className="smalltext">Hours</div></div>

          <div style={{ padding: '4px 10px', display: 'inline-block' }}>{this.props.dueWifiDay[2]}<span></span><div className="smalltext">Mins</div></div>

          <div style={{ padding: '4px 10px', display: 'inline-block' }}>{this.props.dueWifiDay[3]}<span></span><div className="smalltext">Secs</div></div>
        </div>
      </Card>
      : null }

      {!this.state.days &&
       <Popup
        content='DUE SOON'
        open
        position='top center'
        trigger={
        <Card color='orange'>
          <img src='/wifi-1 (1).jpg' size='large' style={{ height: '30vh', width: 'auto' }} />
          <div className="countholder" style={{color: '#f78686'}}>
          <h3>Internet Bill</h3>

          <div style={{ padding: '4px 10px', display: 'inline-block' }}>{this.props.dueWifiDay[0]}<span></span><div className="smalltext">Days</div></div>

          <div style={{ padding: '4px 10px', display: 'inline-block' }}>{this.props.dueWifiDay[1]}<span></span><div className="smalltext">Hours</div></div>

          <div style={{ padding: '4px 10px', display: 'inline-block' }}>{this.props.dueWifiDay[2]}<span></span><div className="smalltext">Mins</div></div>

          <div style={{ padding: '4px 10px', display: 'inline-block' }}>{this.props.dueWifiDay[3]}<span></span><div className="smalltext">Secs</div></div>
        </div>
      </Card>}/>
      }
      </>
    )
  }
}

export default Internet
