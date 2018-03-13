import {connect} from 'react-redux';
import Upgrade from '../components/Upgrade';
import {upgradeScreen, changeScreen, currentEnemy} from '../actions';

const mapStateToProps = (state) => ({
        character: state.character || [],
        currentEnemy: state.currentEnemy
});

const mapDispatchToProps = (dispatch) => ({
        upgradeScreen : (att, def, health) => dispatch(upgradeScreen(att, def, health)),
        changeScreen : (screen) => dispatch(changeScreen(screen)),
        nextEnemy : (id) => dispatch(currentEnemy(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Upgrade)