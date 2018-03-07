import React, {Component} from 'react';

class CharacterCreation extends Component {
    constructor() {
        super();
        this.state = {
            name: "Cap'n Placeholder",
            attack: 5,
            defense: 5,
            health: 20,
        }
    }
    handleCreateClick = () => {
        console.log(this.state)
        this.props.createCharacter(this.state);
        this.props.changeScreen(1);
        this.props.getEnemy(0);
    }

    handleNameChange = (event) => {
        console.log("name changed: ", event.target.value)
        this.setState({name: event.target.value});
    }
    handleAttackChange = (event) => {
        console.log("attack changed: ", event.target.value)
        if (event.target.value > 5) {
            this.setState({attack: 5});
        } else {
            this.setState({attack: +event.target.value});
        }
    }
    handleDefenseChange = (event) => {
        console.log("defense changed: ", event.target.value)
        if (event.target.value > 5) {
            this.setState({defense: 5})
        } else {
            this.setState({defense: +event.target.value});
        }
    }
    handleHealthChange = (event) => {
        console.log("health changed: ", event.target.value)
        if (event.target.value > 20) {
            this.setState({health: 20})
        } else {
            this.setState({health: +event.target.value});
        }
    }

    render() {
        return (
            <div className="creator">
                <form>
                <input className="name" placeholder="Name" onChange={this.handleNameChange}/><br/>
                <input className="attack" placeholder="Attack (Max = 5)" onChange={this.handleAttackChange}/><br/>
                <input className="defense" placeholder="Defense (Max = 5)" onChange={this.handleDefenseChange}/><br/>
                <input className="health" placeholder="Health (Max = 20)" onChange={this.handleHealthChange}/><br/>
                <input type="button" value="Begin Adventure!" onClick={this.handleCreateClick}/>
                </form>
            </div>
        )
    }
}

export default CharacterCreation;