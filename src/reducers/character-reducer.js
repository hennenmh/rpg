export default function(state=[], action) {
    switch(action.type) {
        case 'CREATE_CHARACTER':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    attack: action.attack,
                    defense: action.defense,
                    health: action.health,
                    level: action.level,
                    xp: action.xp,
                    gold: action.gold,
                    armor: action.armor,
                    weapon:action.weapon,
                    src: action.src
                }
            ]
        case 'UPDATE_CHARACTER':
            return state.map(character =>(
                {...character, 
                    [action.property]: action.value}))
        case 'DELETE_CHARACTER':
            return {...state, character: []}
        default:
            return state;
    }
}