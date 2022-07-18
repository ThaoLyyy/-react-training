import React from 'react'

class Lists extends React.Component {

    strings = ['Hi I am Ly','Hello', 'Whats up']
  render() {
    return (
      <div>
        <ul>
            {this.strings.map((item) => <li key = {item}>{item}</li>)}
        </ul>
      </div>
    )
  }
}
export default Lists;
