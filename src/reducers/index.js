import {combineReducers} from 'redux';
import CharacterReducer from './character-reducer';
import EnemyReducer from './enemy-reducer';
import ChangeScreenReducer from './change-screen-reducer';

const allReducers = combineReducers({
    character: CharacterReducer,
    enemy: EnemyReducer,
    activeScreen: ChangeScreenReducer,
});

export default allReducers;
