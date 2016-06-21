import React from 'react';

export default class Boys extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>大家好，我是{this.props.params.boyName}，我爱你们~~</h2>
            </div>
        );
    }
}
