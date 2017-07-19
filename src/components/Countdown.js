import React, { Component } from 'react';
import Clock from './Clock';

class Countdown extends Component {
    render() {
        return (
            <dev>
                <Clock totalSeconds={129} />
            </dev>
        );
    }
}

export default Countdown;