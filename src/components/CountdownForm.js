import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CountdownForm extends Component {

    constructor(props, context) {
        super(props, context);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const seconds = parseInt(this.refs.seconds.value, 10);

        if (!isNaN(seconds)) {
            this.refs.seconds.value = "";
            this.props.onSetCountdown(seconds);
        }
    }

    render() {
        return (
            <div>
                <form
                    ref="form"
                    className="countdown-form"
                    onSubmit={this.onSubmit}
                >
                    <input type="number" ref="seconds" placeholder="Enter time in seconds"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );
    }
}

CountdownForm.propTypes = {
    onSetCountdown: PropTypes.func,
};

CountdownForm.defaultProps = {
    onSetCountdown: (seconds) => {},
};

export default CountdownForm;