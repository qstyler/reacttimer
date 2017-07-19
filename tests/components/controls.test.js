import React from 'react'
import 'jest-enzyme';
import { mount, shallow } from 'enzyme';

import Controls from '../../src/components/Controls';

describe('Controls test suite', () => {

    it('Controls should be true', () => {
        global.console.error = jest.fn();

        expect(shallow(<Controls />)).toBeTruthy();
        expect(console.error).toBeCalled();
    });

    describe('render', function () {

        it('started -> secondary', () => {
            const controls = mount(<Controls countdownStatus="started" />);
            expect(controls.find('button.secondary')).toBePresent()
        });

        it('stopped -> primary', () => {
            const controls = mount(<Controls countdownStatus="paused" />);
            expect(controls.find('button.primary')).toBePresent()
        });

    });

    describe('onStatusChange is called', () => {

        it('stopped', () => {
            const spy = jest.fn();
            const controls = mount(
                <Controls countdownStatus="started" onStatusChange={spy} />
            );

            controls.find('button.alert').simulate('click');

            expect(spy).toBeCalledWith('stopped');
        });

        it('started -> secondary', () => {
            const spy = jest.fn();
            const controls = mount(
                <Controls countdownStatus="started" onStatusChange={spy} />
            );

            controls.find('button.secondary').simulate('click');

            expect(spy).toBeCalledWith('paused');

        });

        it('stopped -> primary', () => {
            const spy = jest.fn();
            const controls = mount(
                <Controls countdownStatus="paused" onStatusChange={spy} />
            );

            controls.find('button.primary').simulate('click');

            expect(spy).toBeCalledWith('started');

        });

    });

});