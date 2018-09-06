import React, { Component } from 'react';

class EnemyList extends Component {
  id = this.props.currentEnemy.id;

  render() {
    return (
      <div>
        <img src={this.props.enemy[this.id].src} alt="Enemy" />
        <h3>{this.props.enemy[this.id].name}</h3>
        <br />
        <h4>Attack: {this.props.enemy[this.id].attack}</h4>
        <br />
        <h4>
          Defense: {this.props.enemy[this.id].defense} + {this.id} Magic Defense
        </h4>
        <h4>Health: {this.props.enemy[this.id].health}</h4>
      </div>
    );
  }
}

export default EnemyList;
