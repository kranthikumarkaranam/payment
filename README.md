# React Native: Payment App

## Environment 

- Default Port: 8000

## Application Demo:
![](https://hrcdn.net/s3_pub/istreet-assets/eWvpk7D1oObP0oOaLOU7lg/payment.gif)


## Functionality Requirements

Complete the implementation of the app according to the following requirements:
- The Payment component has an input for entering the amount to pay and a `Pay Now` button.
- Initially, the input value should be empty and the `Pay Now` button should be disabled.
- On entering a valid value (only whole numbers) on the `Amount` input, the `Pay Now` button should be enabled.
- Valid values are: 1, 124, 983
- Invalid values: abcd, 1.2, 232.4, $%#$#


## Testing Requirements
- The amount input must have testID="input"
- The Pay Now button must have testID="pay-button"


## Project Specifications

**Read Only Files**
- `__tests__/*`

**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```
