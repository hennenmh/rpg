import { connect } from 'react-redux';
import Loss from '../components/Loss';
import { changeScreen, deleteEnemies } from '../actions';

const mapStateToProps = state => ({
  enemy: state.enemy,
});

const mapDispatchToProps = dispatch => ({
  deleteEnemies: () => dispatch(deleteEnemies()),
  changeScreen: screen => dispatch(changeScreen(screen)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Loss);
