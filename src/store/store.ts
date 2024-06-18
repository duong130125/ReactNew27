import { combineReducers, createStore } from "redux";
import reducerProfile from "../reducers/profileReducer";
import reducerListUser from "../reducers/ListUserReducer";
import reducerProduct from "../reducers/productReducer";
import reducerCounter from "../reducers/counterReducer";
import reducerRandomNumber from "../reducers/randomReducer";
import reducerChange from "../reducers/changeReducer";
import reducerCheckBox from "../reducers/checkboxReducer";

const rootReducer = combineReducers({
    reducerProfile,
    reducerListUser,
    reducerProduct,
    reducerCounter,
    reducerRandomNumber,
    reducerChange,
    reducerCheckBox
})

const store = createStore(rootReducer)

export default store