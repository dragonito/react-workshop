import React from 'react';

export default class Ring extends React.Component {
    render() {
        return (
            <div>
                <p>Ring!</p>
                <button onClick={this.props.resetCounter}>Reset!</button>
            </div>
        );
    }
}
