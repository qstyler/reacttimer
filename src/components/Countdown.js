import React, { Component } from 'react';

import Clock from './Clock';
import CountdownForm from './CountdownForm';
import Controls from './Controls';

const STARTED = 'started';
const STOPPED = 'stopped';
const PAUSED = 'paused';

class Countdown extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleSetCountdown = this.handleSetCountdown.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.startTimer = this.startTimer.bind(this);

        this.state = {
            count: undefined,
            countdownStatus: STOPPED,
        };
    }

    componentDidUpdate(prevProps, prevState) {
        const status = this.state.countdownStatus;
        if (status !== prevState.countdownStatus) {
            switch (status) {
                case STARTED:
                    this.startTimer();
                    break;
                case STOPPED:
                    this.setState({ count: undefined });
                // falls through
                case PAUSED:
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
            countdownStatus: STARTED,
        })
    }

    handleStatusChange(newStatus) {
        this.setState({ countdownStatus: newStatus });
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
        const { count, countdownStatus } = this.state;
        const ControlArea = () => {
            return countdownStatus !== 'stopped'
                ? (<Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />)
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