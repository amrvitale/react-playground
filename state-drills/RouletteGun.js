import React, { Component } from 'react'

export default class RouletteGun extends Component {

  static defaultProps = {
    bulletInChamber: 8
  };

  state = {
    chamber: null,
    spinningTheChamber: false,
  };

componentWillUnmount() {
  clearTimeout(this.timeout)
}

handleClick = () => {
  this.setState({
    spinningTheChamber: true,
  })

  this.timeout = setTimeout(() => {
    const randomChamber = Math.ceil(Math.random() * 8)

    this.setState({
      chamber: randomChamber,
      spinningTheChamber: false,
    })
  }, 2000)
}

  renderDisplay() {
    const {chamber, spinningTheChamber} = this.state
    const {bulletInChamber} = this.props
    if (spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger!...'
    } else if (chamber === bulletInChamber) {
      return 'BANG!!!!!'
    } else {
      return 'You\'re safe!'
    }
  }

  render() {
    return (
      <div className='RouletteGun'>
      <p>{this.renderDisplay()}</p>
      <button onClick={this.handleClick}>
      Pull the trigger!
      </button>
      </div>
    )
  }

}

/*
component should render a div element.
Inside the div, there should be a p that contains the content of either:
spinning the chamber and pulling the trigger! ...
you're safe!
BANG!!!!
Inside the div, there should also be a button that contains Pull the trigger!.
The component will have an initial state with 2 properties, chamber that is initially set to null, and spinningTheChamber that is initially set to false.
The component will accept a prop called bulletInChamber that has a default value of 8.
When the user clicks the button, there should be a click event handler. The following steps should be in the handler:
The state should update spinningTheChamber to be true.
A timeout should be registered for 2 seconds.
Within the timeout, a random number between 1 and 8 should be generated.
Within the timeout, the state should be updated so that the generated random number is the new value for chamber and spinningTheChamber should be false.
The component should render the content of the p element according to the following rules:
If spinningTheChamber is true, render spinning the chamber and pulling the trigger! ....
If the chamber value in state is the same as the bulletInChamber value in props, render BANG!!!!.
Otherwise, render you're safe!!
If the component is to be unmounted, clear the timeout.
Tips:

To generate a random number between 1 and 8 you can use methods on the Math object like so: Math.ceil(Math.random() * 8).
A timeout will invoke a callback once after the time specified by the milliseconds argument.
You can create a timeout by using let timeout = setTimeout(callback, timeInMs).
You can clear a timeout by using clearTimeout(timeout).








*/
