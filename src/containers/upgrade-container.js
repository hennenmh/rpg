import {connect} from 'react-redux';
import Upgrade from '../components/Upgrade';
import {updateCharacter, changeScreen, currentEnemy} from '../actions';

const mapStateToProps = (state) => ({
        character: state.character || [],
        currentEnemy: state.currentEnemy
});

const mapDispatchToProps = (dispatch) => ({
        updateCharacter : (property, value) => dispatch(updateCharacter(property, value)),
        changeScreen : (screen) => dispatch(changeScreen(screen)),
        nextEnemy : (id) => dispatch(currentEnemy(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Upgrade)