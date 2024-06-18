const initialState:any = [];

const reducerRandomNumber = (state = initialState, action:any) => {
  switch (action.type) {
    case 'RANDOM':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducerRandomNumber;
