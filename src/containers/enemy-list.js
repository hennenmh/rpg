import {connect} from 'react-redux';
import EnemyList from '../components/EnemyList';

function mapStateToProps(state) {
    console.log(state.currentEnemy)
    return {
        enemy: state.enemy || [],
        currentEnemy: state.enemy[state.currentEnemy] || 2
    }
}

export default connect(mapStateToProps)(EnemyList);

//currentEnemy: state.enemy[currentEnemy].id
//make currentEnemy state in store that is single number
//that corresponds to enemy index