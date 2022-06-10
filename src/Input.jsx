import React, { Component } from 'react';

class Input extends Component {

    render() {
        return (
            <div>
                <label htmlFor="wis">{this.props.name}</label>
                <input
                type="text"
                id={this.props.name}
                name={this.props.name}
                onChange={this.props.handleChange}
              />
            </div>
        )
    }
}

export default Input;