import React from 'react'
import { Segment, Grid, Header, Button, Container, Image } from 'semantic-ui-react'
import Footer from './Footer'

const WelcomeText = () => {
  return (
    <>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                We Help Tenants Spend Less Time on Admin
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Here at FlatWarming we believe that your time is valuable. We want to help you spend more time on the things that really matter, and less time sweating the small stuff.
              </p>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Never Forget Your Rubbish Again
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                We want to provide your flat with a single space for all your flat related reminders, so you never forget to pay your power bill or take your rubbish out again.
              </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image bordered size='large' src='flat2.jpg' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "What an App"
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/matt.jpg' />
              <b>Matt Martin</b> Engineer Rocket Lab
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "My relationship with my flatties is so much better now!"
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/brittany.png' />
              <b>Brittany Walker</b> Chief Fun Officer Vend
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Break the Mold of Messy, Unorganised Tenants
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          For too long tenants have had a bad rep. Lets change that.
        </p>
        <p style={{ fontSize: '1.33em' }}>
          By consolidating all the flat admin into one easy to access location, we hope to mend the reputation of tenants, and create a better relationship between tenants and landlords.
        </p>
        <Button size='large' style={{ textDecoration: 'none' }}>
          <a href='https://www.rentecdirect.com/blog/damage-landlord-tenant-relationship/' target='_blank'> Read More </a>
        </Button>
      </Container>
    </Segment>
    <Footer />

    </>
  )
}
export default WelcomeText
