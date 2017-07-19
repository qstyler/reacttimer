import React, { Component } from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends Component {


    constructor(props, context) {
        super(props, context);

        this.handleSetCountdown = this.handleSetCountdown.bind(this);

        this.state = {
            count: undefined,
        };
    }

    handleSetCountdown(seconds) {
        this.setState({
            count: seconds,
        })
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