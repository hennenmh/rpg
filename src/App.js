import React, {Component}from 'react';
import './App.css';
import {connect} from 'react-redux';
import CreateCharacter from './containers/create-character';
import EnemyList from './containers/enemy-list';
import Character from './containers/character';

class App extends Component {
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