import { Component } from 'react';

class Tick extends Component {

    increment = () => {
        this.props.incrementTick()
    }

    render() {
        return (
            <div>
                <button onClick={this.increment}> INKREMENTACJA</button>
                Komponent z Connect
            </div>
        )
    }
}

export default Tick;
