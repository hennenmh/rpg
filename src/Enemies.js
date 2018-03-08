import BlackDragon from './images/Black_dragon.jpg';
import Ooze from './images/Ooze.jpg';
import Kobold from './images/Kobold.jpg';
import RatKing from './images/Rat_king.jpg';
import Rat from './images/Rat.jpg';

export default function() {
    return [
        {
            id: 0,
            name: "Rat",
            attack: 1,
            defense: 1,
            health: 10,
            src: Rat,
        },
        {
            id: 1,
            name: "Rat King",
            attack: 2,
            defense: 1,
            health: 15,
            src: RatKing
        },
        {
            id: 2,
            name: "Kobold",
            attack: 4,
            defense: 3,
            health: 20,
            src: Kobold
        },
        {
            id: 3,
            name: "Ooze",
            attack: 6,
            defense: 2,
            health: 25,
            src: Ooze
        },
        {
            id: 4,
            name: "Dragon",
            attack: 6,
            defense: 6,
            health: 30,
            src: BlackDragon
        },

    ]
}