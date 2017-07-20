import React from 'react'
import { mount, shallow } from 'enzyme';
import 'jest-enzyme';

import Countdown from '../../src/components/Countdown';

describe('Countdown test suite', () => {
    it('Countdown should be true', () => {
        expect(shallow(<Countdown />)).toBeTruthy();
    });

    it('handleSetCountdown', (done) => {
        const countdown = shallow(<Countdown />);
        countdown.instance().handleSetCountdown(10);

        expect(countdown).toHaveState('count', 10);
        expect(countdown).toHaveState('countdownStatus', 'started');

        setTimeout(() => {
            expect(countdown).toHaveState('count', 9);
            done();
        }, 1001);
    });

    it('should not countdown when paused', (done) => {
        const countdown = mount(<Countdown />);
        countdown.instance().handleSetCountdown(10);

        countdown.find('button.secondary').simulate('click');

        setTimeout(() => {
            expect(countdown).toHaveState('count', 10);
            done();
        }, 1001);
    });



});