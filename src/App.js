import React, { Component } from 'react';
import './App.css';
import Messages from './composition/Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import Tabs from './state/Tabs';


  const tabsProp = [
    { name: 'First tab',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
    { name: 'Second tab',
      content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { name: 'Third tab',
      content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
  ];

  class App extends Component {
  render() {
    return (
      <div className="App">

        <Tabs tabs={tabsProp}/>
      </div>
    );
  }
}

export default App;


/*   <h1>YOUR APPLICATION NAME!</h1>
  <Messages name="Messages" unread={0}/>
  <Messages name="Notifications" unread={10}/>
  <TheDate />
    <HelloWorld />
  <br /><br /><br />
  <Counter count ={123} />
  <Bomb />
  <RouletteGun />

    <br /><br /><br /> */
