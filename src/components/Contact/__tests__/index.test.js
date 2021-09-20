import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(
            <Contact></Contact>
        )
    });

    it('matches snapshot', () => {
        const { asFragment } = render(
            <Contact></Contact>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('label visible', () => {
    it('inserts label into the h1', () => {
        const { getByTestId } = render(
            <Contact></Contact>
        );
        expect(getByTestId('contact')).toHaveTextContent('Contact me');
    });
});


describe('submit button', () => {
    it('inserts button text', () => {
        const { getByTestId } = render(
            <Contact></Contact>
        );
        expect(getByTestId('submitButton')).toHaveTextContent('Submit');
    });
});