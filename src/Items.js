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
            type: "weapon",
            attack: 1,
            defense: 0,
            cost: 1,
            src: Sword,
        },
        {
            id: 1,
            name: "Wand",
            type: "weapon",
            attack: 2,
            defense: 0,
            cost: 2,
            src: Wand
        },
        {
            id: 2,
            name: "Vorpal Scimitar",
            type: "weapon",
            attack: 4,
            defense: 0,
            cost: 4,
            src: Vorpal
        },
        {
            id: 3,
            name: "Leather Armor",
            type: "armor",
            attack: 0,
            defense: 1,
            cost: 1,
            src: Leather
        },
        {
            id: 4,
            name: "Plate Armor",
            type: "armor",
            attack: 0,
            defense: 2,
            cost: 2,
            src: Plate
        },
        {
            id: 5,
            name: "Mithril Shirt",
            type: "armor",
            attack: 0,
            defense: 4,
            cost: 4,
            src: Mithril
        },

    ]
}