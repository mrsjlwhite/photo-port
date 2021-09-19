import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// ensuring after each test, there's no leftover memory data (that could give us false results)
afterEach(cleanup);

describe('About component', () => {
    // First Test
    //('declaresWhatsTested, () => a callback function runs the test)
    it('renders', () => {
        render(<About />);
    });

    // Second Test
    it('matches snapshot DOM node structure', () => {
        // renturns component snapshot
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });

})