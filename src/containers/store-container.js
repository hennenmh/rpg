import {connect} from 'react-redux';
import Store from '../components/Store';
import {addInventory} from '../actions';

const mapStateToProps = (state) => ({
    items: state.items
});

const mapDispatchToProps = (dispatch) => ({
    addInventory : (item) => dispatch(addInventory(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Store)