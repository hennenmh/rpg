import React, {Component} from 'react';

class Store extends Component {

    randomItem = () => {
        return Math.floor(Math.random() * 5)
    }

    render() {
        return(
            <div>
                <br/><h3>It's Dangerous to go Alone!</h3>
                <h3>Buy Something!</h3>
                <div className="store-items">
                    <img src={this.props.items[this.randomItem()].src} />
                    <img src={this.props.items[this.randomItem()].src} />
                    <img src={this.props.items[this.randomItem()].src} />
                </div>
            </div>
        )
    }
}

export default Store;