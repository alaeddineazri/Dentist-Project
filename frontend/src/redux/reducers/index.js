import { combineReducers } from "redux";
import appointmentReducer from "./appointmentReducer";
import autReducer from "./authReducer";
import userReducer from "./userReducer";






export default combineReducers({
    auth:autReducer,
    appointment:appointmentReducer,
    patients:userReducer,
})