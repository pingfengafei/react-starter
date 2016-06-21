import './style/style.less';

import React from 'react';
import ReactDOM from 'react-dom';
import FirstApp from './components/FirstApp/FirstApp';
import HelloWorld from './components/HelloWorld/HelloWorld';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {w: window.innerWidth};
        this.handleResize = this.handleResize.bind(this);
    }

    handleResize() {
        this.setState({
            w: window.innerWidth
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
                <div>width:{this.state.w}</div>
                <FirstApp />
                <HelloWorld />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('example'));