import {connect} from 'react-redux';
import Battle from '../components/Battle';
import {updateCharacter, updateEnemy, changeScreen} from '../actions';

function mapStateToProps(state) {
    return {
        character: state.character || [],
        enemy: state.enemy || [],
        currentEnemy: state.currentEnemy
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateCharacter : (property, value) => dispatch(updateCharacter(property, value)),
        updateEnemy : (enemyId, enemyHealth) => dispatch(updateEnemy(enemyId, enemyHealth)),
        changeScreen : (screen) => dispatch(changeScreen(screen)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Battle)