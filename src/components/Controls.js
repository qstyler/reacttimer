import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Button, Colors } from 'react-foundation';

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
                case 'started':
                    return <Button isExpanded color={Colors.SECONDARY} onClick={this.onStatusChange('paused')}>Pause</Button>;
                case 'paused':
                    return <Button isExpanded color={Colors.PRIMARY} onClick={this.onStatusChange('started')}>Resume</Button>;
                // no default
            }
        };
        return (
            <div>
                <Button isExpanded color={Colors.ALERT} onClick={this.onStatusChange('stopped')}>Clear</Button>
                {StartStopButton()}
            </div>
        );
    }
}

Controls.propTypes = {
    countdownStatus: PropTypes.string.isRequired,
    onStatusChange: PropTypes.func.isRequired,
};

export default Controls;