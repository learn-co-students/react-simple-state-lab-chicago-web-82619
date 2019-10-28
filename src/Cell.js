import React, { Component } from 'react';

export default class Matrix extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: this.props.value
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
           return { color: '#333' }
        });
    }

    render() {
        return <div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}></div>
    }
}