import Enemies from '../Enemies.js';

export default function(state={}, action) {
    switch(action.type) {
        case 'LOAD_ENEMY':
            console.log(...state, Enemies())
            return [...state], Enemies()
        default:
            return state;
    }
}