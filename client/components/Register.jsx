import React, { useState } from 'react'
import { register, isAuthenticated } from 'authenticare/client'
import { Button, Form } from 'semantic-ui-react'

export default function Register (props) {
 
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
      .then((token) => {
        console.log(token, 'token!')
        if (isAuthenticated()) {
          props.history.push('/')
        }
      })
  }

  return (
    <React.Fragment>
      <h2>Register</h2>
    <Form>
    <Form.Field>
      <label>Email</label>
      <input name='username' type='email'
          value={form.username}
          onChange={handleChange} 
       />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input name='password' type='password'
          value={form.password}
          onChange={handleChange} 
      />
    </Form.Field>
    <Form.Field type='button' onClick={handleClick}
     control={Button}
     disabled={
       !form.password ||
       !form.username ||
       !form.username.includes('@') 
     }
       >Register
       </Form.Field>
  </Form>
  </React.Fragment>
  )
}