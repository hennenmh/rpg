import React, {Component} from 'react';

class Battle extends Component {

    roundNum = 1;
    enemyId = this.props.currentEnemy;
    totCharHealth = this.props.character.health;
    isPlayerTurn = true;
    charAtkText = "";
    enemyAtkText = "";


    rollD6 = () => {
        return Math.floor((Math.random() * 6) + 1);
    }

    rollD100 = () => {
        return Math.floor((Math.random() * 100) + 1)
    }

    handleBattleClick = () => {
        if(this.isPlayerTurn) {
            this.isPlayerTurn = false;
            this.roundNum++;
            this.characterPhysicalAttack(this.props.character.attack,
                                        this.props.enemy[this.enemyId].defense,
                                        this.props.enemy[this.enemyId].health);
            this.enemyBaseAtk(this.props.enemy[this.enemyId].attack,
                                    this.props.character.defense,
                                    this.props.character.health);
        }
    }

    handleMagicClick = () => {
        if (this.isPlayerTurn) {
            this.isPlayerTurn = false;
            this.roundNum++;
            this.characterMagicAttack((Math.floor(this.props.character.attack * 1.5)), //character does 1.5 times attack as magic
                                        (this.props.enemy[this.enemyId].defense + Math.floor(this.enemyId * .5)), //enemy has more magic defense as game goes on
                                        this.props.enemy[this.enemyId].health);
            this.enemyBaseAtk(this.props.enemy[this.enemyId].attack,
                                    this.props.character.defense,
                                    this.props.character.health);
        }
    }

    characterAttack = (cDamage, eHealth) => {
        (cDamage < 0) ? cDamage = 0 : cDamage;
            this.props.updateEnemy(this.enemyId, (eHealth - cDamage))
            setTimeout(() => {
                this.checkResults()
                this.isPlayerTurn = true;
            }, 500)
    }

    characterMagicAttack = (cAtk, eDef, eHealth) => {
        let damage = (cAtk - eDef);
        this.characterAttack(damage, eHealth);
        this.charAtkText = "You did " + ((damage < 0) ? damage = 0 : damage) + " magic damage!"
    }

    characterPhysicalAttack = (cAtk, eDef, eHealth) => {
        let roll = this.rollD6();
        let damage = ((cAtk + roll) - eDef);
        this.characterAttack(damage, eHealth);
        this.charAtkText = "You did " + ((damage < 0) ? damage = 0 : damage) + " physical damage!"
    }

    enemyCritAtk = (eAtk, cDef, cHealth, roll) => {
        eAtk = eAtk * 2;
        let damage = ((eAtk + roll) - cDef);
        (damage < 0) ? damage = 0 : damage;
            this.props.updateCharacter("health", (cHealth - damage))
            setTimeout(() => {
                this.checkResults()
                this.isPlayerTurn = true;
            }, 500)
        this.enemyAtkText = "The " + this.props.enemy[this.enemyId].name + " crit and did " + damage + " damage!"
    }

    enemyBaseAtk = (eAtk, cDef, cHealth) => {
        let roll = this.rollD6();
        if (this.rollD100() < 25) {
            this.enemyCritAtk(eAtk, cDef, cHealth, roll);
        } else {
            let damage = ((eAtk + roll) - cDef);
            (damage < 0) ? damage = 0 : damage;
            this.props.updateCharacter("health", (cHealth - damage))
            setTimeout(() => {
                this.checkResults()
                this.isPlayerTurn = true;
            }, 500)
            this.enemyAtkText = "The " + this.props.enemy[this.enemyId].name + " did " + damage + " damage!"
        }
        
    }

    checkResults = () => {
        if (this.props.enemy[this.enemyId].health <= 0 && this.props.character.health > 0) {
            if (this.enemyId === 4) {
                this.props.changeScreen(4);
            } else {
                this.roundNum = 1;
                this.props.changeScreen(2);
                this.props.updateCharacter("health", this.totCharHealth);
                this.props.updateCharacter("level", this.props.character.level + 1);
                this.props.updateCharacter("xp", this.props.character.xp + 50);
                this.props.updateCharacter("gold", this.props.character.gold + 
                    (this.rollD100() < 20 ? 0 : (this.rollD6() * 2)))
            }
            
        } else if (this.props.character.health <= 0) {
            this.props.changeScreen(3);
        }
    }

    render() {
        let buttonText = "BATTLE! Round: " + this.roundNum;
        return (
            <div>
                <p>{buttonText}</p>
                <p>{this.charAtkText}</p>
                <p>{this.enemyAtkText}</p>
                <input type="button" value="Physical Attack" onClick={this.handleBattleClick}></input>
                <input type="button" value="Magic Attack" onClick={this.handleMagicClick}></input>
                <h4>Upcoming Monsters</h4>
                <ul>
                    {this.props.enemy.map(list => (
                        list.health > 0 && (list.id !== this.enemyId) ? <img key={list.id} height="125px" width="125px" src={list.src} alt="upcoming"/> : null
                    ))}
                </ul>
                <h4>Defeated Monsters</h4>
                <ul>
                    {this.props.enemy.map(list => (
                        list.health <= 0 && (list.id !== this.enemyId) ? <img key={list.id} height="125px" width="125px" src={list.src} alt="defeated"/> : null
                    ))}
                </ul>
            </div>
        )
    }
}

export default Battle