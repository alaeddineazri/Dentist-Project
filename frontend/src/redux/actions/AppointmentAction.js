



import axios from 'axios'
import { toast } from 'react-toastify';
import { setToken } from '../../helpers/helpers';
import {
    ADD_APPOINTMENT_LOADING,
    GET_ALL_APPOINTMENT_LOADING,
    DELETE_APPOINTMENT_LOADING,
    ADD_APPOINTMENT_SUCCESS,
    GET_ALL_APPOINTMENT_SUCCESS,
    DELETE_APPOINTMENT_SUCCESS,
    ADD_APPOINTMENT_FAILED,
    GET_ALL_APPOINTMENT_FAILED,
    DELETE_APPOINTMENT_FAILED,
    UPDATE_APPOINTMENT_FAILED,
    UPDATE_APPOINTMENT_SUCCESS,
    UPDATE_APPOINTMENT_LOADING,
    GET_APPOINTMENT_LOADING,
    GET_APPOINTMENT_SUCCESS,
    GET_APPOINTMENT_FAILED,
} from './AppointmentTypes';





export const addAppointment = (date) => async dispatch => {
    dispatch({ type: ADD_APPOINTMENT_LOADING })
    try {
        setToken()
        const res = await axios.post('https://myfirstapp-gmc.herokuapp.com/api/appointment/add', date)
        dispatch({
            type: ADD_APPOINTMENT_SUCCESS,
            payload: res.data
        })
        toast.success("Successfully  !", {
            theme: "colored",
            position: toast.POSITION.TOP_CENTER
        })
    } catch (err) {
        dispatch({
            type: ADD_APPOINTMENT_FAILED,
            payload: err.response.data.errors

        })
        toast.error(`${err.response.data.errors[0].msg}`, {
            theme: "colored",
            position: toast.POSITION.BOTTOM_CENTER
        })
    }
}

export const getAllAppointment = () => async dispatch => {
    dispatch({ type: GET_ALL_APPOINTMENT_LOADING })
    try {
        setToken()
        const res = await axios.get('https://myfirstapp-gmc.herokuapp.com/api/appointment/allAppointment',)
        dispatch({
            type: GET_ALL_APPOINTMENT_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: GET_ALL_APPOINTMENT_FAILED,
            payload: err.response.data.errors

        })
    }
}



export const deleteApp = (id) => async (dispatch) => {
    dispatch({ type: DELETE_APPOINTMENT_LOADING })
    console.log("id", id)
    try {
        setToken()
        const res = await axios.delete(`https://myfirstapp-gmc.herokuapp.com/api/appointment/deleteAppointment/${id}`)
        dispatch({
            type: DELETE_APPOINTMENT_SUCCESS,
            payload: res.data
        })
        toast.success("Successfully Deleted !", {
            theme: "colored",
            position: toast.POSITION.TOP_CENTER
        })
    } catch (err) {
        dispatch({
            type: DELETE_APPOINTMENT_FAILED,
            payload: err.response.data.errors
        })

    }
}

export const updateApp = (id, updatedDate) => async (dispatch) => {
    dispatch({ type: UPDATE_APPOINTMENT_LOADING })
    try {
        setToken()
        const res = await axios.put(`https://myfirstapp-gmc.herokuapp.com/api/appointment/updateAppointment/${id}`, updatedDate)
        dispatch({
            type: UPDATE_APPOINTMENT_SUCCESS,
            payload: res.data
        })
        toast.success("Successfully Updated!", {
            theme: "colored",
            position: toast.POSITION.TOP_CENTER
        })
    } catch (err) {
        dispatch({
            type: UPDATE_APPOINTMENT_FAILED,
        })
    }
}



export const getAppointment = () => async (dispatch) => {
    dispatch({ type: GET_APPOINTMENT_LOADING })
    try {
        setToken()
        const res = await axios.get('https://myfirstapp-gmc.herokuapp.com/api/appointment/getApp')
        dispatch({
            type: GET_APPOINTMENT_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: GET_APPOINTMENT_FAILED,
            payload: err.response.data.errors
        })
    }

}



































































