import React from 'react'
import 'jest-enzyme';
import { mount, shallow } from 'enzyme';

import Controls from '../../components/Controls';
import { Status } from '../../Status';

describe('Controls test suite', () => {

    it('Controls should be true', () => {
        global.console.error = jest.fn();

        expect(shallow(<Controls />)).toBeTruthy();
        expect(console.error).toBeCalled();
    });

    describe('render', function () {

        it('started -> secondary', () => {
            const controls = mount(<Controls status={Status.STARTED} onStatusChange={() => {}} />);
            expect(controls.find('button.secondary')).toBePresent()
        });

        it('stopped -> primary', () => {
            const controls = mount(<Controls status={Status.PAUSED} onStatusChange={() => {}} />);
            expect(controls.find('button.primary')).toBePresent()
        });

    });

    describe('handleStatusChange is called', () => {

        it('stopped', () => {
            const spy = jest.fn();
            const controls = mount(
                <Controls status={Status.STARTED} onStatusChange={spy} />
            );

            controls.find('button.alert').simulate('click');

            expect(spy).toBeCalledWith('stopped');
        });

        it('started -> secondary', () => {
            const spy = jest.fn();
            const controls = mount(
                <Controls status={Status.STARTED} onStatusChange={spy} />
            );

            controls.find('button.secondary').simulate('click');

            expect(spy).toBeCalledWith(Status.PAUSED);

        });

        it('stopped -> primary', () => {
            const spy = jest.fn();
            const controls = mount(
                <Controls status={Status.PAUSED} onStatusChange={spy} />
            );

            controls.find('button.primary').simulate('click');

            expect(spy).toBeCalledWith(Status.STARTED);

        });

    });

});