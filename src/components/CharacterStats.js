import React, {Component} from 'react';

class CharacterStats extends Component {
    
    render() {
        return (
            <div>
                <img src={this.props.character[0].src} alt="Character"></img>
                <div>
                    <h3>{this.props.character[0].name}</h3>
                    <h4>Attack: {this.props.character[0].attack}</h4>
                    <h4>Defense: {this.props.character[0].defense}</h4>
                    <h4>Health: {this.props.character[0].health}</h4>
                </div>
            </div>
        )
    }
}

export default CharacterStats;