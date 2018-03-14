import React, {Component} from 'react';

class Loss extends Component {

    handleNewGameClick = () => {
        this.props.deleteEnemies();
        this.props.changeScreen(0);
    }

    render() {
        return (
            <div>
                <h2>You Have Been Defeated!</h2>
                <h3>Defeated Monsters</h3>
                <ul>
                    {this.props.enemy.map(defeated => (
                        defeated.health <= 0 ? <img key={defeated.id} src={defeated.src} alt="defeated"/> : null
                    ))}
                </ul>
                <h3>Undefeated Monster</h3>
                <ul>
                    {this.props.enemy.map(undefeated => (
                        undefeated.health > 0 ? <img key={undefeated.id} src={undefeated.src} alt="undefeated"/> : null
                    ))}
                </ul>
                <input type="button" value="Start New Game" onClick={this.handleNewGameClick}/>
            </div>
        )
    }
}

export default Loss