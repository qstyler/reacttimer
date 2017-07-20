import React, { Component } from 'react';
import Clock from './Clock';
import Controls from './Controls';

class Timer extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleStatusChange = this.handleStatusChange.bind(this);

        this.state = {
            count: undefined,
        };
    }

    handleStatusChange(status) {
        switch (status) {
            case 'stopped':
                this.setState({ count: undefined });
                break;
            case 'paused':
                break;
            case 'started':
                break;
            //no default
        }
    }

    render() {
        const { count } = this.state;
        return (
            <dev>
                <Clock totalSeconds={count} emptyText="Start the timer" />
                <Controls countdownStatus="stopped" onStatusChange={this.handleStatusChange} />
            </dev>
        );
    }
}

export default Timer;