import { createStore } from 'redux';


let defaultState = {
    signinUser: {
        ID: null,
        Name: "Default"
    }
}

// let signinAction = (payload) => (
//     type: "SIGNIN_ACTION",
//     payload
// )

// let signoutAction = (payload) => {
//     type: "SIGNOUT_ACTION",
//     payload
// }

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
        // case Constants.TOGGLE_SIDEBAR:
        //   this.toggleSidebar();
        //   break;
        case "SIGNIN_ACTION":
          state = ActionFnObj[action.type](state, action);
        //   console.log("SINGIN...", state, {...state})
          return {...state};
        case "SIGNOUT_ACTION":
            state = ActionFnObj[action.type](state, action);
            return {...state};
        default:
          return state;
    }
}



// const loadState = () => {
//     try {
//       const serializedState = localStorage.getItem('signinUser');
//       if(serializedState === null) {
//         return undefined;
//       }
//       return JSON.parse(serializedState);
//     } catch (e) {
//       return undefined;
//     }
//   };
  
//   const saveState = (state) => {
//     try {
//       const serializedState = JSON.stringify(state);
//       localStorage.setItem('signinUser', serializedState);
//     } catch (e) {
//       // Ignore write errors;
//     }
//   };
  
//   const peristedState = loadState();
  
//   store.subscribe(() => {
//     saveState(store.getState());
//   });
  
//   const store = createStore(
//     persistedState,
//     // Others reducers...
//   );

// const store = createStore(persistedState, reducer)
const store = createStore(reducer)

export {store};