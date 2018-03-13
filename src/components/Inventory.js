import React, {Component} from 'react';

class Inventory extends Component {
    
    equipItem = (id) => {
        console.log(this.props.character.inventory[id].type)
        this.props.character.inventory[id].type === "weapon"
        ? this.props.updateCharacter("weapon", this.props.character.inventory[id])
        : this.props.updateCharacter("armor", this.props.character.inventory[id])
    }

    render() {
        return (
            <div>
                <hr/>
                <h3>Inventory</h3>
                <ul className="inventory-items">
                    {this.props.character.inventory.map((item, index) => (
                        <div key={index}>
                        <img src={item.src} alt="inventory" onClick={() => this.equipItem(index)}/>
                        <h4>{item.name}</h4>
                        <h4>{item.attack 
                            ? "Attack: " + item.attack 
                            : "Defense: " + item.defense}</h4>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Inventory;