mport React, { Component } from 'react'

export default class Accordion extends Component {
  static defaultProps = { sections: [] };

  state = activeSectionIndex: null,
}


handleSetActiveSecion = (sectionIndex) => {
  this.setState({ activeSectionIndex: sectionIndex })
}

renderItem(section, idx, activeSectionIndex) {
  return (
    <li className='Accordion__item' key={idx}>
      <button
        type='button'
        onClick={() => this.handleSetActiveSecion(idx)}
      >
        {section.title}
      </button>
      {(activeSectionIndex === idx) && <p>{section.content}</p>}
    </li>
  )
}

render() {
  const { activeSectionIndex } = this.state
  const { sections } = this.props
  return (
    <ul className='Accordion'>
      {sections.map((section, idx) =>
        this.renderItem(section, idx, activeSectionIndex)
      )}
    </ul>
  )
}
}






















/*
The Accordion component should accept a prop named sections.
The sections prop should be an array of objects, each object should contain two keys, title, a string of the section's title and content, a string of the section's content.
An example object to use as props for developing and testing is supplied below.
The accordion renders a <ul>, inside the ul will be a li element for each section. Each section's li should be a button containing the section's title.
When a button is clicked, a p should be rendered below the button that was clicked (inside the li) that displays the section's content. You can use conditional rendering to display this p with the section content.
When a button is clicked, only that section should be open and the other sections should be closed.
You should write at least 4 snapshot tests for the Accordion component:
The component renders an empty li when the sections prop is not supplied.
The component renders no sections as active by default.
The component opens a clicked section.
The component only opens the last section when multiple sections have been clicked.


*/
