
export default function(state=0, action) {
    switch(action.type) {
        case 'CURRENT_ENEMY':
            console.log(action.id)
            return action.id
        default:
            return state;
    }
}