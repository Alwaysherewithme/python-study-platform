import { createStore } from 'redux';
import { SIGNIN_ACTION, SIGNOUT_ACTION } from './ActionTypes';


let defaultState = {
    signinUser: {
        ID: null,
        Name: "Default"
    }
}

let ActionFnObj = {
    SIGNIN_ACTION: (state, action) => {
      state.signinUser = action.payload
      return state
    },
    SIGNOUT_ACTION: (state, action) => {
      state.signinUser = null
      return state
    }
  }

let reducer = (state=defaultState, action) => {
    switch (action.type) {
        case SIGNIN_ACTION:
          state = ActionFnObj[action.type](state, action);
          return {...state};
        case SIGNOUT_ACTION:
            state = ActionFnObj[action.type](state, action);
            return {...state};
        default:
          return state;
    }
}

const store = createStore(reducer)

export {store};