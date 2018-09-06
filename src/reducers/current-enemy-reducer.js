export default function(state = 0, action) {
  switch (action.type) {
    case 'CURRENT_ENEMY':
      return action.id;
    default:
      return state;
  }
}
