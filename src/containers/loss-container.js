import {connect} from 'react-redux';
import Loss from '../components/Loss';
import {changeScreen, deleteCharacter, deleteEnemies} from '../actions';

const mapStateToProps = (state) => ({
        enemy: state.enemy
});

const mapDispatchToProps = (dispatch) => ({
        deleteEnemies: () => dispatch(deleteEnemies()),
        deleteCharacter : () => dispatch(deleteCharacter()),
        changeScreen : (screen) => dispatch(changeScreen(screen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loss)