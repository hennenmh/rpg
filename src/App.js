import React, {Component}from 'react';
import './App.css';
import {connect} from 'react-redux';
import CreateCharacter from './containers/create-character';
import EnemyList from './containers/enemy-list';
import Character from './containers/character';
import Battle from './containers/battle-container';
import UpgradeScreen from './containers/upgrade-container';
import LossScreen from './containers/loss-container';

class App extends Component {

  reload = () => {
    window.location.reload();
  }

  render() {

    let page;
    switch (this.props.activeScreen) {
      case 0:
        page = (
          <div>
            <h2>Create Character:</h2>
            <CreateCharacter />
          </div>
        );
        break;
      case 1:
        page = (
          <div>
            <h2>A Monster Attacks!</h2>
            <div className="encounter">
              <Character />
              <EnemyList />
            </div>
            <Battle />
          </div>
        )
        break;
      case 2:
        page = (
          <div>
            <h2>Congratulations!</h2>
            <h3>Upgrade an Ability: </h3>
            <UpgradeScreen />
          </div>
        )
        break;
      case 3:
        page = (
          <div>
            <h2>You Have Been Defeated!</h2>
            <LossScreen />
          </div>
        )
        break;
      case 4:
        page = (
          <div>
            <h2>Congratulations!</h2>
            <h3>You are the Master of the Dungeon!</h3>
            <input type="button" value="Start New Game" onClick={this.reload}/>
          </div>
        )
        break;
      default:
        break;
    }
    return (
      <div className = "App">
        {page}
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
      activeScreen: state.activeScreen
  }
}

export default connect(mapStateToProps)(App);