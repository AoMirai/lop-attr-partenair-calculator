import React, { Component } from 'react';
import History from './History';
import Parameter from './Parameter';
import Result from './Result';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: [],
      history: [],
      pot: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
      bond: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
      confident: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
      knowledge: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
      comprehension: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
      other: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
      potUp: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
      pourcentUp: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }]
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleChangeStats = (event) => {
    for (let i = 0; i < 4; i++) {
      let updateState = this.state[event.target.className];
      let state = { ...updateState[i] };
      if (Object.keys(updateState[i])[0] === event.target.name)
        state[event.target.name] = parseFloat(event.target.value);
      updateState[i] = state;
      this.setState({ [event.target.className]: updateState });
    }
  }

  onClickResult = () => {

    let {name, potUp, lvlUp, pourcentUp, bond, confident, knowledge, comprehension, other, pot} = this.state;
    lvlUp = parseFloat(lvlUp);
    let totalAttr = 0;
    let totalPourcent = 0;
    let result = 0;
    const lvl = parseFloat(this.state.lvl)
    let coef = (((lvl * lvl) + lvl + 18) / 10);
    let totalAttrUp = 0;
    let totalPourcentUp = 0;
    const totalLvlUp = lvlUp + lvl;
    let coefUp = (((totalLvlUp * totalLvlUp) + totalLvlUp + 18) / 10);

    for (let i = 0; i < this.state.pot.length; i++) {
      const element = parseFloat(Object.values(this.state.pot[i])[0]);
      const attr = (element * coef) + 10;

      const up = parseFloat(Object.values(this.state.potUp[i])[0]);
      const attrUp = ( (element + up) * coefUp) + 10;

      totalAttr += attr;
      totalPourcent += parseFloat(Object.values(bond[i])[0]) * attr / 100;
      totalPourcent += parseFloat(Object.values(confident[i])[0]) * attr / 100;
      totalPourcent += parseFloat(Object.values(knowledge[i])[0]) * attr / 100;
      totalPourcent += parseFloat(Object.values(comprehension[i])[0]) * attr / 100;
      totalPourcent += parseFloat(Object.values(other[i])[0]) * attr / 100;

      totalAttrUp += attrUp;
      totalPourcentUp += parseFloat(Object.values(bond[i])[0]) * attrUp / 100;
      totalPourcentUp += parseFloat(Object.values(confident[i])[0]) * attrUp / 100;
      totalPourcentUp += parseFloat(Object.values(knowledge[i])[0]) * attrUp / 100;
      totalPourcentUp += parseFloat(Object.values(comprehension[i])[0]) * attrUp / 100;
      totalPourcentUp += parseFloat(Object.values(other[i])[0]) * attr / 100;
      totalPourcentUp += parseFloat(Object.values(pourcentUp[i])[0]) * attrUp / 100;
    }

    let storage = window.localStorage;
    let listPartener = storage.getItem('partener');
    const partener = {
      [name] : { 'lvl': lvl, pot, bond, confident, knowledge, comprehension, other}
    }
    if (!listPartener) {
      storage.setItem('partener', JSON.stringify(partener));
    } else {
      storage.setItem('partener', JSON.stringify({...listPartener, partener}));
    }

    result = parseInt((totalAttrUp - totalAttr) + (totalPourcentUp - totalPourcent));


    this.setState({
      result, history: [
        ...this.state.history,
        {
          name,
          result,
          potUp,
          lvlUp,
          pourcentUp
        }
      ]
    })
  }


  render() {
    return (
      <div className="App">
        <h2>Legend of Phenix parteners upgrade calulator</h2>
        <Parameter handleChange={this.handleChange} handleChangeStats={this.handleChangeStats} onClickResult={this.onClickResult} />
        <button className='Calculer' onClick={this.onClickResult}>Calculer</button>
        <Result value={this.state.resultUp} />
        <History history={this.state.history} />
      </div>
    );
  }
}

export default App;
