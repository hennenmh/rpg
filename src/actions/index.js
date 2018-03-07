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

export const updateCharacter = (property, value) => {
    return {
        type: 'UPDATE_CHARACTER',
        property,
        value
    }
}

export const changeScreen = (screen) => {
    return {
        type: 'CHANGE_SCREEN',
        payload: screen
    }
}

export const loadEnemies = () => {
    return {
        type: 'LOAD_ENEMIES',
    }
}

export const updateEnemy = (enemyId, health) => {
    return {
        type: 'UPDATE_ENEMY',
        enemyId,
        health
    }
}

export const currentEnemy = (id) => {
    return {
        type: 'CURRENT_ENEMY',
        id
    }
}