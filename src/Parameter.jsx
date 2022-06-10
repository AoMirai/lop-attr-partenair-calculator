import React, { Component } from 'react';
import Input from './Input';

class Parameter extends Component {
    render() {
        return (
            <div className="Parameter">
                <Input handleChange={this.props.handleChange} name="Name"/>
                <Input handleChange={this.props.handleChange} name="Wisdom"/>
                <h4>Potential</h4>
                <div>
                    <div>
                        <label htmlFor="wis">Wisdom</label>
                        <input type="text" className='wis' />
                    </div>
                    <div>
                        <label htmlFor="pol">Politics Potential</label>
                        <input type="text" className='pol' />
                    </div>
                    <div>
                        <label htmlFor="cha">Charisma Potential</label>
                        <input type="text" className='cha' />
                    </div>
                    <div>
                        <label htmlFor="aut">Authority Potential</label>
                        <input type="text" className='aut' />
                    </div>
                </div>
                <h4>Bond</h4>
                <div>
                    <div>
                        <label htmlFor="bond">% Bond Wisdom</label>
                        <input type="text" className='bond' />
                    </div>
                    <div>
                        <label htmlFor="bond">% Bond Politics</label>
                        <input type="text" className='bond' />
                    </div>
                    <div>
                        <label htmlFor="bond">% Bond Charisma</label>
                        <input type="text" className='bond' />
                    </div>
                    <div>
                        <label htmlFor="bond">% Bond Authority</label>
                        <input type="text" className='bond' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Parameter;