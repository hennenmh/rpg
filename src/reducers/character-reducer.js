export default function(state={}, action) {
    switch(action.type) {
        case 'CREATE_CHARACTER':
            return {
                ...state,
                    id: action.id,
                    name: action.name,
                    attack: action.attack,
                    defense: action.defense,
                    health: action.health,
                    level: action.level,
                    xp: action.xp,
                    gold: action.gold,
                    armor: action.armor,
                    weapon: action.weapon,
                    inventory: action.inventory,
                    src: action.src
            }
        case 'UPDATE_CHARACTER':
            return {...state, [action.property]: action.value}
        case 'DELETE_CHARACTER':
            return {...state, character: {}}
        case 'ADD_INVENTORY':
            return {...state, inventory: [...state.inventory, action.item]}
        default:
            return state;
    }
}