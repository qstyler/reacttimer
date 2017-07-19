import 'jest-enzyme';
import React from 'react';
import { shallow } from 'enzyme';

import Clock from '../../src/components/Clock';

describe('Testing clock component', () => {

    it('should be truthy', () => {
        expect(Clock).toBeTruthy();
    });

    describe('formatSeconds', () => {
        it('should format seconds', () => {
            expect(Clock.formatSeconds(61)).toBe('01:01');
        });
        it('should handle zeros', () => {
            expect(Clock.formatSeconds(0)).toBe('00:00');
        });
    });


    describe('rendering', () => {

        it('should have a classname', () => {
            expect(shallow(<Clock />))
                .toHaveClassName('clock');
        });

        it('should render a span child with a classname', () => {
            expect(shallow(<Clock />)
                .children('span.clock-text'))
                .toHaveLength(1);
        });

        it('should render span with text', () => {
            expect(shallow(<Clock totalSeconds={61} />))
                .toHaveText('01:01');
        });

        it('should render empty text', () => {
            expect(shallow(<Clock totalSeconds={0} />))
                .toHaveText(Clock.defaultProps.emptyText);

            const emptyText = 'Weeaboo';
            expect(shallow(<Clock totalSeconds={0} emptyText={emptyText} />))
                .toHaveText(emptyText);
        });

    });

});