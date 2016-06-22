import React from 'react';

export default class Girls extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Girls');
    }
    
    render() {
        return (
            <div>
                <div>我是女神！</div>
            </div>

        );
    }
}
