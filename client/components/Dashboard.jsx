import React from 'react'
import { Container, Grid, Image, Divider,Responsive } from 'semantic-ui-react'

import Power from './Power'
import Internet from './Internet'
import Water from './Water'
import Rubbish from './Rubbish'
import Names from './Names'
import Footer from './Footer'
import Jobs from './Jobs'
import AddNewJob from './AddNewJob'
import { connect } from 'react-redux'
import { hideLogin, hideReg, showLogout } from '../actions/nav-buttons'

import { getUserDetails } from '../api/registerFlatDetails'
import { setError } from '../actions/error'
import { getJobs } from '../actions/jobs.action'
import { getFlatmates } from '../actions/flatmates.action'
import { getJobsByUserId } from '../actions/jobs.action'
import moment from 'moment'

const calculateDueDay = function (dayPay) {
  const now = moment()
  const date = now.date()
  const month = now.month() === 11 ? 0 : now.month() + 1
  const year = now.month() === 11 ? now.year() + 1 : now.year()
  const nextMonth = (month === 11 ? 0 : month + 1)
  const daypay = Number(dayPay)
  if (date <= daypay) {
    const then = moment({ year, month: month, day: daypay, hour: 23, minute: 59, second: 59 });
    return countdownTime(then, now)
  } else {
    const then = moment({ year, month: nextMonth, day: daypay, hour: 23, minute: 59, second: 59 });
    return countdownTime(then, now)
  }
}

const countdownTime = function (then, today) {
  const countdown = moment.duration(then.diff(today))
  const days = countdown.days()
  const hours = countdown.hours()
  const minutes = countdown.minutes()
  const seconds = countdown.seconds()
  return [days, hours, minutes, seconds]
}

class Dashboard extends React.Component {
  state = {
    details: '',
    secondsLeft: null,
    time: new Date().toLocaleString()
  }

  removeNavButtons = () => {
    this.props.dispatch(hideReg())
    this.props.dispatch(hideLogin())
    this.props.dispatch(showLogout())
  }

  componentDidMount() {
    this.removeNavButtons()
    getUserDetails(this.props.match.params.usersId)
      .then(res => {
        this.setState({
          details: res
        })
      })

    this.props.dispatch(getJobs())
      .catch(setError)

    this.props.dispatch(getFlatmates(this.props.match.params.usersId))
      .catch(setError)

    this.props.dispatch(getJobsByUserId(this.props.match.params.usersId))
      .catch(setError)

    this.intervalID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  tick() {
    this.setState({
      time: new Date().toLocaleString()
    })
  }

  gridStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center'
  }

  render() {
    if (this.state.details === '') {
      return null
    }
    const { powerDay, waterDay, wifiDay } = this.state.details
    const duePowerDay = calculateDueDay(powerDay)
    const dueWaterDay = calculateDueDay(waterDay)
    const dueWifiDay = calculateDueDay(wifiDay)


    return (
      <>
        <Names/>
        <Responsive>
          <Grid celled style={this.gridStyle}>
            <Grid.Row width={16}>
              <Grid.Column>
                <Divider horizontal style={{ padding: 20 }}>BILLS</Divider>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column mobile={0} tablet={8} computer={2} ></Grid.Column>

              <Grid.Column mobile={10} tablet={8} computer={3} >
                <Power duePowerDay={duePowerDay} />
              </Grid.Column>

              <Grid.Column mobile={10} tablet={8} computer={3} >
                <Internet dueWifiDay={dueWifiDay} />
              </Grid.Column>

              <Grid.Column mobile={10} tablet={8} computer={3} >
                <Water dueWaterDay={dueWaterDay} />
              </Grid.Column>

              {/* <Grid.Column mobile={10} tablet={8} computer={3} >
                <Rubbish day={this.state.details.dayOfWeek} />
              </Grid.Column> */}
              <Grid.Column mobile={0} tablet={8} computer={2} ></Grid.Column>

            </Grid.Row>

            <Grid.Row>

              <Grid.Column mobile={12} tablet={8} computer={4}>
                <AddNewJob userId={this.props.match.params.usersId} />
              </Grid.Column>

              <Grid.Column computer={12}>
                <Jobs userId={this.props.match.params.usersId} />
              </Grid.Column>

            </Grid.Row>
          </Grid>
        </Responsive>
        <Footer /></>
    )
  }
}

const mapStateToProps = state => {
  return {
    login: state.login,
    register: state.register,
    logout: state.logout,
    flatmateDetail: state.flatmateDetailReducer,
    error: state.error
  }
}

export default connect(mapStateToProps)(Dashboard)
