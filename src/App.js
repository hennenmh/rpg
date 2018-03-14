import React, {Component}from 'react';
import './App.css';
import {connect} from 'react-redux';
import CreateCharacter from './containers/create-character';
import EnemyList from './containers/enemy-list';
import Character from './containers/character';
import Battle from './containers/battle-container';
import UpgradeScreen from './containers/upgrade-container';
import LossScreen from './containers/loss-container';
import InitialScreen from './containers/initial-screen-container';
import {changeScreen} from './actions';
import Store from './containers/store-container';
import Inventory from './containers/inventory-container';

class App extends Component {

  showInitScreen = () => {
    this.props.changeScreen(5);
  }

  render() {

    let page;
    switch (this.props.activeScreen) {
      case 0:
        page = (
          <div>
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
            <UpgradeScreen />
            <Store />
            <Inventory />
          </div>
        )
        break;
      case 3:
        page = (
          <div>
            <LossScreen />
          </div>
        )
        break;
      case 4:
        page = (
          <div>
            <h2>Congratulations!</h2>
            <h3>You are the Master of the Dungeon!</h3>
            <input type="button" value="Start New Game" onClick={this.showInitScreen} />
          </div>
        )
        break;
      case 5:
        page = (
          <div>
            <InitialScreen />
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

const mapStateToProps = (state) => ({
  activeScreen : state.activeScreen
});

const mapDispatchToProps = (dispatch) => ({
  changeScreen : (screen) => dispatch(changeScreen(screen))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);