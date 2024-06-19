
const initialState:any = {}

const reducerRegister = (state = initialState, action:any) => {
  switch (action.type) {
    case 'REGISTER':
      return {...state, action}
    default:
      return state;
  }
};

export default reducerRegister;