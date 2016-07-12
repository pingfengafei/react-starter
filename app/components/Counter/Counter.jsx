import React from 'react';
import {Provider, connect} from 'react-redux';
import CounterStore, {mapDispatchToProps, mapStateToProps} from '../../stores/CounterStore';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
    }

    onIncrease() {
        this.props.onIncreaseClick('+++');
    }

    onDecrease() {
        this.props.onDecreaseClick('---');
    }

    render() {
        return (
            <div>
                <button onClick={this.onIncrease}>Increase</button>
                <button onClick={this.onDecrease}>Decrease</button>
                <div>count: {this.props.value}</div>
                <div>cal: {this.props.text}</div>
            </div>
        );
    }
}

Counter.propTypes = {
    value: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
    onIncreaseClick: React.PropTypes.func.isRequired,
    onDecreaseClick: React.PropTypes.func.isRequired
};

const APP = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default class extends React.Component {
    render() {
        return (
            <Provider store={CounterStore}>
                <APP />
            </Provider>
        );
    }
}