import React, {Component} from 'react';

class CharacterStats extends Component {
    render() {
        return (
            <div>
                <img src={this.props.character.src} alt="Character"></img>
                <div>
                    <h3>{this.props.character.name}</h3>
                    <h4>Attack: {this.props.character.attack}</h4>
                    <h4>Defense: {this.props.character.defense}</h4>
                    <h4>Health: {this.props.character.health}</h4>
                </div>
            </div>
        )
    }
}

export default CharacterStats;