import {connect} from 'react-redux';
import EnemyList from '../components/EnemyList';

function mapStateToProps(state) {
    return {
        enemy: state.enemy[0] || {}
    }
}

export default connect(mapStateToProps)(EnemyList);