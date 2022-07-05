import React, { Component } from 'react';
import Input from './Input';

let potential = ["Wisdom", "Politics", "Charisma", "Authority"]
class Parameter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pot: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
            bond: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
            confident: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
            knowledge: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
            comprehension: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
            other: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
            lvl: 0,
            name: ''
        }
    }

    handleRegisterPartners = (e) => {
        const partner = e.target.value;
        const { listPartners } = this.props;
        let update = { name: partner };
        const newPartner = {
            pot: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
            bond: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
            confident: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
            knowledge: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
            comprehension: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
            other: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
            lvl: 0,
            name: ''
        }
        if (listPartners[partner] !== undefined) {
            for (const key in listPartners[partner]) {
                if (Object.hasOwnProperty.call(listPartners[partner], key)) {
                    update[key] = listPartners[partner][key];
                }
            }
        } else {
            update = newPartner;
        }
        console.log(update);
        this.setState(update);
    }

    handleChangeParameter = (event) => {
        this.setState({ [event.target.id]: event.target.value });
        this.props.handleChange(event);
    }

    handleChangeStatsParameter = (event) => {
        for (let i = 0; i < 4; i++) {
          let updateState = this.state[event.target.className];
          let state = { ...updateState[i] };
          if (Object.keys(updateState[i])[0] === event.target.name)
            state[event.target.name] = parseFloat(event.target.value);
          updateState[i] = state;
          this.setState({ [event.target.className]: updateState });
        }
        this.props.handleChangeStats(event);
      }

    render() {
        const { handleChangeStats, listPartners } = this.props;
        const partnerName = [];
        for (const key in listPartners) {
            if (Object.hasOwnProperty.call(listPartners, key)) {
                partnerName.push(key);
            }
        }
        return (
            <div className="Parameter">
                <div className='wrap-content col'>
                    <select onChange={this.handleRegisterPartners} className='name' >
                        <option value="">New Partner</option>
                        {partnerName.map((x, i) => <option key={i} value={x}>{x}</option>)}
                    </select>
                    <Input handleChange={this.handleChangeParameter} className='name' name="Name" id="name" type="text" value={this.state.name} />
                    <Input handleChange={this.handleChangeParameter} className='lvl' type="number" name="Level" id="lvl" value={this.state.lvl} />
                </div>
                <div className='wrap-content'>

                    <div className='wrap-content col'>
                        <div className='para pot'>
                            <div className='title'>Potential</div>
                            <div className='map'>
                                {potential.map((pot, i) =>
                                    <Input handleChange={this.handleChangeStatsParameter}
                                        className='pot'
                                        type="number"
                                        key={'pot' + pot}
                                        id={'pot' + pot}
                                        name={pot}
                                        value={this.state.pot[i][pot]}
                                    />)}
                            </div>
                        </div>
                        <div className='para bond'>
                            <div className='title'>Bond %</div>
                            <div className='map'>
                                {potential.map((pot, i) =>
                                    <Input handleChange={this.handleChangeStatsParameter}
                                        className='bond'
                                        type="number"
                                        key={'bond' + pot}
                                        id={'bond' + pot}
                                        name={pot}
                                        value={this.state.bond[i][pot]}
                                    />)}
                            </div>
                        </div>
                        <div className='para confident'>
                            <div className='title'>Confident %</div>
                            <div className='map'>
                                {potential.map((pot, i) =>
                                    <Input handleChange={this.handleChangeStatsParameter}
                                        className='confident'
                                        type="number"
                                        key={'confident' + pot}
                                        id={'confident' + pot}
                                        name={pot}
                                        value={this.state.confident[i][pot]}
                                    />)}
                            </div>
                        </div>
                    </div>
                    <div className='wrap-content col'>
                        <div className='para knowledge'>
                            <div className='title'>Knowledge %</div>
                            <div className='map'>
                                {potential.map((pot, i) =>
                                    <Input handleChange={this.handleChangeStatsParameter}
                                        className='knowledge'
                                        type="number"
                                        key={'knowledge' + pot}
                                        id={'knowledge' + pot}
                                        name={pot}
                                        value={this.state.knowledge[i][pot]}
                                    />)}
                            </div>
                        </div>
                        <div className='para comprehension'>
                            <div className='title'>Comprehension %</div>
                            <div className='map'>
                                {potential.map((pot, i) =>
                                    <Input handleChange={this.handleChangeStatsParameter}
                                        className='comprehension'
                                        type="number"
                                        key={'comprehension' + pot}
                                        id={'comprehension' + pot}
                                        name={pot}
                                        value={this.state.comprehension[i][pot]}
                                    />)}
                            </div>
                        </div>
                        <div className='para other'>
                            <div className='title'>Other %</div>
                            <div className='map'>
                                {potential.map((pot, i) =>
                                    <Input handleChange={this.handleChangeStatsParameter}
                                        className='other'
                                        type="number"
                                        key={'other' + pot}
                                        id={'other' + pot}
                                        name={pot}
                                        value={this.state.other[i][pot]}
                                    />)}
                            </div>
                        </div>
                    </div>
                    <div className='wrap-content col'>
                        <div className='para up'>
                            <h3>Upgrade</h3>
                            <div className='block'>
                                <div className='title'>Potential</div>
                                <div className='map'>
                                    {potential.map((pot, i) =>
                                        <Input handleChange={handleChangeStats}
                                            className='potUp'
                                            type="number"
                                            key={'up' + pot}
                                            id={'up' + pot}
                                            name={pot} />)}
                                </div>
                            </div>
                            <div className='block'>
                                <div className='title'>%</div>

                                <div className='map'>
                                    {potential.map((pot, i) =>
                                        <Input handleChange={handleChangeStats}
                                            className='pourcentUp'
                                            type="number"
                                            key={'%up' + pot}
                                            id={'%up' + pot}
                                            name={pot} />)}
                                </div>
                            </div>
                            <div className='block'>
                                <Input handleChange={handleChangeStats}
                                    className='lvlUp'
                                    type="number"
                                    key='lvlUp'
                                    id='lvlUp'
                                    name='Level' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Parameter;