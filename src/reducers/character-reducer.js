export default function(state=[], action) {
    switch(action.type) {
        case "CREATE_CHARACTER":
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
                    src: action.src
                }
            ]
        case "UPDATE_CHARACTER":
            return state.map(character =>(
                {...character, 
                    [action.property]: action.value}))
        default:
            return state;
    }
}