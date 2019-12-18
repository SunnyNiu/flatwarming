import React from 'react'
import {
  Table,
  Icon,
  Header
} from 'semantic-ui-react'

import { connect } from 'react-redux'

class Jobs extends React.Component {
  render () {
    console.log('this.props.jobDetail:', this.props.jobDetail)
    return (
      <>
      <Header as='h2' textAlign='center' block>
        <Icon name='sticky note outline' />
        <Header.Content>
          Flat Jobs
          <Header.Subheader>Manage your flat maintainence</Header.Subheader>
        </Header.Content>
      </Header>
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Job</Table.HeaderCell>
            <Table.HeaderCell>Due Day</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            this.props.jobDetail.map((job, index) => (
              <Table.Row key={index}>
                <Table.Cell>
                  {job.name}
                </Table.Cell>
                <Table.Cell key={index}>
                  {job.job}
                </Table.Cell>
                <Table.Cell key={index}>
                  {job.dueDay}
                </Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
        </>
    )
  }
}

const mapStateToProps = state => {
  return {
    jobDetail: state.jobsReducer.jobsDetail
  }
}
export default connect(mapStateToProps)(Jobs)
