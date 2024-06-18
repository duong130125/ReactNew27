import { combineReducers, createStore } from "redux";
import reducerProfile from "../reducers/profileReducer";
import reducerListUser from "../reducers/ListUserReducer";
import reducerProduct from "../reducers/productReducer";
import reducerCounter from "../reducers/counterReducer";
import reducerRandomNumber from "../reducers/randomReducer";

const rootReducer = combineReducers({
    reducerProfile,
    reducerListUser,
    reducerProduct,
    reducerCounter,
    reducerRandomNumber,
})

const store = createStore(rootReducer)

export default store