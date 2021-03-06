import React, { Component } from 'react';

import Clock from './Clock';
import CountdownForm from './CountdownForm';
import Controls from './Controls';

import { Status } from '../Status';

class Countdown extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleSetCountdown = this.handleSetCountdown.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.startTimer = this.startTimer.bind(this);

        this.state = {
            count: undefined,
            status: Status.STOPPED,
        };
    }

    componentDidUpdate(prevProps, prevState) {
        const status = this.state.status;
        if (status !== prevState.status) {
            switch (status) {
                case Status.STARTED:
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

    componentWillUnmount() {
        this.stopTimer();
    }

    handleSetCountdown(seconds) {
        this.setState({
            count: seconds,
            status: Status.STARTED,
        })
    }

    handleStatusChange(newStatus) {
        this.setState({ status: newStatus });
    }

    startTimer() {
        this.timer = setInterval(() => {
            const newCount = this.state.count - 1;
            if (newCount >= 0) {
                this.setState({
                    count: newCount,
                });
            } else {
                this.stopTimer();
            }
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.timer);
        delete this.timer;
    }

    render() {
        const { count, status } = this.state;
        const ControlArea = () => {
            return status !== Status.STOPPED
                ? (<Controls status={status} onStatusChange={this.handleStatusChange} />)
                : (<CountdownForm onSetCountdown={this.handleSetCountdown} />);
        };
        return (
            <dev>
                <Clock totalSeconds={count} />
                <ControlArea />
            </dev>
        );
    }
}

export default Countdown;