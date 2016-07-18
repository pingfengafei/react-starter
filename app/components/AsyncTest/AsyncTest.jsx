import React from 'react';
import ReactDOM from 'react-dom';
import {Icon} from 'react-fa';
import {connect} from 'react-redux';
import ReduxRootStore from '../../stores/ReduxRootStore';
import AsyncAction from '../../actions/AsyncAction';

import jwt from 'jsonwebtoken';

class AsyncTest extends React.Component {
    constructor(props) {
        super(props);
        this.auth = this.auth.bind(this);
    }

    auth() {
        const username = ReactDOM.findDOMNode(this.refs.username).value.trim();
        const password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        this.props.toAuth(username, password);
    }

    render() {
        console.log(ReduxRootStore.getState());
        let status = this.props.status;
        let text = this.props.text;
        let accessExpireTime, refreshExpireTime;
        if (status === 'success') {
            console.log(jwt.decode(text.token));
            accessExpireTime = new Date(jwt.decode(text.token).exp * 1000).toString();
            refreshExpireTime = new Date(jwt.decode(text.refreshToken).exp * 1000).toString();
        }
        return (
            <div>
                <div>
                    <p>
                        <span className="fa-stack">
                            <Icon name="camera-retro" size="lg"/>
                        </span>
                        username:<input type="text" ref='username'/>
                    </p>
                    <p>
                        <span className="fa-stack">
                            <Icon name="ban" size="lg" className="text-danger"/>
                        </span>
                        password:<input type="text" ref='password'/>
                    </p>
                    <button onClick={this.auth}>auth</button>
                </div>
                <div>
                    <pre>text:{JSON.stringify(text, null, 2)}</pre>
                    <p>status:{status}</p>
                    <p>accessExpireTime:{accessExpireTime}</p>
                    <p>refreshExpireTime:{refreshExpireTime}</p>
                </div>
            </div>
        );
    }
}

AsyncTest.propTypes = {
    status: React.PropTypes.string.isRequired,
    toAuth: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        text: state.async.text,
        status: state.async.status
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toAuth: (username, password) => dispatch(AsyncAction.authorize(username, password))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AsyncTest);