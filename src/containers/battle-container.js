import {connect} from 'react-redux';
import Battle from '../components/Battle';
import {updateCharacter, updateEnemy, changeScreen, addInventory} from '../actions';

const mapStateToProps = (state) => ({
        character: state.character || [],
        enemy: state.enemy || [],
        currentEnemy: state.currentEnemy,
        items: state.items
});

const mapDispatchToProps = (dispatch) => ({
        updateCharacter : (property, value) => dispatch(updateCharacter(property, value)),
        updateEnemy : (enemyId, enemyHealth) => dispatch(updateEnemy(enemyId, enemyHealth)),
        changeScreen : (screen) => dispatch(changeScreen(screen)),
        addInventory : (item) => dispatch(addInventory(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Battle)