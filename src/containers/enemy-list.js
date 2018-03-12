import {connect} from 'react-redux';
import EnemyList from '../components/EnemyList';

const mapStateToProps = (state) => ({
        enemy: state.enemy || [],
        currentEnemy: state.enemy[state.currentEnemy] || 0
});

export default connect(mapStateToProps)(EnemyList);