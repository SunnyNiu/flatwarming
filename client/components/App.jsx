import React from 'react'
import LogIn from './LogIn'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Register from './Register'
import Nav from './Nav'
import { Container } from 'semantic-ui-react'
import RegisterFlatDetails from './RegisterFlatDetails'
import Dashboard from './Dashboard'
import Welcome from './Welcome'

class App extends React.Component {
  render () {
    return (
      <div>
        <Router>
        
              <Route path='/' component={Nav} />
              <Route exact path='/' component={Welcome} />
              
              <Container>
                <Switch>
                  <Route exact path='/register-flat' component={RegisterFlatFetails} ></Route>
                  <Route path='/register' component={Register} />
                  <Route exact path='/log-in' component={LogIn} ></Route>
                  <Route path='/dashboard' component={Dashboard} ></Route>
                </Switch>
              </Container>
          
        </Router>
      </div>
    )
  }
}

export default App
