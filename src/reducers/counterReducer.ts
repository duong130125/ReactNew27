const counter:number=0

const reducerCounter= (state=counter,action:any) => {
    switch (action.type) {
        case "INCREASE":
            return state+1
        case "DECREASE":
            return state-1
        default:
            return state
    }
}
export default reducerCounter;