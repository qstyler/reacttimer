import React from 'react'
import { shallow, mount } from 'enzyme';

import CountdownForm from '../../src/components/CountdownForm';

describe('countdown form test suite', () => {
    it('simply exists', () => {
        expect(shallow(<CountdownForm />)).toBeTruthy();
    });

    describe('onSetCountdown triggering', () => {
        it('should NOT call onSetCountdown', () => {
            const onSetCountdown = jest.fn();
            const countdownForm =
                mount(<CountdownForm onSetCountdown={onSetCountdown} />);

            countdownForm.find('form').simulate('submit');

            expect(onSetCountdown).not.toBeCalled();
        });

        it('should NOT call onSetCountdown with string input', () => {
            const onSetCountdown = jest.fn();
            const countdownForm =
                mount(<CountdownForm onSetCountdown={onSetCountdown} />);

            const input = countdownForm.ref('seconds');
            input.node.value = 'asd';
            input.simulate('change', input);

            countdownForm.find('form').simulate('submit');

            expect(onSetCountdown).not.toBeCalled();
        });

        it('should call onSetCountdown with digits input', () => {
            const onSetCountdown = jest.fn();
            const countdownForm =
                mount(<CountdownForm onSetCountdown={onSetCountdown} />);

            const input = countdownForm.ref('seconds');
            input.node.value = '123';
            input.simulate('change', input);

            countdownForm.find('form').simulate('submit');

            expect(onSetCountdown).toBeCalled();
        });
    });
});