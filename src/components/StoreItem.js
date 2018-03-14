import React from 'react'

const StoreItem = ({item, onClickItem}) => {
    const handleClickItem = () => onClickItem(item);
    return <div onClick={handleClickItem}>
                <img src={item.src} alt="Item 1"/>
                <h4>{item.name}</h4>
                <h4>{item.attack 
                    ? "Attack: " + item.attack 
                    : "Defense: " + item.defense}</h4>
                <h4>Cost: {item.cost} Gold</h4>
            </div>
}
export default StoreItem