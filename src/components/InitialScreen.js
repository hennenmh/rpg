import React, {Component} from 'react';

class InitialScreen extends Component {
    
    handleNewGameClick = () => {
        this.props.deleteEnemies();
        this.props.changeScreen(0);
        this.props.deleteItems();
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
                {/* <input disabled={this.props.character.health <= 0 || this.props.enemy[4].health <= 0}  
                        type="button" value="Load Game" onClick={this.handleLoadGameClick} /> */}
            </div>
        )
    }
}

export default InitialScreen;