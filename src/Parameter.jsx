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
      name: '',
      potUp: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
      pourcentUp: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
      lvlup: 0
    }
  }

  handleRegisterPartners = (e) => {
    const partner = e.target.value;
    console.log(partner);
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
    this.props.handleRegister(update);
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

  mapPot = (name) => {
    return potential.map((pot, i) =>
      <Input handleChange={this.handleChangeStatsParameter}
        className={name}
        type="number"
        key={name + pot}
        id={name + pot}
        name={pot}
        value={this.state[name][i][pot]}
      />)
  }


  htmlPot = (name, title) => {
    return (<div className={'para ' + name}>
      <div className='title'>{title}</div>
      <div className='map'>
        {this.mapPot(name)}
      </div>
    </div>)
  }

  render() {
    const { listPartners } = this.props;
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
            {this.htmlPot('pot', 'Potential')}
            {this.htmlPot('bond', 'Bond %')}
            {this.htmlPot('confident', 'Confident %')}
          </div>
          <div className='wrap-content col'>
            {this.htmlPot('knowledge', 'Knowledge %')}
            {this.htmlPot('comprehension', 'Comprehension %')}
            {this.htmlPot('other', 'Other %')}
          </div>
          <div className='wrap-content col'>
            <div className='para up'>
              <h3>Upgrade</h3>
              <div className='block'>
                <div className='title'>Potential</div>
                <div className='map'>
                  {this.mapPot('potUp')}
                </div>
              </div>
              <div className='block'>
                <div className='title'>%</div>
                <div className='map'>
                  {this.mapPot('pourcentUp')}
                </div>
              </div>
              <div className='block'>
                <Input handleChange={this.handleChangeParameter} className='lvlUp' type="number" key='lvlUp' id='lvlUp' name='Level' value={this.state.lvlup} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Parameter;