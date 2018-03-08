import {connect} from 'react-redux';
import Loss from '../components/Loss';

function mapStateToProps(state) {
    return {
        enemy: state.enemy
    }
}

export default connect(mapStateToProps)(Loss)