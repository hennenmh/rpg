import {connect} from 'react-redux';
import InitialScreen from '../components/InitialScreen';
import {changeScreen, deleteEnemies, deleteCharacter, deleteItems} from '../actions';

const mapStateToProps = (state) => ({
        character : state.character,
        enemy : state.enemy,
        currentEnemy : state.currentEnemy
});

const mapDispatchToProps = (dispatch) => ({
    changeScreen : (screen) => dispatch(changeScreen(screen)),
    deleteEnemies : () => dispatch(deleteEnemies()),
    deleteCharacter : () => dispatch(deleteCharacter()),
    deleteItems : () => dispatch(deleteItems())
});


export default connect(mapStateToProps, mapDispatchToProps)(InitialScreen);