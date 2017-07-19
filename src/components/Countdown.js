import React, { Component } from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

const STARTED = 'started';
const STOPPED = 'stopped';

class Countdown extends Component {


    constructor(props, context) {
        super(props, context);

        this.handleSetCountdown = this.handleSetCountdown.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
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
                default:
                    break;
            }
        }
    }

    handleSetCountdown(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: STARTED,
        })
    }

    startTimer() {
        this.timer = setInterval(() => {
            const newCount = this.state.count - 1;
            if (newCount >= 0) {
                this.setState({
                    count: newCount,
                });
            } else {
                clearInterval(this.timer)
            }
        }, 1000);
    }

    render() {
        const { count } = this.state;
        return (
            <dev>
                <Clock totalSeconds={count} />
                <CountdownForm onSetCountdown={this.handleSetCountdown} />
            </dev>
        );
    }
}

export default Countdown;