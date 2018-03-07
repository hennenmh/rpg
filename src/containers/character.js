import {connect} from 'react-redux';
import CharacterStats from '../components/CharacterStats';

function mapStateToProps(state) {
        return {
            character: state.character || {}
        }
}

export default connect(mapStateToProps)(CharacterStats);