import React from 'react'
import { shallow } from 'enzyme';

import Countdown from '../../src/components/Countdown';

describe('Countdown test suite', () => {
    it('Countdown should be true', () => {
        expect(shallow(<Countdown />)).toBeTruthy();
    });

    it('handleSetCountdown', (done) => {
        const countdown = shallow(<Countdown />);
        countdown.instance().handleSetCountdown(10);

        expect(countdown.state().count).toBe(10);
        expect(countdown.state().countdownStatus).toBe('started');

        setTimeout(() => {
            expect(countdown.state().count).toBe(9);
            done();
        }, 1001);
    });
});