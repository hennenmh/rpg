import React, {Component} from 'react';

class Upgrade extends Component {

    handleAttInc = () => {
        this.props.updateCharacter("attack", this.props.character[0].attack + 2);
        this.props.changeScreen(1);
        this.props.nextEnemy(this.props.currentEnemy + 1)
    }

    handleDefInc = () => {
        this.props.updateCharacter("defense", this.props.character[0].defense + 2,);
        this.props.changeScreen(1);
        this.props.nextEnemy(this.props.currentEnemy + 1)
    }

    handleHealthInc = () => {
        this.props.updateCharacter("health", this.props.character[0].health + 2);
        this.props.changeScreen(1);
        this.props.nextEnemy(this.props.currentEnemy + 1)
    }

    render() {
        return (
            <div>
                <div>Current Level: {this.props.character[0].level}</div>
                <div>Current XP: {this.props.character[0].xp}</div><br/>
                <input type="button" value="Attack +2" onClick={this.handleAttInc}/><br/>
                <input type="button" value="Defense +2" onClick={this.handleDefInc}/><br/>
                <input type="button" value="Health +2" onClick={this.handleHealthInc}/><br/>
            </div>
        )
    }
}

export default Upgrade