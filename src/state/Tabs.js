import React from 'react';

class Tabs extends React.Component {
  static defaultProps = { tabs: [] };
  render() {
    const buttons = this.props.tabs.map((tab, index) => (
      <button key={index}>
      {tab.name}
      </button>
    ))
    const currentTab = this.props.tabs[0]
    return (
      <div>
      {buttons}
        <div className='content'>
          {currentTab.content}
        </div>
      </div>
    )
  }
}

export default Tabs;
/*
It should accept one prop named tabs
The tabs prop is an array of objects
Each item in the array has a name and content keys which are both strings
The tabs prop should be used to generate a row of buttons
Each button uses the tab object's name as its text
When you click on a tab button, it opens the tab
It shows a section underneath the buttons row
The section contains the content for the opened tab
The component should show the first tab content by default






*/
