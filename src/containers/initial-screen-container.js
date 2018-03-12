import {connect} from 'react-redux';
import InitialScreen from '../components/InitialScreen';
import {changeScreen, deleteEnemies, deleteCharacter} from '../actions';

const mapStateToProps = (state) => ({
        character : state.character,
        enemy : state.enemy
});

const mapDispatchToProps = (dispatch) => ({
    changeScreen : (screen) => dispatch(changeScreen(screen)),
    deleteEnemies : () => dispatch(deleteEnemies()),
    deleteCharacter : () => dispatch(deleteCharacter())
});


export default connect(mapStateToProps, mapDispatchToProps)(InitialScreen);