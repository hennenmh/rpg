export default function(state=0, action) {
    switch(action.type) {
        case 'CHANGE_SCREEN':
            return action.payload
        default:
            return state;
    }
}