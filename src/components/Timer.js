import React, { Component } from 'react';
import Clock from './Clock';
import Controls from './Controls';
import { Status } from '../Status';

class Timer extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);

        this.state = {
            count: undefined,
            status: Status.STOPPED,
        };
    }

    componentDidUpdate(prevProps, prevState) {

        const newStatus = this.state.status;

        if (newStatus !== prevState.status) {
            switch (newStatus) {
                case Status.STARTED:
                    this.setState({ count: 0 });
                    this.startTimer();
                    break;
                case Status.STOPPED:
                    this.setState({ count: undefined });
                // falls through
                case Status.PAUSED:
                    this.stopTimer();
                    break;
                // no default
            }
        }
    }

    startTimer() {
        this.timer = setInterval(() => {
            this.setState({
                count: 1 + this.state.count || 0,
            });
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.timer);
        delete this.timer;
    }

    handleStatusChange(newStatus) {
        this.setState({ status: newStatus });
    }

    render() {
        const { count, status } = this.state;
        return (
            <dev>
                <Clock totalSeconds={count} emptyText="Start the timer" />
                <Controls status={status} onStatusChange={this.handleStatusChange} />
            </dev>
        );
    }
}

export default Timer;