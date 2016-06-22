import React from 'react';
import MyButtonController from '../MyButtonController/MyButtonController';

export default class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {width: window.innerWidth};
        this.handleResize = this.handleResize.bind(this);
    }

    handleResize() {
        this.setState({
            width: window.innerWidth
        });
    }

    componentDidMount() {
        window.addEventListener('resize', _.throttle(this.handleResize, 600, {'trailing': false}));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', _.throttle(this.handleResize, 600, {'trailing': false}));
    }

    render() {
        return (
            <div>
                <div>width:{this.state.width}</div>
                <MyButtonController/>
            </div>
        );
    }
}