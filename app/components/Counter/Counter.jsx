import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onIncreaseClick}>Increase</button>
                <button onClick={this.props.onDecreaseClick}>Decrease</button>
                <div>count: {this.props.value}</div>
            </div>
        );
    }
}

Counter.propTypes = {
    value: React.PropTypes.number.isRequired,
    onIncreaseClick: React.PropTypes.func.isRequired,
    onDecreaseClick: React.PropTypes.func.isRequired
};
