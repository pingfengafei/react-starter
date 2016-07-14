import React from 'react';
import {connect} from 'react-redux';
import CounterStore from '../../stores/CounterStore';
import CounterAction from '../../actions/CounterAction';
import {ActionCreators} from 'redux-undo';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
        this.onUndo = this.onUndo.bind(this);
        this.onRedo = this.onRedo.bind(this);
    }

    onIncrease() {
        this.props.onIncreaseClick('+++');
    }

    onDecrease() {
        this.props.onDecreaseClick('---');
    }

    onUndo() {
        this.props.onUndo();
    }

    onRedo() {
        this.props.onRedo();
    }

    render() {
        console.log(CounterStore.getState());
        return (
            <div>
                <button onClick={this.onIncrease}>Increase</button>
                <button onClick={this.onDecrease}>Decrease</button>
                <div>count: {this.props.value}</div>
                <div>cal: {this.props.text}</div>
                <button onClick={this.onUndo} disabled={this.props.undoDisabled}>撤销</button>
                <button onClick={this.onRedo} disabled={this.props.redoDisabled}>前进</button>
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
    const present = state.present;
    return {
        undoDisabled: state.past.length === 0,
        redoDisabled: state.future.length === 0,
        value: present.count,
        text: present.text
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: (text) => dispatch(CounterAction.increase(text)),
        onDecreaseClick: (text) => dispatch(CounterAction.decrease(text)),
        onUndo: () => dispatch(ActionCreators.undo()),
        onRedo: () => dispatch(ActionCreators.redo())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);