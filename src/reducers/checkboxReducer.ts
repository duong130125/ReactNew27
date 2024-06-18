
const initialState:any = 'light'


const reducerCheckBox = (state = initialState, action:any) => {
  switch (action.type) {
    case "CHECKBOX":
      return state === 'light' ? 'dark' : 'light';
    default:
      return state;
  }
};

export default reducerCheckBox;
