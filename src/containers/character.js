import { connect } from 'react-redux';
import CharacterStats from '../components/CharacterStats';

const mapStateToProps = state => ({
  character: state.character || {},
});

export default connect(mapStateToProps)(CharacterStats);
