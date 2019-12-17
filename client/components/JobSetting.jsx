import React from 'react'
import {
  Button,
  FormField,
  Input,
  Icon,
  Header,
  Grid,
  Image,
  Table
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { hideLogin, hideReg, showLogout } from '../actions/nav-buttons.action'

import { connect } from 'react-redux'
import { getJobs, removeJob, addJobSettingIntoDB } from '../actions/jobs.action'
import { setError } from '../actions/error.action'

class Setting extends React.Component {
  state = {
    inputValue: ''
  }

  changeHandle (value) {
    this.setState(
      {
        inputValue: value
      }
    )
  }

  hideNavButtons = () => {
    this.props.dispatch(hideReg())
    this.props.dispatch(hideLogin())
    this.props.dispatch(showLogout())
  }

  componentDidMount () {
    this.hideNavButtons()
    this.props.dispatch(getJobs())
      .catch(setError)
  }

  render () {
    const user = this.props.user
    const userId = user.userid
    const dashboardLink = `/dashboard/${userId}`
    return (
      <>
      <Grid textAlign='center' style={{ alignItems: 'center', padding: '8em 0em' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 800 }} textAlign='center'>
          <Header as='h2' textAlign='center'>
            <Icon name='settings' />
            Job Settings
          </Header>

          <Header as='h2' color='orange' textAlign='center'>
            <Image src='/favicon.png' /> Add or Remove Jobs
          </Header>

          <Table celled selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Job Description</Table.HeaderCell>
                <Table.HeaderCell>Remove?</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>

              { this.props.jobs.map((job, index) => (
                <Table.Row key={index}>

                  <Table.Cell textAlign='center'>
                    {job.job}
                  </Table.Cell>

                  <Table.Cell textAlign='center'>
                    <Button style={{ margin: 5 }} color='red' onClick={() => { this.props.dispatch(removeJob(userId, job.id)); this.props.dispatch(getJobs()) }}>
                X
                    </Button>
                  </Table.Cell>

                </Table.Row>))
              }

            </Table.Body>
          </Table>

          <FormField >
            <Input id="textfield1" type="text" onChange={(e) => this.changeHandle(e.target.value)}></Input>
            <Button style={{ margin: 5 }}
              color='green'
              onClick={() => {
                this.props.dispatch(addJobSettingIntoDB(this.state.inputValue))
                this.props.dispatch(getJobs())
                this.clearFields()
              }}>
              Add Job
            </Button>

            <Link to={dashboardLink}>Go Back To DashBoard</Link>
          </FormField>
        </Grid.Column>
      </Grid>

      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.jobsReducer.jobs,
    user: state.userReducer
  }
}
export default connect(mapStateToProps)(Setting)
