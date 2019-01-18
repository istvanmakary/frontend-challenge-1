import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { createReducer } from 'redux-create-reducer';
import checksum from 'checksum';

const AUTHENTICATE_START = 'USER/AUTHENTICATE_START';
const AUTHENTICATE_SUCCESS = 'USER/AUTHENTICATE_SUCCESS';
const AUTHENTICATE_ERROR = 'USER/AUTHENTICATE_ERROR';

const UPDATE_PROFILE_START = 'USER/UPDATE_PROFILE_START';
const UPDATE_PROFILE_SUCCESS = 'USER/UPDATE_PROFILE_SUCCESS';
const UPDATE_PROFILE_ERROR = 'USER/UPDATE_PROFILE_ERROR';
const LOGOUT = 'USER/LOGOUT';

const initialState = {
  error: '',
  isLoading: false,
};

const middlewares = [thunk, createLogger({ collapsed: true })];

const user = createReducer(initialState, {
  [AUTHENTICATE_SUCCESS]: (state) => ({
    ...state,
  }),
  [LOGOUT]: () => ({
    ...initialState,
  }),
  [UPDATE_PROFILE_SUCCESS]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
});

export const store = createStore(combineReducers({ user }), applyMiddleware(...middlewares));

export const getProfileData = (state) => ({
  firstName: state.user.firstName,
  lastName: state.user.lastName,
  bio: state.user.bio,
  token: state.user.token,
});

const validateResponse = (result) => result;

export const logOut = () => ({ type: LOGOUT });

export const authenticate = (payload) => (dispatch) => {
  dispatch({ type: AUTHENTICATE_START });
  return fetch('https://us-central1-frontend-challenge-1.cloudfunctions.net/authenticate', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
  .then((response) => response.text())
  .then(validateResponse)
  .then(
    (payload) => {
      dispatch({ type: AUTHENTICATE_SUCCESS, payload });

      return { success: true, payload };
    },
    (error) => {
      dispatch({ type: AUTHENTICATE_ERROR, error });

      return { success: false, error };
    },
  );
};

const generateToken = (body) => body;

export const updateProfile = (payload) => (dispatch) => {
  dispatch({ type: UPDATE_PROFILE_START });
  return fetch('https://us-central1-frontend-challenge-1.cloudfunctions.net/updateProfile', {
    method: 'POST',
    body: generateToken(JSON.stringify(payload)),
  })
  .then((response) => response.text())
  .then(validateResponse)
  .then(
    (payload) => {
      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload });

      return { success: true, payload };
    },
    (error) => {
      dispatch({ type: UPDATE_PROFILE_ERROR, error });

      return { success: false, error };
    },
  );
};