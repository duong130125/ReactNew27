
const initialState:any = "Rikkei Academy";


const reducerChange = (state = initialState, action: any) => {
  switch (action.type) {
    case "CHANGE":
      return state === "Rikkei Academy" ? "RikkeiSoft" : "Rikkei Academy";
    default:
      return state;
  }
};

export default reducerChange;