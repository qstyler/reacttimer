import React from 'react'
import { shallow } from 'enzyme';

import CountdownForm from '../../src/components/CountdownForm';

describe('countdown form test suite', () => {
    it('simply exists', () => {
        expect(shallow(<CountdownForm />)).toBeTruthy();
    });
});