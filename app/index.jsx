import './style/style.less';

import React from 'react';
import ReactDOM from 'react-dom';
import FirstApp from './components/FirstApp/FirstApp';
import HelloWorld from './components/HelloWorld/HelloWorld';

class App extends React.Component {
    render() {
        return (
            <div>
                <FirstApp />
                <HelloWorld />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.body);