import React, { Component } from 'react';

class Input extends Component {

  render() {
    const { name, className, type, id, handleChange, value } = this.props;
    return (
      <div className={'Input ' + name}>
        <label htmlFor={name}>{name}</label>
        <input
          className={className}
          type={type}
          id={id}
          name={name}
          onChange={handleChange}
          value={value}
        />
      </div>
    )
  }
}

export default Input;