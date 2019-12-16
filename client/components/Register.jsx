import React, { useState } from 'react'
import { register, isAuthenticated } from 'authenticare/client'
import { Button, Form, Header, Grid, Segment, Message, Image } from 'semantic-ui-react'
import { getUserByName } from '../api/registerFlatDetails'

import { setError } from '../actions/error'

import { newUser } from '../actions/user'

import Footer from './Footer'
import { connect } from 'react-redux'

function Register (props) {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = () => {
    register({
      username: form.username,
      password: form.password
    }, {
      baseUrl: process.env.BASE_API_URL
    })
      .then(() => {
        if (isAuthenticated()) {
          getUserByName(form.username)
            .then(user => {
              props.newUser(user.id)

              props.history.push(`/register-flat/${user.id}`)
            })
        }
      })
      .catch(err => props.setError('Oops! Have you previously registered your flat with this email address? Log in below registration form! ', err))
  }

  const color = {
    orangeColor: 'orange'
  }

  return (
    <React.Fragment>
      <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 600 }}>
          <Header as='h1' color={color.orangeColor} textAlign='center'>
            <Image src='/favicon.png' /> Register To Flat Warming
          </Header>
          <Form size='huge'>
            <Segment stacked>

              <Form.Input
                name='username'
                type='email'
                value={form.username}
                onChange={handleChange}
                fluid
                icon='user'
                iconPosition='left'
                placeholder='E-mail address'
              />

              <Form.Input
                name='password'
                type='password'
                value={form.password}
                onChange={handleChange}
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
              />

              <Button
                color={color.orangeColor}
                fluid size='large'
                onClick={handleClick}
                disabled={
                  !form.password ||
                !form.username ||
                !form.username.includes('@')
                }
              >
                Register
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have an account? <a href='/log-in'>Log In </a>
          </Message>
        </Grid.Column>
      </Grid>
      <Footer />

    </React.Fragment>
  )
}

const mapDispatchToProps = {
  setError,
  newUser
}

const mapStateToProps = state => {
  return {
    error: state.error,
    setError
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
