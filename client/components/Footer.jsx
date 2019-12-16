import React from 'react'
import { Grid, Segment, Icon, Responsive, Image, List, Header } from 'semantic-ui-react'

class footer extends React.Component {
  footerStyle={
    display: 'flex',
    height: '100%',
    flexDirection: 'column'
  }

  footerStyleLeft={
    backgroundColor: '#808080'
  }

  footerStyleRight ={
    // backgroundColor:'#000000',
    textAlign: 'justify',
    padding: '1em 5em 3em 1em',
    // color:'#fbc707',
    fontWeight: 'bold'
  }

  iconStyle = {
    paddingTop: '1em',
    marginLeft: '0.5em'
    // backgroundColor:'#000000',
    // color:'#fbc707'
  }

  render () {
    return (
      <div>
        <Responsive minWidth={320} maxWidth={2559}>
          <Segment inverted vertical fixed='bottom' style={{ padding: '3em 0em', width: '100%' }}>
            <Grid>
              <Grid.Row>

                <Grid.Column width={2}>
                  <Image size='large' src='/favicon.png' />
                </Grid.Column>

                <Grid.Column width={8}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item>Office: 12 Morgan St, New Market</List.Item>
                    <List.Item>Phone Us @ 021 123456</List.Item>
                    <List.Item>Email us @ FlatWarming@gmail.com</List.Item>
                  </List>
                </Grid.Column>

                <Grid.Column width={2}>
                  <Icon name='facebook' style={this.iconStyle}/>
                  <Icon name='twitter square' style={this.iconStyle}/>
                  <Icon name='mail' style={this.iconStyle}/>
                  <Icon name='instagram' style={this.iconStyle}/>
                </Grid.Column>

              </Grid.Row>
            </Grid>
          </Segment>
        </Responsive>

      </div>
    )
  }
}

export default footer
