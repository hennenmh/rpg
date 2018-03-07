import React, {Component} from 'react';

class EnemyList extends Component {
    render() {
        return (
            <div>
                <img src={this.props.enemy.src} alt="Enemy"></img>
                <h3>{this.props.enemy.name}</h3>
                <h4>Attack: {this.props.enemy.attack}</h4>
                <h4>Defense: {this.props.enemy.defense}</h4>
                <h4>Health: {this.props.enemy.health}</h4>
            </div>
        )
    }
}

export default EnemyList;