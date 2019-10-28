import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    console.log(props.value)
    super(props)
    this.state = {
      color: props.value
    }
    this.colorChange = this.colorChange.bind(this)
  }

  colorChange() {
    const newColor = "#333"
    this.setState({
      color: newColor
    })
  }


  render() {

    return (
      <div onClick={this.colorChange} className="cell" style={{backgroundColor: this.state.color}}></div>
    )
  }
}