import {connect} from 'react-redux';
import {createCharacter} from '../actions';
import {changeScreen} from '../actions';
import {loadEnemy} from '../actions';
import CharacterCreation from '../components/CharacterCreation';


function mapDispatchToProps(dispatch) {
    return {
        createCharacter : (character) => dispatch(createCharacter(character)),
        changeScreen : () => dispatch(changeScreen(1)),
        getEnemy : (enemyId) => dispatch(loadEnemy(enemyId))}
}

export default connect(null, mapDispatchToProps)(CharacterCreation);