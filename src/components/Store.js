import React, {Component} from 'react';

class Store extends Component {

    randomItem = () => {
        return Math.floor(Math.random() * 6)
    }

    item1Id = this.randomItem();
    item2Id = this.randomItem();
    item3Id = this.randomItem();

    handleBuyItem1Click = () => {
        if (!this.props.character.inventory.includes(this.props.items[this.item1Id])) {
            this.props.character.gold >= this.props.items[this.item1Id].cost 
                ? this.props.addInventory(this.props.items[this.item1Id])
                && this.props.updateCharacter("gold", this.props.character.gold - this.props.items[this.item1Id].cost)
                : alert("Not enough gold!")
        } else {
            return null
        }
    }

    handleBuyItem2Click = () => {
        if (!this.props.character.inventory.includes(this.props.items[this.item2Id])) {
            this.props.character.gold >= this.props.items[this.item2Id].cost
                ? this.props.addInventory(this.props.items[this.item2Id])
                && this.props.updateCharacter("gold", this.props.character.gold - this.props.items[this.item2Id].cost)
                : alert("Not enough gold!")
        } else {
            return null
        }
    }

    handleBuyItem3Click = () => {
        if (!this.props.character.inventory.includes(this.props.items[this.item3Id])) {
            this.props.character.gold >= this.props.items[this.item3Id].cost
                ? this.props.addInventory(this.props.items[this.item3Id])
                && this.props.updateCharacter("gold", this.props.character.gold - this.props.items[this.item3Id].cost)
                : alert("Not enough gold!")
        } else {
            return null
        }
    }

    render() {
        return(
            <div>
                <hr/>
                <h3>It's Dangerous to go Alone!</h3>
                <h3>Buy Something!</h3>
                <div className="store-items">
                    <div onClick={this.handleBuyItem1Click}>
                        <img src={this.props.items[this.item1Id].src} alt="Item 1"/>
                        <h4>{this.props.items[this.item1Id].name}</h4>
                        <h4>{this.props.items[this.item1Id].attack 
                            ? "Attack: " + this.props.items[this.item1Id].attack 
                            : "Defense: " + this.props.items[this.item1Id].defense}</h4>
                        <h4>Cost: {this.props.items[this.item1Id].cost} Gold</h4>
                    </div>
                    <div onClick={this.handleBuyItem2Click}>
                        <img src={this.props.items[this.item2Id].src} alt="Item 2"/>
                        <h4>{this.props.items[this.item2Id].name}</h4>
                        <h4>{this.props.items[this.item2Id].attack 
                            ? "Attack: " + this.props.items[this.item2Id].attack 
                            : "Defense: " + this.props.items[this.item2Id].defense}</h4>
                        <h4>Cost: {this.props.items[this.item2Id].cost} Gold</h4>
                    </div>
                    <div onClick={this.handleBuyItem3Click}>
                        <img src={this.props.items[this.item3Id].src} alt="Item 3"/>
                        <h4>{this.props.items[this.item3Id].name}</h4>
                        <h4>{this.props.items[this.item3Id].attack 
                            ? "Attack: " + this.props.items[this.item3Id].attack 
                            : "Defense: " + this.props.items[this.item3Id].defense}</h4>
                        <h4>Cost: {this.props.items[this.item3Id].cost} Gold</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Store;