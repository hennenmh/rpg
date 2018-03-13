import {combineReducers} from 'redux';
import CharacterReducer from './character-reducer';
import EnemyReducer from './enemy-reducer';
import ChangeScreenReducer from './change-screen-reducer';
import CurrentEnemy from './current-enemy-reducer';
import ItemReducer from './item-reducer';

const allReducers = combineReducers({
    character: CharacterReducer,
    enemy: EnemyReducer,
    currentEnemy: CurrentEnemy,
    activeScreen: ChangeScreenReducer,
    items: ItemReducer,
});

export default allReducers;
