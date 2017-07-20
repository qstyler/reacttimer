import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Button, Colors } from 'react-foundation';
import { Status } from '../Status';

class Controls extends Component {

    constructor(props, context) {
        super(props, context);

        this.onStatusChange = this.onStatusChange.bind(this);
    }

    onStatusChange(newStatus) {
        return () => {
            this.props.onStatusChange(newStatus)
        }
    }

    render() {
        const { countdownStatus } = this.props;
        const StartStopButton = () => {
            switch (countdownStatus) {
                case Status.STARTED:
                    return <Button isExpanded color={Colors.SECONDARY} onClick={this.onStatusChange(Status.PAUSED)}>Pause</Button>;
                case Status.PAUSED:
                    return <Button isExpanded color={Colors.PRIMARY} onClick={this.onStatusChange(Status.STARTED)}>Resume</Button>;
                case Status.STOPPED:
                    return <Button isExpanded color={Colors.SUCCESS} onClick={this.onStatusChange(Status.STARTED)}>Start</Button>;
                // no default
            }
        };
        return (
            <div>
                <Button isExpanded color={Colors.ALERT} onClick={this.onStatusChange(Status.STOPPED)}>Clear</Button>
                {StartStopButton()}
            </div>
        );
    }
}

Controls.propTypes = {
    countdownStatus: PropTypes.oneOf(Object.values(Status)).isRequired,
    onStatusChange: PropTypes.func.isRequired,
};

export default Controls;