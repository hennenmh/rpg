import {connect} from 'react-redux';
import Loss from '../components/Loss';
import {changeScreen} from '../actions';

function mapStateToProps(state) {
    return {
        enemy: state.enemy
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeScreen : (screen) => dispatch(changeScreen(screen)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loss)