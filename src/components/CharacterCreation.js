import React, { Component } from 'react';

class CharacterCreation extends Component {
  totalPoints = 20;
  constructor(props) {
    super(props);
    this.state = {
      name: "Cap'n Placeholder",
      attack: 1,
      defense: 1,
      health: 1,
    };
  }
  handleCreateClick = () => {
    this.props.createCharacter(this.state);
    this.props.loadEnemies();
    this.props.currentEnemy(0);
    this.props.loadItems();
    this.props.changeScreen(1);
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleStatChange = event => {
    switch (event.target.id) {
      case 'attInc':
        if (this.totalPoints > 0 && this.state.attack < 3) {
          this.setState({ attack: this.state.attack + 1 });
          this.totalPoints--;
        }
        break;
      case 'defInc':
        if (this.totalPoints > 0 && this.state.defense < 3) {
          this.setState({ defense: this.state.defense + 1 });
          this.totalPoints--;
        }
        break;
      case 'healthInc':
        if (this.totalPoints > 0 && this.state.health < 20) {
          this.setState({ health: this.state.health + 1 });
          this.totalPoints--;
        }
        break;
      case 'attDec':
        if (this.state.attack >= 2) {
          this.setState({ attack: this.state.attack - 1 });
          this.totalPoints++;
        }
        break;
      case 'defDec':
        if (this.state.defense >= 2) {
          this.setState({ defense: this.state.defense - 1 });
          this.totalPoints++;
        }
        break;
      case 'healthDec':
        if (this.state.health >= 2) {
          this.setState({ health: this.state.health - 1 });
          this.totalPoints++;
        }
        break;
    }
  };

  render() {
    return (
      <div>
        <h2>Create Character:</h2>
        <input
          className="name"
          placeholder="Name"
          onChange={this.handleNameChange}
        />
        <br />
        <br />
        <div>Total Stat Points Available: {this.totalPoints}</div>
        <br />
        <div>Attack: {this.state.attack}</div>
        <button id="attInc" onClick={this.handleStatChange}>
          +
        </button>
        <button id="attDec" onClick={this.handleStatChange}>
          -
        </button>
        <div>Defense: {this.state.defense}</div>
        <button id="defInc" onClick={this.handleStatChange}>
          +
        </button>
        <button id="defDec" onClick={this.handleStatChange}>
          -
        </button>
        <div>Health: {this.state.health}</div>
        <button id="healthInc" onClick={this.handleStatChange}>
          +
        </button>
        <button id="healthDec" onClick={this.handleStatChange}>
          -
        </button>
        <br />
        <br />
        <input
          type="button"
          value="Begin Adventure!"
          disabled={this.totalPoints > 0}
          onClick={this.handleCreateClick}
        />
      </div>
    );
  }
}

export default CharacterCreation;
