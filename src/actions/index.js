import Cap from '../images/Captain_placeholder.png';
let nextCharId = 0
export const createCharacter = (character) => ({
        type: 'CREATE_CHARACTER',
        id: nextCharId++,
        name: character.name,
        attack: character.attack,
        defense: character.defense,
        health: character.health,
        level: 1,
        xp: 0,
        gold: 0,
        armor: {},
        weapon: {},
        src: Cap,
});

export const updateCharacter = (property, value) => ({
        type: 'UPDATE_CHARACTER',
        property,
        value,
});

export const deleteCharacter = () => ({
        type: 'DELETE_CHARACTER'
})

export const changeScreen = (screen) => ({
        type: 'CHANGE_SCREEN',
        payload: screen,
});

export const loadEnemies = () => ({
        type: 'LOAD_ENEMIES',
});

export const updateEnemy = (enemyId, health) => ({
        type: 'UPDATE_ENEMY',
        enemyId,
        health,
});

export const deleteEnemies = () => ({
        type: 'DELETE_ENEMIES'
})

export const currentEnemy = (id) => ({
        type: 'CURRENT_ENEMY',
        id,
});