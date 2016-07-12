import React from 'react';
import {Provider, connect} from 'react-redux';
import Counter from './Counter';
import CounterStore, {mapDispatchToProps, mapStateToProps} from '../../stores/CounterStore';

const APP = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default class CounterApp extends React.Component {
    render() {
        return (
            <Provider store={CounterStore}>
                <APP />
            </Provider>
        );
    }
}

export default CounterApp;