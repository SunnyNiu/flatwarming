import React from 'react'
import {
  Button,
  Form,
  Container,
  Dropdown,
  Grid,
  Header,
  Image,
  Segment,
  Icon
} from 'semantic-ui-react'

import JobList from './JobList'
import FlatmateList from './FlatmateList'
import * as jobsApi from '../api/jobs'
import { getJobsByUserId } from '../actions/jobs.action'
import { connect } from 'react-redux'
import { setError } from '../actions/error'

const options = [
  { key: 1, text: 'Monday', value: 'Monday' },
  { key: 2, text: 'Tuesday', value: 'Tuesday' },
  { key: 3, text: 'Wednesday', value: 'Wednesday' },
  { key: 4, text: 'Thursday', value: 'Thursday' },
  { key: 5, text: 'Friday', value: 'Friday' },
  { key: 6, text: 'Saturday', value: 'Saturday' },
  { key: 7, text: 'Sunday', value: 'Sunday' }
]
class AddNewJob extends React.Component {
  state = {
    name: null,
    jobId: null,
    flatmateId: null
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onChangeDropdownList = (event, data) => {
    this.setState({
      [data.name]: data.value
    })
  }

  onSubmit = () => {
    const { jobId, flatmateId, dueDay } = this.state
    const userId = this.props.userId

    const obj = {
      userId,
      jobId,
      flatmateId,
      dueDay
    }
    jobsApi.addJobToFlatmate(userId, obj)
      .then(() => this.props.dispatch(getJobsByUserId(userId)))
      .catch(setError)
  }

  eventHandlerJob = (job) => {
    this.setState({
      jobId: job ? job.id : null
    })
  }

  eventHandlerFlatmate = (flatmate) => {
    this.setState({
      flatmateId: flatmate ? flatmate.id : null
    })
  }

  render () {
    return (
      // <Container>
      <>
      <Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 600 }}>
        <Header as='h1' color='orange' textAlign='center' icon>
          <Icon name='arrow right'/>
          Add A Job
        </Header>
        <Form onSubmit={this.onSubmit}>
        <Segment stacked>
          <JobList
            name='jobId'
            label='Job:'
            required={true}
            eventHandlerJob={this.eventHandlerJob}
          />
          <FlatmateList
            userId= {this.props.userId}
            name='flatmateId'
            label='Flatmate:'
            required={true}
            eventHandlerFlatmate={this.eventHandlerFlatmate}
          />
          <Form.Field control={Dropdown}
            selection
            clearable
            placeholder="Due Day:"
            onChange={this.onChangeDropdownList}
            options={options}
            name="dueDay"
            label="Due Day"
            required={true}
          />
          <Form.Field
            control={Button}
          >
            Submit
          </Form.Field>
          </Segment>
        </Form>
        </Grid.Column>
      </Grid>
      {/* </Container> */}
      </>
    )
  }
}

export default connect(null)(AddNewJob)
