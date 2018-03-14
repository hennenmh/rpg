import React, {Component} from 'react';

class Inventory extends Component {
    
    equipItem = (id) => {
        if (this.props.character.inventory[id].type === "weapon") {
            if (this.props.character.weapon.name === this.props.character.inventory[id].name) {
                this.props.updateCharacter("weapon", {})
            } else {
                this.props.updateCharacter("weapon", this.props.character.inventory[id])
            }
        } else {
            if (this.props.character.armor.name === this.props.character.inventory[id].name) {
                this.props.updateCharacter("armor", {})
            } else {
                this.props.updateCharacter("armor", this.props.character.inventory[id])
            }
        }
    }

    sellItem = (id) => {
        this.props.updateCharacter("gold", this.props.character.gold + this.props.character.inventory[id].cost);
        this.props.character.inventory[id].type === "weapon"
            ? this.props.updateCharacter("weapon", {})
            : this.props.updateCharacter("armor", {});
        let tempInv = this.props.character.inventory.filter(item => !(item.name === this.props.character.inventory[id].name))
        this.props.updateCharacter("inventory", tempInv)
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
                        <h4>{item.name === this.props.character.weapon.name ||
                            item.name === this.props.character.armor.name
                            ? "Equipped"
                            : null}
                        </h4>
                        <h4>{item.name}</h4>
                        <h4>{item.attack 
                            ? "Attack: " + item.attack 
                            : "Defense: " + item.defense}</h4>
                        <input type="button" value="Sell" onClick={() => this.sellItem(index)}/>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Inventory;