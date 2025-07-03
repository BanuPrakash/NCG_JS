import React, { Component } from 'react'

export default class NameComponent extends Component {
  render() {
    console.log("NameComponent renders")
    return (
      <div>
        NameComponent, Name: {this.props.name}
    </div>
    )
  }
}
