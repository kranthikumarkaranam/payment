import 'react-native';
import React from 'react';
import App from '../src/App';
import {render, cleanup, fireEvent} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import Payment from "../src/Payment";

global.setImmediate = callback => callback();

describe('App', () => {
    let getByTestId, wrapper;

    const TEST_IDS = {
        PAY_BUTTON: 'pay-button',
        INPUT: 'input'
    }

    beforeEach(() => {
        wrapper = render(<Payment/>);
        getByTestId = wrapper.getByTestId;
    });

    afterEach(() => {
        cleanup();
    });

    it('should render the initial UI as expected', () => {
        expect(getByTestId(TEST_IDS.PAY_BUTTON)).toBeDisabled();
        expect(getByTestId(TEST_IDS.INPUT).props.value).toBeFalsy()
    });


    it('should set the input correctly', () => {
        fireEvent.changeText(getByTestId(TEST_IDS.INPUT), '');
        expect(getByTestId(TEST_IDS.INPUT).props.value).toBeFalsy()

        fireEvent.changeText(getByTestId(TEST_IDS.INPUT), '1000');
        expect(getByTestId(TEST_IDS.INPUT).props.value).toBeTruthy()
        expect(getByTestId(TEST_IDS.INPUT).props.value).toEqual('1000')
    })

    it('should not enable input if the value is not a whole number', () => {
        fireEvent.changeText(getByTestId(TEST_IDS.INPUT), '');
        expect(getByTestId(TEST_IDS.INPUT).props.value).toBeFalsy()
        expect(getByTestId(TEST_IDS.PAY_BUTTON)).toBeDisabled();

        fireEvent.changeText(getByTestId(TEST_IDS.INPUT), 'TEST');
        expect(getByTestId(TEST_IDS.PAY_BUTTON)).toBeDisabled();

        fireEvent.changeText(getByTestId(TEST_IDS.INPUT), '()&%#44');
        expect(getByTestId(TEST_IDS.PAY_BUTTON)).toBeDisabled();
    })

    it('should enable the pay button when the input is valid', () => {
        fireEvent.changeText(getByTestId(TEST_IDS.INPUT), '');
        expect(getByTestId(TEST_IDS.INPUT).props.value).toBeFalsy()
        expect(getByTestId(TEST_IDS.PAY_BUTTON)).toBeDisabled();

        fireEvent.changeText(getByTestId(TEST_IDS.INPUT), '1000');
        expect(getByTestId(TEST_IDS.INPUT).props.value).toBeTruthy()
        expect(getByTestId(TEST_IDS.INPUT).props.value).toEqual('1000')
        expect(getByTestId(TEST_IDS.PAY_BUTTON)).not.toBeDisabled();
    })
});

