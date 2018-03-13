import Sword from './images/items/Sword.jpg';
import Wand from './images/items/Wand.png';
import Vorpal from './images/items/Vorpal.jpg';
import Leather from './images/items/Leather_armor.jpg';
import Plate from './images/items/Plate_armor.jpg';
import Mithril from './images/items/Mithril_shirt.jpg';

export default function() {
    return [
        {
            id: 0,
            name: "Sword",
            attack: 1,
            defense: 0,
            cost: 1,
            src: Sword,
        },
        {
            id: 1,
            name: "Wand",
            attack: 2,
            defense: 0,
            cost: 2,
            src: Wand
        },
        {
            id: 2,
            name: "Vorpal Scimitar",
            attack: 5,
            defense: 0,
            cost: 5,
            src: Vorpal
        },
        {
            id: 3,
            name: "Leather Armor",
            attack: 0,
            defense: 1,
            cost: 1,
            src: Leather
        },
        {
            id: 4,
            name: "Plate Armor",
            attack: 0,
            defense: 2,
            cost: 3,
            src: Plate
        },
        {
            id: 5,
            name: "Mithril Shirt",
            attack: 0,
            defense: 5,
            cost: 5,
            src: Mithril
        },

    ]
}