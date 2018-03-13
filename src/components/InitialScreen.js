import React, {Component} from 'react';

class InitialScreen extends Component {
    
    handleNewGameClick = () => {
        this.props.deleteEnemies();
        this.props.deleteCharacter();
        this.props.changeScreen(0);
    }

    handleLoadGameClick = () => {
        (this.props.enemy[this.props.currentEnemy].health <= 0 
            ? this.props.changeScreen(2)
            : this.props.changeScreen(1))
    }

    render() {
        return (
            <div>
                <h2>New Game or Load Game</h2>
                <input type="button" value="New Game" onClick={this.handleNewGameClick} />
                <input disabled={this.props.character[0].health <= 0 || this.props.enemy[4].health <= 0}  
                        type="button" value="Load Game" onClick={this.handleLoadGameClick} />
            </div>
        )
    }
}

export default InitialScreen;