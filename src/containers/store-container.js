import { connect } from 'react-redux';
import Store from '../components/Store';
import { addInventory, updateCharacter } from '../actions';

const mapStateToProps = state => ({
  items: state.items,
  character: state.character,
});

const mapDispatchToProps = dispatch => ({
  addInventory: item => dispatch(addInventory(item)),
  updateCharacter: (property, value) =>
    dispatch(updateCharacter(property, value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Store);
