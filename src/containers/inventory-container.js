import { connect } from 'react-redux';
import Inventory from '../components/Inventory';
import { updateCharacter } from '../actions';

const mapStateToProps = state => ({
  character: state.character,
});

const mapDispatchToProps = dispatch => ({
  updateCharacter: (property, value) =>
    dispatch(updateCharacter(property, value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Inventory);
