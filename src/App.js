import React, { Component } from 'react';
import History from './History';
import Parameter from './Parameter';
import Result from './Result';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: 0,
      history: [],
      pot: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
      bond: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
      confident: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
      knowledge: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }],
      comprehension: [{ Wisdom: 0 }, { Politics: 0 }, { Charisma: 0 }, { Authority: 0 }]
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleChangeStats = (event) => {
    for (let i = 0; i < 4; i++) {
      const element = this.state[event.target.className][i];
      let updateState = this.state[event.target.className];
      let state = { ...updateState[i] };
      if (Object.keys(updateState[i])[0] == event.target.name)
        state[event.target.name] = parseInt(event.target.value);
      updateState[i] = state;
      this.setState({ [event.target.className]: updateState });
    }
  }

  onClickResult = () => {

    let attr = [];
    let pourcent = {
      bond: [],
      confident: [],
      knowledge: [],
      comprehension: []
    };
    let result = 0;
    let coef = (((parseInt(this.state.lvl) * parseInt(this.state.lvl)) + parseInt(this.state.lvl) + 18) / 10);

    for (let i = 0; i < this.state.pot.length; i++) {
      const element = this.state.pot[i];
      attr.push( (Object.values(element)[0] * coef) + 10 )
      result += (Object.values(element)[0] * coef) + 10;
    }

    for (let i = 0; i < this.state.pot.length; i++) {
      const pot = this.state.pot[i];
      pourcent.bond.push({ [Object.keys(pot)[0]]: Object.values(this.state.bond[i])[0] * attr[i] / 100 })
      pourcent.confident.push({ [Object.keys(pot)[0]]: Object.values(this.state.confident[i])[0] * attr[i] / 100 })
      pourcent.knowledge.push({ [Object.keys(pot)[0]]: Object.values(this.state.knowledge[i])[0] * attr[i] / 100 })
      pourcent.comprehension.push({ [Object.keys(pot)[0]]: Object.values(this.state.comprehension[i])[0] * attr[i] / 100 })

      result += Object.values(this.state.bond[i])[0] * attr[i] / 100 + Object.values(this.state.confident[i])[0] * attr[i] / 100 + Object.values(this.state.knowledge[i])[0] * attr[i] / 100 + Object.values(this.state.comprehension[i])[0] * attr[i] / 100;
    }

    this.setState({ result, history: [...this.state.history, { operation: this.state.result, result: this.state.result }] })
  }


  render() {
    return (
      <div className="App">
        <h2>Legend of Phenix parteners upgrade calulator</h2>
        <Parameter handleChange={this.handleChange} handleChangeStats={this.handleChangeStats} onClickResult={this.onClickResult} />
        <button onClick={this.onClickResult}>Calculer</button>
        <Result value={this.state.result.toString()} />
        <History history={this.state.history} />
      </div>
    );
  }
}

export default App;
