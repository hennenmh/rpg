import React, {Component} from 'react';

class EnemyList extends Component {
    id = this.props.currentEnemy.id;
    
    render() {
        console.log(this.props.currentEnemy)
        return (
            <div>
                <img src={this.props.enemy[this.id].src} alt="Enemy"></img>
                <h3>{this.props.enemy[this.id].name}</h3>
                <h4>Attack: {this.props.enemy[this.id].attack}</h4>
                <h4>Defense: {this.props.enemy[this.id].defense}</h4>
                <h4>Health: {this.props.enemy[this.id].health}</h4>
            </div>
        )
    }
}

export default EnemyList;