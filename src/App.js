import React, {Component} from 'react';
import History from './History';
import Parameter from './Parameter';
import Result from './Result';

class App extends Component {
  constructor (props){
    super(props)
    this.state= {
      result:0,
      history:[]
  }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
    console.log(this.state);
  }

  onClickResult = () => {
    this.setState({history: [...this.state.history, {operation: this.state.result, result: eval(this.state.result)}]})
  }


  render() { 
  return (
    <div className="App">
      <h2>Legend of Phenix parteners upgrade calulator</h2>
      <Parameter handleChange={this.handleChange} onClickResult={this.onClickResult}/>
      <Result  value={this.state.result.toString()}/>
      <History history={this.state.history}/>
    </div>
  );
  }
}

export default App;
