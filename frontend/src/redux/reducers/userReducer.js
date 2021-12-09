import {
    GET_All_USERS_LOADING,
    GET_All_USERS_SUCCESS,
    GET_All_USERS_FAILED,
    DELETE_USER_FAILED,
    DELETE_USER_SUCCESS,
    DELETE_USER_LOADING,
    UPDATE_USER_LOADING,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILED
} from "../actions/UserTypes"


const initialState = {
    info: JSON.parse(localStorage.getItem('infos')),
    isLoading: false,
    errors: null
}


const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_All_USERS_LOADING:
        case UPDATE_USER_LOADING:
        case DELETE_USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case GET_All_USERS_SUCCESS:
            console.log('GET_All_USERS payload', payload)
            return {
                ...state,
                info: payload,
                isLoading: false,
                errors: null
            }
        case UPDATE_USER_SUCCESS:{
            
            return {
                ...state,
                info: state.info.map(elm=>elm._id === payload._id ?{...elm,payload}:elm),
                isLoading: false,
                errors: null
            }}
        case UPDATE_USER_FAILED:
        case GET_All_USERS_FAILED:
        case DELETE_USER_FAILED:
            return {
                ...state,
                info: null,
                isLoading: false,
                errors: payload
            }
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                info: state.info.filter(elm => elm._id !== payload._id),
                isLoading: false,
            }
        default:
            return state
    }
}


export default userReducer