import React, { Component } from 'react'

export default class CustomerRow extends Component {

  deleteRow(id) {
    console.log(id);
    this.props.delEvent(id);
  }

  render() {
    let {id, firstName, lastName, gender} = this.props.customer;
    return (
      <div>
        {firstName} {lastName} {gender}
        &nbsp; &nbsp;
        <button type="button" onClick={() => this.deleteRow(id)}>Delete</button>
      </div>
    )
  }
}
