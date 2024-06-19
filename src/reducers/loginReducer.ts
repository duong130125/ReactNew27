const initialState:any = {}

const reducerLogin = (state = initialState, action:any) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, action}
    default:
      return state;
  }
};

export default reducerLogin;