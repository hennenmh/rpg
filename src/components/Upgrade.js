import React, {Component} from 'react';

class Upgrade extends Component {

    handleAttInc = () => {
        this.props.updateCharacter("attack", this.props.character.attack + 2);
        this.props.changeScreen(1);
        this.props.nextEnemy(this.props.currentEnemy + 1)
    }

    handleDefInc = () => {
        this.props.updateCharacter("defense", this.props.character.defense + 2,);
        this.props.changeScreen(1);
        this.props.nextEnemy(this.props.currentEnemy + 1)
    }

    handleHealthInc = () => {
        this.props.updateCharacter("health", this.props.character.health + 2);
        this.props.changeScreen(1);
        this.props.nextEnemy(this.props.currentEnemy + 1)
    }

    render() {
        return (
            <div>
                <p>Current Level: {this.props.character.level}</p>
                <p>Current XP: {this.props.character.xp}</p>
                <p>Current Gold: {this.props.character.gold}</p>
                <input type="button" value="Attack +2" onClick={this.handleAttInc}/><br/>
                <input type="button" value="Defense +2" onClick={this.handleDefInc}/><br/>
                <input type="button" value="Health +2" onClick={this.handleHealthInc}/><br/>
            </div>
        )
    }
}

export default Upgrade