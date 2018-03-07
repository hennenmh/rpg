import React, {Component} from 'react';

class Battle extends Component {

    roundNum = 1;
    charId = 0;
    enemyId = 0;
    totCharHealth = this.props.character[0].health;

    constructor(props) {
        super(props);
        this.state = {
            charAttack: this.props.character[this.charId].attack,
            charDefense: this.props.character[this.charId].defense,
            charHealth: this.props.character[this.charId].health,
            charLevel: this.props.character[this.charId].level,
            charXp: this.props.character[this.charId].xp,
            enemyAttack: this.props.enemy[this.enemyId].attack,
            enemyDefense: this.props.enemy[this.enemyId].defense,
            enemyHealth: this.props.enemy[this.enemyId].health,
        }
    }

    handleBattleClick = () => {
        this.roundNum++;
        this.characterAttackPhase(this.state.charAttack, this.state.enemyDefense, this.state.enemyHealth);
        this.enemyAttackPhase(this.state.enemyAttack, this.state.charDefense, this.state.charHealth);
        
    }

    characterAttackPhase = (cAtk, eDef, eHealth) => {
        let damage = (cAtk - eDef);
        (damage < 0) ? damage = 0 : damage;
        this.setState({enemyHealth: (eHealth - damage)}, function() {
            this.props.updateEnemy(this.enemyId, this.state.enemyHealth)
            this.checkResults()})
            
    }

    enemyAttackPhase = (eAtk, cDef, cHealth) => {
        let damage = (eAtk - cDef);
        (damage < 0) ? damage = 0 : damage;
        this.setState({charHealth: (cHealth - damage)}, function() {
            this.props.updateCharacter("health", this.state.charHealth )
            this.checkResults()})
    }

    checkResults = () => {
        if (this.state.enemyHealth <= 0 && this.state.charHealth > 0) {
            this.enemyId++;
            this.roundNum = 1;
            this.props.changeScreen(2);
            this.props.updateCharacter("health", this.totCharHealth)
        } else if (this.state.charHealth <= 0) {
            this.props.changeScreen(3);
        }
    }

    render() {
        let buttonText = "BATTLE! Round: " + this.roundNum;
        return (
            <div>
                <input type="button" value={buttonText} onClick={this.handleBattleClick}></input>
            </div>
        )
    }
}

export default Battle