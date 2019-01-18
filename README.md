# Frontend Challenge 1

## Introduction
Imagine the situation when you have to take over a codebase which is not completed. The exercise is to finish the remaining tasks within 1 hour. First start with the MVP requirements then continue with the Nice to have tasks if you have enough time for them!

Hurry up the time is running out.


## MVP
  ### Login Page:
 - Implement `validateResponse` according to the Token Specifications (redirect with `this.props.history.replace`)
 - Implement missing redux part on `AUTHENTICATE_SUCCESS`
 - Fix `Login.js` to redirect after successful login

 ### Profile Page:
 - fix `generateToken` according to the Token Specifications
 - fix `logOut` button. (logout should also redirect to the main screen)

## Nice to have:
 - Implement Error handling on Login & Profile pages
   
   **Possible Errors:**
   - User not exists
   - Invalid token
   - Invalid request
   - Invalid request body
   - Nothing to update
   - Internal Server Error
 - Implement Token validation on client side
   - ~30% of the tokens returned by the server are not valid (*token can be still decoded!!*). The app should display an error message.
 - Persist user session
 - Fix `Nothing to update` error on client side / *appears when you land on Profile and you submit the form* /

## Token Specification
 Frontend Challenge 1 is using a very basic JWT like token to send and receive user profile information.
 
 **How to generate a token:**
   - generate checksum of the request body (using checksum module in redux.js)
   - base64 encode request body
   - concat request body with your base64 string: `checksum.base64_body_strgin`
 
  **How to decode a token:**
   - decode base64 part of the token
   - validate it with the checksum (*optional see Nice to have section*)
 
  **Token format:**
   `checksum.base64_body_strgin`

## Redux - Reducer
  If you are not familiar with the reducer syntax please check:
  - [redux-create-reducer](https://www.npmjs.com/package/redux-create-reducer)

## UI Framework
  If you are not familiar with the UI framework:
  - [material-ui](https://material-ui.com/)
