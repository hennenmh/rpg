import { connect } from 'react-redux';
import {
  createCharacter,
  changeScreen,
  loadEnemies,
  currentEnemy,
  loadItems,
} from '../actions';
import CharacterCreation from '../components/CharacterCreation';

const mapDispatchToProps = dispatch => ({
  createCharacter: character => dispatch(createCharacter(character)),
  changeScreen: screen => dispatch(changeScreen(screen)),
  loadEnemies: () => dispatch(loadEnemies()),
  currentEnemy: id => dispatch(currentEnemy(id)),
  loadItems: () => dispatch(loadItems()),
});

export default connect(
  null,
  mapDispatchToProps,
)(CharacterCreation);
