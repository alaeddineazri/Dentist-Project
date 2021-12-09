import { GET_PROFILE_FAILED, GET_PROFILE_LOADING, GET_PROFILE_SUCCESS, LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILED, REGISTER_SUCCESS } from "../actions/authTypes";

const initState = {
    token: localStorage.getItem('token'),
    isAuth: Boolean(localStorage.getItem('isAuth')),
    user: JSON.parse(localStorage.getItem('user')),
    isLoading: false,
    errors: null
}



const autReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOGIN_LOADING:
        case GET_PROFILE_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            localStorage.setItem('isAuth', true)
            return {
                ...state,
                token: payload.token,
                isAuth: true,
                isLoading: false,
                errors: null
            }
        case GET_PROFILE_SUCCESS:
            localStorage.setItem('user', JSON.stringify(payload))
            return {
                ...state,
                user: payload
            }
        case REGISTER_FAILED:
        case GET_PROFILE_FAILED:
        case LOGIN_FAILED:
            return {
                ...state,
                token: null,
                isAuth: false,
                user: null,
                isLoading: false,
                errors: payload
            }
        case LOGOUT:
            localStorage.clear()
            return {
                ...state,
                isAuth: false,
                isLoading: false,
                user: null,
                token: null,
            }
        default:
            return state
    }
}

export default autReducer