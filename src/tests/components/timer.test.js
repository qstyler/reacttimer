import React from 'react'
import { mount, shallow } from 'enzyme';
import 'jest-enzyme';

import Timer from '../../components/Timer';
import { Status } from '../../Status';

describe('Timer test suite', () => {
    it('Timer should be true', () => {
        expect(shallow(<Timer />)).toBeTruthy();
    });

    describe('timing functions', () => {

        it('starts the timer', (done) => {
            const timer = shallow(<Timer />);
            timer.instance().handleStatusChange(Status.STARTED);

            expect(timer).toHaveState('count', 0);
            expect(timer).toHaveState('status', Status.STARTED);

            setTimeout(() => {
                expect(timer).toHaveState('count', 1);
                done();
            }, 1001);
        });

        it('pauses the timer', (done) => {
            const timer = mount(<Timer />);
            timer.instance().handleStatusChange(Status.STARTED);

            timer.find('button.secondary').simulate('click');
            expect(timer).toHaveState('status', Status.PAUSED);

            setTimeout(() => {
                expect(timer).toHaveState('count', 0);
                done();
            }, 1001);
        });

    });

});