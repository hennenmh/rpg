import React, { Component } from 'react';

class CharacterStats extends Component {
  render() {
    return (
      <div>
        <img src={this.props.character.src} alt="Character" />
        <div>
          <h3>{this.props.character.name}</h3>
          <h4>
            <object
              data={this.props.character.weapon.src}
              width="50px"
              height="52px"
            />
            Attack: {this.props.character.attack}
            {this.props.character.weapon.name === 'Wand'
              ? ` + ${this.props.character.weapon.attack} Magic Damage`
              : ` + ${this.props.character.weapon.attack || 0} Physical Damage`}
          </h4>
          <h4>
            <object
              data={this.props.character.armor.src}
              width="50px"
              height="52px"
            />
            Defense: {this.props.character.defense} +{' '}
            {this.props.character.armor.defense || 0} from Armor
          </h4>
          <h4>Health: {this.props.character.health}</h4>
        </div>
      </div>
    );
  }
}

export default CharacterStats;
