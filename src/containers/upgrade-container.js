import {connect} from 'react-redux';
import Upgrade from '../components/Upgrade';
import {updateCharacter, changeScreen, currentEnemy} from '../actions';

function mapStateToProps(state) {
    return {
        character: state.character || [],
        currentEnemy: state.currentEnemy
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateCharacter : (property, value) => dispatch(updateCharacter(property, value)),
        changeScreen : (screen) => dispatch(changeScreen(screen)),
        nextEnemy : (id) => dispatch(currentEnemy(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Upgrade)