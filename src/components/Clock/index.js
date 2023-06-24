import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: props.date1}
    console.log('constructor method  is first method in mounting phase')
  }

  componentDidMount() {
    console.log('Component Did Mount is last method in mounting phase')
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    console.log(
      'componentWillUnmount is last method in component Lifecycle methods',
    )
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    console.log('render method is  second method in mounting phase')
    const {date} = this.state
    return (
      <div className="clock-container">
        <h1 className="heading">{date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}
export default Clock
