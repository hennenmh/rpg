import Cap from '../images/Captain_placeholder.png';
let nextCharId = 0
export const createCharacter = (character) => {
    return {
        type: 'CREATE_CHARACTER',
        id: nextCharId++,
        name: character.name,
        attack: character.attack,
        defense: character.defense,
        health: character.health,
        level: 1,
        xp: 0,
        src: Cap
    }
}

export const changeScreen = (screen) => {
    return {
        type: 'CHANGE_SCREEN',
        payload: screen
    }
}

export const loadEnemy = (enemy) => {
    return {
        type: 'LOAD_ENEMY',
        payload: enemy
    }
}