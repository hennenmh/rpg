import {connect} from 'react-redux';
import Store from '../components/Store';
import {updateCharacter} from '../actions';

const mapStateToProps = (state) => ({
        items: state.items
});

const mapDispatchToProps = (dispatch) => ({
        updateCharacter : () => dispatch(updateCharacter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Store)