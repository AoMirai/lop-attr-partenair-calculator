import React, { Component } from 'react';

class Input extends Component {

    render() {
        return (
            <div>
                <label htmlFor={this.props.name}>{this.props.name}</label>
                <input
                className={this.props.className}
                type={this.props.type}
                id={this.props.id}
                name={this.props.name}
                onChange={this.props.handleChange}
              />
            </div>
        )
    }
}

export default Input;