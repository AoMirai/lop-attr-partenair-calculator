import React, { Component } from 'react';
import Input from './Input';

let potential = ["Wisdom", "Politics", "Charisma", "Authority"]
class Parameter extends Component {

    render() {
        return (
            <div className="Parameter">
                <div className='wrap-content col'>
                    <Input handleChange={this.props.handleChange} className='pot' name="Name" id="name" type="text" />
                    <Input handleChange={this.props.handleChange} className='lvl' type="number" name="Level" id="lvl" />
                </div>
                <div className='wrap-content'>

                    <div className='wrap-content col'>

                        <div className='para pot'>
                            <div className='title'>Potential</div>
                            <div className='map'>
                                {potential.map(pot =>
                                    <Input handleChange={this.props.handleChangeStats}
                                        className='pot'
                                        type="number"
                                        key={'pot' + pot}
                                        id={'pot' + pot}
                                        name={pot} />)}
                            </div>
                        </div>
                            <div className='para bond'>
                                <div className='title'>Bond %</div>
                                <div className='map'>
                                    {potential.map(pot =>
                                        <Input handleChange={this.props.handleChangeStats}
                                            className='bond'
                                            type="number"
                                            key={'bond' + pot}
                                            id={'bond' + pot}
                                            name={pot}
                                        />)}
                                </div>
                            </div>
                            <div className='para confident'>
                                <div className='title'>Confident %</div>
                                <div className='map'>
                                    {potential.map(pot =>
                                        <Input handleChange={this.props.handleChangeStats}
                                            className='confident'
                                            type="number"
                                            key={'confident' + pot}
                                            id={'confident' + pot}
                                            name={pot} />)}
                                </div>
                            </div>
                            <div className='para knowledge'>
                                <div className='title'>Knowledge %</div>
                                <div className='map'>
                                    {potential.map(pot =>
                                        <Input handleChange={this.props.handleChangeStats}
                                            className='knowledge'
                                            type="number"
                                            key={'knowledge' + pot}
                                            id={'knowledge' + pot}
                                            name={pot} />)}
                                </div>
                            </div>
                            <div className='para comprehension'>
                                <div className='title'>Comprehension %</div>
                                <div className='map'>
                                    {potential.map(pot =>
                                        <Input handleChange={this.props.handleChangeStats}
                                            className='comprehension'
                                            type="number"
                                            key={'comprehension' + pot}
                                            id={'comprehension' + pot}
                                            name={pot} />)}
                                </div>
                            </div>
                            <div className='para other'>
                                <div className='title'>Other %</div>
                                <div className='map'>
                                    {potential.map(pot =>
                                        <Input handleChange={this.props.handleChangeStats}
                                            className='other'
                                            type="number"
                                            key={'other' + pot}
                                            id={'other' + pot}
                                            name={pot} />)}
                                </div>
                            </div>
                    </div>
                    <div className='wrap-content col'>
                        <div className='para up'>
                            <h3>Upgrade</h3>
                            <div className='title'>Potential</div>
                            <div className='map'>
                                {potential.map(pot =>
                                    <Input handleChange={this.props.handleChangeStats}
                                        className='up'
                                        type="number"
                                        key={'up' + pot}
                                        id={'up' + pot}
                                        name={pot} />)}
                            </div>

                            <div className='title'>%</div>

                            <div className='map'>
                                {potential.map(pot =>
                                    <Input handleChange={this.props.handleChangeStats}
                                        className='up'
                                        type="number"
                                        key={'%up' + pot}
                                        id={'%up' + pot}
                                        name={pot} />)}
                            </div>
                            <Input handleChange={this.props.handleChange}
                                className='up'
                                type="number"
                                key='uplvl'
                                id='uplvl'
                                name='Level' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Parameter;