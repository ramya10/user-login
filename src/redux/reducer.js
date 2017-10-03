const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_FAILURE = 'SET_LOGIN_FAILURE';

export function login(username, password) {
  return dispatch => {
    dispatch(setLoginSuccess(false));
    dispatch(setLoginFailure(null));

    callLoginApi(username, password, error => {
      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginFailure(error));
      }
    });
  }
}

function setLoginSuccess(isLoginSuccess) {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

function setLoginFailure(loginError) {
  return {
    type: SET_LOGIN_FAILURE,
    loginError
  }
}

function callLoginApi(username, password, callback) {
    if (username === 'sample@gmail.com' && password === 'sample123') {
      return callback(null);
    } else {
      return callback(new Error('Invalid Username and Password'));
    }
}

export default function reducer(state = {
  isLoginSuccess: false,
  loginError: null
}, action) {
  switch (action.type) {
    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case SET_LOGIN_FAILURE:
      return Object.assign({}, state, {
        loginError: action.loginError
      });

    default:
      return state;
  }
}
