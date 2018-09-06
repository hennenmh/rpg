import React, { Component } from 'react';
import StoreItem from './StoreItem';

class Store extends Component {
  randomItem = () => Math.floor(Math.random() * 6);

  item1Id = this.randomItem();
  item2Id = this.randomItem();
  item3Id = this.randomItem();
  itemArray = [
    this.props.items[this.item1Id],
    this.props.items[this.item2Id],
    this.props.items[this.item3Id],
  ];

  handleBuyItemClick = item => {
    if (!this.props.character.inventory.includes(item)) {
      this.props.character.gold >= item.cost
        ? this.props.addInventory(item) &&
          this.props.updateCharacter(
            'gold',
            this.props.character.gold - item.cost,
          )
        : alert('Not enough gold!');
    } else {
      return null;
    }
  };

  render() {
    return (
      <div>
        <hr />
        <h3>It's Dangerous to go Alone!</h3>
        <h3>Buy Something!</h3>
        <div className="store-items">
          {this.itemArray.map((item, index) => (
            <StoreItem
              key={index}
              item={item}
              onClickItem={clickedItem => this.handleBuyItemClick(clickedItem)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Store;
