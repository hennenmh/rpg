import React, {Component} from 'react';

class Battle extends Component {

    roundNum = 1;
    enemyId = this.props.currentEnemy;
    totCharHealth = this.props.character[0].health;
    charRoll = 0;
    enemyRoll = 0;

    constructor(props) {
        super(props);
        this.state = {
            charAttack: this.props.character[0].attack,
            charDefense: this.props.character[0].defense,
            charHealth: this.props.character[0].health,
            charLevel: this.props.character[0].level,
            charXp: this.props.character[0].xp,
            enemyAttack: this.props.enemy[this.enemyId].attack,
            enemyDefense: this.props.enemy[this.enemyId].defense,
            enemyHealth: this.props.enemy[this.enemyId].health,
            isPlayerTurn: true,
        }
    }

    rollD6 = () => {
        return Math.floor((Math.random() * 6) + 1);
    }

    handleBattleClick = () => {
        if(this.state.isPlayerTurn) {
            this.setState({isPlayerTurn: false})
            this.roundNum++;
            this.characterAttackPhase(this.state.charAttack, this.state.enemyDefense, this.state.enemyHealth);
            this.enemyAttackPhase(this.state.enemyAttack, this.state.charDefense, this.state.charHealth);
        }
    }

    characterAttackPhase = (cAtk, eDef, eHealth) => {
        this.charRoll = this.rollD6();
        let damage = ((cAtk + this.charRoll) - eDef);
        (damage < 0) ? damage = 0 : damage;
        this.setState({enemyHealth: (eHealth - damage)}, function() {
            this.props.updateEnemy(this.enemyId, this.state.enemyHealth)
            setTimeout(() => {
                this.checkResults()
                this.setState({isPlayerTurn: true})
            }, 500)
        })
            
    }

    enemyAttackPhase = (eAtk, cDef, cHealth) => {
        this.enemyRoll = this.rollD6();
        let damage = ((eAtk + this.enemyRoll) - cDef);
        (damage < 0) ? damage = 0 : damage;
        this.setState({charHealth: (cHealth - damage)}, function() {
            this.props.updateCharacter("health", this.state.charHealth )
            setTimeout(() => {
                this.checkResults()
                this.setState({isPlayerTurn: true})
            }, 500)
        })
    }

    checkResults = () => {
        if (this.state.enemyHealth <= 0 && this.state.charHealth > 0) {
            if (this.enemyId === 5) {
                this.props.changeScreen(4);
            } else {
                this.enemyId++;
                this.roundNum = 1;
                this.props.changeScreen(2);
                this.props.updateCharacter("health", this.totCharHealth);
                this.props.updateCharacter("level", this.state.charLevel + 1);
                this.props.updateCharacter("xp", this.state.charXp + 50);
            }
            
        } else if (this.state.charHealth <= 0) {
            this.props.changeScreen(3);
        }
    }

    render() {
        let buttonText = "BATTLE! Round: " + this.roundNum;
        return (
            <div>
                <p>Character Roll: {this.charRoll}</p>
                <p>Enemy Roll: {this.enemyRoll}</p>
                <input type="button" value={buttonText} onClick={this.handleBattleClick}></input>
                <h4>Upcoming Monsters</h4>
                <ul>
                    {this.props.enemy.map(list => (
                        list.health > 0 && (list.id !== this.enemyId) ? <img height="125px" width="125px" src={list.src} /> : null
                    ))}
                </ul>
                <h4>Defeated Monsters</h4>
                <ul>
                    {this.props.enemy.map(list => (
                        list.health <= 0 && (list.id !== this.enemyId) ? <img height="125px" width="125px" src={list.src} /> : null
                    ))}
                </ul>
            </div>
        )
    }
}

export default Battle