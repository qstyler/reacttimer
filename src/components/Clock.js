import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pad from 'pad-left';

class Clock extends Component {


    static formatSeconds(totalSeconds) {
        const seconds = pad(totalSeconds % 60, 2, 0);
        const minutes = pad(Math.floor(totalSeconds / 60), 2, 0);

        return `${minutes}:${seconds}`;
    }

    render() {
        const { totalSeconds, emptyText } = this.props;
        return (
            <div className="clock">
                <span className="clock-text">
                    {totalSeconds ? Clock.formatSeconds(totalSeconds) : emptyText}
                </span>
            </div>
        );
    }

}

Clock.propTypes = {
    totalSeconds: PropTypes.number,
    emptyText: PropTypes.string,
};

Clock.defaultProps = {
    emptyText: "Start the clock",
};

export default Clock;