import React, {Component} from 'react';

class Loss extends Component {

    reload = () => {
        window.location.reload();
    }

    render() {
        return (
            <div>
                <h3>Defeated Monsters</h3>
                <ul>
                    {this.props.enemy.map(defeated => (
                        defeated.health <= 0 ? <img src={defeated.src} /> : null
                    ))}
                </ul>
                <h3>Undefeated Monster</h3>
                <ul>
                    {this.props.enemy.map(undefeated => (
                        undefeated.health > 0 ? <img src={undefeated.src} /> : null
                    ))}
                </ul>
                <input type="button" value="Start New Game" onClick={this.reload}/>
            </div>
        )
    }
}

export default Loss