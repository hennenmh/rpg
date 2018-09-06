import React, { Component } from 'react';

class Upgrade extends Component {
  handleUpgradeClick = stat => {
    const tempAttack = this.props.character.attack;
    const tempDefense = this.props.character.defense;
    const tempHealth = this.props.character.health;
    switch (stat) {
      case 'attack':
        this.props.upgradeScreen(tempAttack + 2, tempDefense, tempHealth);
        break;
      case 'defense':
        this.props.upgradeScreen(tempAttack, tempDefense + 2, tempHealth);
        break;
      case 'health':
        this.props.upgradeScreen(tempAttack, tempDefense, tempHealth + 2);
        break;
      default:
        break;
    }
    this.props.changeScreen(1);
    this.props.nextEnemy(this.props.currentEnemy + 1);
  };

  render() {
    return (
      <div>
        <h2>Congratulations!</h2>
        <h3>Upgrade an Ability: </h3>
        <p>Current Level: {this.props.character.level}</p>
        <p>Current XP: {this.props.character.xp}</p>
        <p>Current Gold: {this.props.character.gold}</p>
        <input
          type="button"
          value="Attack +2"
          onClick={() => this.handleUpgradeClick('attack')}
        />
        <br />
        <input
          type="button"
          value="Defense +2"
          onClick={() => this.handleUpgradeClick('defense')}
        />
        <br />
        <input
          type="button"
          value="Health +2"
          onClick={() => this.handleUpgradeClick('health')}
        />
        <br />
      </div>
    );
  }
}

export default Upgrade;
