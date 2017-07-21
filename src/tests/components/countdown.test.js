import React from 'react'
import { mount, shallow } from 'enzyme';
import 'jest-enzyme';

import Countdown from '../../components/Countdown';
import { Status } from '../../Status';

describe('Countdown test suite', () => {
    it('Countdown should be true', () => {
        expect(shallow(<Countdown />)).toBeTruthy();
    });

    it('handleSetCountdown', (done) => {
        const countdown = shallow(<Countdown />);
        countdown.instance().handleSetCountdown(10);

        expect(countdown).toHaveState('count', 10);
        expect(countdown).toHaveState('status', Status.STARTED);

        setTimeout(() => {
            expect(countdown).toHaveState('count', 9);
            done();
        }, 1001);
    });

    it('should not countdown when paused', (done) => {
        const countdown = mount(<Countdown />);
        countdown.instance().handleSetCountdown(10);

        countdown.find('button.secondary').simulate('click');
        expect(countdown).toHaveState('status', Status.PAUSED);

        setTimeout(() => {
            expect(countdown).toHaveState('count', 10);
            done();
        }, 1001);
    });

});