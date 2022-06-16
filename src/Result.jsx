
import React, { Component } from 'react';

class Result extends Component {

    render() {
        return (
            <div className="Result">
                <input value={this.props.value} readOnly></input>
            </div>
        )
    }
}

export default Result;