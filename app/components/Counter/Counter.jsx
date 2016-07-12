import React from 'react';

export default class Counter extends React.Component {
    render() {
        const {value, onIncreaseClick} = this.props;
        return (
            <div>
                <button onClick={onIncreaseClick}>Increase</button>
                <div>count: {value}</div>
            </div>
        );
    }
}

Counter.propTypes = {
    value: React.PropTypes.number.isRequired,
    onIncreaseClick: React.PropTypes.func.isRequired
};
