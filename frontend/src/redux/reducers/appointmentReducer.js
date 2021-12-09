import {
    ADD_APPOINTMENT_FAILED,
    ADD_APPOINTMENT_LOADING,
    ADD_APPOINTMENT_SUCCESS,
    DELETE_APPOINTMENT_FAILED,
    DELETE_APPOINTMENT_LOADING,
    DELETE_APPOINTMENT_SUCCESS,
    GET_ALL_APPOINTMENT_FAILED,
    GET_ALL_APPOINTMENT_LOADING,
    GET_ALL_APPOINTMENT_SUCCESS,
    UPDATE_APPOINTMENT_FAILED,
    UPDATE_APPOINTMENT_LOADING,
    UPDATE_APPOINTMENT_SUCCESS,
    GET_APPOINTMENT_LOADING,
    GET_APPOINTMENT_SUCCESS,
    GET_APPOINTMENT_FAILED,
} from "../actions/AppointmentTypes"




const initialState = {
    date: [],
    isLoading: false,
    errors: null,
    myDate:null
}

const appointmentReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_APPOINTMENT_LOADING:
        case GET_ALL_APPOINTMENT_LOADING:
        case ADD_APPOINTMENT_LOADING:
        case DELETE_APPOINTMENT_LOADING:
        case UPDATE_APPOINTMENT_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case GET_ALL_APPOINTMENT_SUCCESS:
        case ADD_APPOINTMENT_SUCCESS:
            return {
                ...state,
                date: payload,
                isLoading: false,
                errors: null
            }
        case GET_APPOINTMENT_SUCCESS:
            return {
                ...state,
                myDate: payload,
                isLoading: false,
                errors: null
            }
        case UPDATE_APPOINTMENT_SUCCESS:

            return {
                ...state,
                date: state.date.map(elm => elm._id === payload._id ? { ...elm, payload } : elm),
                isLoading: false,
                errors: null
            }
        case GET_APPOINTMENT_FAILED:
        case ADD_APPOINTMENT_FAILED:
        case GET_ALL_APPOINTMENT_FAILED:
        case DELETE_APPOINTMENT_FAILED:
        case UPDATE_APPOINTMENT_FAILED:
            return {
                ...state,
                date: null,
                isLoading: false,
                errors: payload
            }
        case DELETE_APPOINTMENT_SUCCESS:
            return {
                ...state,
                date: state.date.filter(elm => elm._id !== payload._id),
                isLoading: false,
            }
        default:
            return state
    }
}






export default appointmentReducer




































// import { ADD_APPOINTMENT_FAILED, ADD_APPOINTMENT_SUCCESS } from "../actions/AppointmentTypes"

// const initialState = {
//     appointment:[], //!5555555555555555555555555555
//     errors: null,
// }


// const appointmentReducer = (state = initialState, { type, payload }) => {
//             console.log(type)
//             console.log(payload)

//     switch (type) {
//         case ADD_APPOINTMENT_SUCCESS:
//             return { 
//                 ...state,
//                 //!22222222222222222222222222222222222222222222222
//                 appointment: payload,
//                 errors:null
//             }

//             case ADD_APPOINTMENT_FAILED:
//                 return {
//                     ...state,
//                     errors:payload,

//                 }
//         default:
//             return state
//     }
// }

// export default appointmentReducer