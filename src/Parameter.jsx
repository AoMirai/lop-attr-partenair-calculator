import React, { Component } from 'react';
import Input from './Input';

let potential = ["Wisdom", "Politics", "Charisma", "Authority"]
class Parameter extends Component {

    render() {
        return (
            <div className="Parameter">
                <Input handleChange={this.props.handleChange} className='pot' name="Name" id="name" type="text" />
                <Input handleChange={this.props.handleChange} className='lvl' type="number" name="Level" id="lvl" />
                <h4>Potential</h4>
                {potential.map(pot =>
                    <Input handleChange={this.props.handleChangeStats}
                        className='pot'
                        type="number"
                        key={'pot' + pot}
                        id={'pot' + pot}
                        name={pot} />)}
                <h4>Bond</h4>
                {potential.map(pot =>
                    <Input handleChange={this.props.handleChangeStats}
                        className='bond'
                        type="number"
                        key={'bond' + pot}
                        id={'bond' + pot}
                        name={pot}
                    />)}
                <h4>Confident</h4>
                {potential.map(pot =>
                    <Input handleChange={this.props.handleChangeStats}
                        className='confident'
                        type="number"
                        key={'confident' + pot}
                        id={'confident' + pot}
                        name={pot} />)}
                <h4>Knowledge</h4>
                {potential.map(pot =>
                    <Input handleChange={this.props.handleChangeStats}
                        className='knowledge'
                        type="number"
                        key={'knowledge' + pot}
                        id={'knowledge' + pot}
                        name={pot} />)}
                <h4>Comprehension</h4>
                {potential.map(pot =>
                    <Input handleChange={this.props.handleChangeStats}
                        className='comprehension'
                        type="number"
                        key={'comprehension' + pot}
                        id={'comprehension' + pot}
                        name={pot} />)}
                <h4>Other</h4>
                {potential.map(pot =>
                    <Input handleChange={this.props.handleChangeStats}
                        className='other'
                        type="number"
                        key={'other' + pot}
                        id={'other' + pot}
                        name={pot} />)}
                <button onClick={this.props.onClickResult}>Calculer</button>
            </div>
        )
    }
}

export default Parameter;