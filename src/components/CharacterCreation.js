import React, {Component} from 'react';

class CharacterCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Cap'n Placeholder",
            attack: 3,
            defense: 3,
            health: 20,
        }
    }
    handleCreateClick = () => {
        this.props.createCharacter(this.state);
        this.props.loadEnemies();
        this.props.currentEnemy(0);
        this.props.loadItems();
        this.props.changeScreen(1);
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    }
    handleAttackChange = (event) => {
        if (event.target.value > 3) {
            this.setState({attack: 3});
        } else if (event.target.value <= 0 || !parseInt(event.target.value)){
            this.setState({attack: 1})
        } else {
            this.setState({attack: +event.target.value});
        }
    }
    handleDefenseChange = (event) => {
        if (event.target.value > 3) {
            this.setState({defense: 3})
        } else if (event.target.value <= 0 || !parseInt(event.target.value)){
            this.setState({defense: 1})
        }else {
            this.setState({defense: +event.target.value});
        }
    }
    handleHealthChange = (event) => {
        if (event.target.value > 20) {
            this.setState({health: 20})
        } else if (event.target.value <= 0 || !parseInt(event.target.value)){
            this.setState({health: 1})
        }else {
            this.setState({health: +event.target.value});
        }
    }

    render() {
        return (
            <div>
                <h2>Create Character:</h2>
                <input className="name" placeholder="Name" onChange={this.handleNameChange}/><br/>
                <input className="attack" placeholder="Attack (Max = 3)" onChange={this.handleAttackChange}/><br/>
                <input className="defense" placeholder="Defense (Max = 3)" onChange={this.handleDefenseChange}/><br/>
                <input className="health" placeholder="Health (Max = 20)" onChange={this.handleHealthChange}/><br/>
                <input type="button" value="Begin Adventure!" onClick={this.handleCreateClick}/>
            </div>
        )
    }
}

export default CharacterCreation;