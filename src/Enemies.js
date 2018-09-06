import BlackDragon from './images/players/Black_dragon.jpg';
import Ooze from './images/players/Ooze.jpg';
import Kobold from './images/players/Kobold.jpg';
import RatKing from './images/players/Rat_king.jpg';
import Rat from './images/players/Rat.png';

export default function() {
  return [
    {
      id: 0,
      name: 'Rat',
      attack: 1,
      defense: 1,
      health: 10,
      src: Rat,
    },
    {
      id: 1,
      name: 'Rat King',
      attack: 2,
      defense: 2,
      health: 15,
      src: RatKing,
    },
    {
      id: 2,
      name: 'Kobold',
      attack: 5,
      defense: 5,
      health: 20,
      src: Kobold,
    },
    {
      id: 3,
      name: 'Ooze',
      attack: 6,
      defense: 4,
      health: 25,
      src: Ooze,
    },
    {
      id: 4,
      name: 'Dragon',
      attack: 12,
      defense: 8,
      health: 30,
      src: BlackDragon,
    },
  ];
}
