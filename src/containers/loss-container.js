import {connect} from 'react-redux';
import Loss from '../components/Loss';
import {changeScreen} from '../actions';

const mapStateToProps = (state) => ({
        enemy: state.enemy
});

// const mapDispatchToProps = (dispatch) => ({
//         changeScreen : (screen) => dispatch(changeScreen(screen)),
// });

export default connect(
    mapStateToProps, 
    {changeScreen: changeScreen}
)(Loss)