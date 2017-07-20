import 'jest-enzyme';
import React from 'react';
import { shallow } from 'enzyme';

import App from '../src/App';
import Nav from '../src/components/Nav';

describe('main test suite', () => {

    it('renders without crashing', () => {
        expect(shallow(<App />)).toContainReact(<Nav title="React timer app" />);
    });

});