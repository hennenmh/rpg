import Items from '../Items.js';

export default function(state = [], action) {
  switch (action.type) {
    case 'LOAD_ITEMS':
      return [...state, ...Items()];
    case 'DELETE_ITEMS':
      return { ...state, items: [] };
    default:
      return state;
  }
}
