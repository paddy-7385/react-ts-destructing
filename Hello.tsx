import React, { Component } from 'react';

export default class Hello extends Component {
  render() {
    console.log( this.props);
    let {firstName,lastName} = this.props;

    return(
      <div>
        <div>firstName: {firstName}</div>
        <div>lastName: {lastName}</div>
      </div>
    )
  }
}