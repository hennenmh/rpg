import Enemies from '../Enemies.js';

export default function(state = [], action) {
  switch (action.type) {
    case 'LOAD_ENEMIES':
      return [...state, ...Enemies()];
    case 'UPDATE_ENEMY':
      return state.map(
        enemy =>
          enemy.id === action.enemyId
            ? { ...enemy, health: action.health }
            : enemy,
      );
    case 'DELETE_ENEMIES':
      return { ...state, enemy: [] };
    default:
      return state;
  }
}
