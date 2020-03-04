import React, { Component } from 'react'

export default class HelloWorld extends Component {

  state = {
    who: 'world',
  };

  render() {
    return (

    <div className = 'HelloWorld'>
      <p>Hello, {this.state.who}!</p>
      <button
        onClick = {() => this.setState({who: 'world'})}>
        World
      </button>

      <br/>

      <button
        onClick ={() => this.setState({who:'friend'})}>
        Friend
      </button>
      <br/>

      <button
        onClick ={() => this.setState({who:'React'})}>
        React
        </button>
    </div>
     )
  }
}



/*The component should render an outer div element.
Inside the div there should be p element containing Hello, world. The word "world" should come from state in a property named who.
The component should also display 3 buttons, one for each: "World", "Friend" and "React".
When a user clicks on one of the 3 buttons, use state and an event handler to update the state property who so that the content in the p element changes.
If the user clicks the "Friend" button, the p displays Hello, friend!.
If the user clicks the "React" button, the p displays Hello, React!.
If the user clicks the "World" button, the p displays Hello, world!.*/
