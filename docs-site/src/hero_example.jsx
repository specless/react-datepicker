import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default class HeroExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    }
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    })
  }

  render () {
    return <DatePicker
      autoFocus
      selected={this.state.startDate}
      onChange={this.handleChange}
      maxDate={moment().add(5, 'days')}
      minDate={moment().subtract(5, 'days')}
    />
  }
}
