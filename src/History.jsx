
import React, { Component } from 'react';

class History extends Component {
  render() {
    return (
      <div className="History">
        {this.props.history.map((result, key) =>
          <div key={key}>
            <div>Nom : {result.name}</div>
            <div>Level Up : {result.lvlUp}</div>
            <div>Potential Up : {result.potUp.map(obj => `${Object.keys(obj)[0]} : ${Object.values(obj)[0]} `)}</div>
            <div>Pourcent Up : {result.pourcentUp.map(obj => `${Object.keys(obj)[0]} : ${Object.values(obj)[0]} `)}</div>
            <div>Attribut Up : {result.result}</div>
          </div>)}
      </div>
    )
  }
}

export default History;