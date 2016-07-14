import React from 'react';
import {connect} from 'react-redux';
import CounterStore from '../../stores/CounterStore';
import CounterAction from '../../actions/CounterAction';

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
        console.log(CounterStore.getState());
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

function mapStateToProps(state) {
    return {
        value: state.count,
        text: state.text
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: (text) => dispatch(CounterAction.increase(text)),
        onDecreaseClick: (text) => dispatch(CounterAction.decrease(text))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);