import {connect} from 'react-redux';
import {createCharacter, changeScreen, loadEnemies, currentEnemy} from '../actions';
import CharacterCreation from '../components/CharacterCreation';


function mapDispatchToProps(dispatch) {
    return {
        createCharacter : (character) => dispatch(createCharacter(character)),
        changeScreen : (screen) => dispatch(changeScreen(screen)),
        loadEnemies : () => dispatch(loadEnemies()),
        currentEnemy: (id) => dispatch(currentEnemy(id))}
}

export default connect(null, mapDispatchToProps)(CharacterCreation);