import axios from 'axios'
import { toast } from 'react-toastify'
import { setToken } from "../../helpers/helpers"
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
} from "./UserTypes"





export const getAllUsers = () => async (dispatch) => {
    dispatch({ type: GET_All_USERS_LOADING })
    try {
        setToken()
        const res = await axios.get('https://myfirstapp-gmc.herokuapp.com/api/user/getAllUsers')
        dispatch({
            type: GET_All_USERS_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: GET_All_USERS_FAILED,
            payload: err.response.data.errors
        })
    }
}


export const deleteUsers = (id) => async (dispatch) => {
    dispatch({ type: DELETE_USER_LOADING })
    console.log("id", id)
    try {
        setToken()
        const res = await axios.delete(`https://myfirstapp-gmc.herokuapp.com/api/user/deleteUser/${id}`)
        dispatch({
            type: DELETE_USER_SUCCESS,
            payload: res.data
        })
        toast.success("Successfully Deleted !", {
            theme: "colored",
            position: toast.POSITION.TOP_CENTER
        })
        // alert("User was removed successfully!")
    } catch (err) {
        dispatch({
            type: DELETE_USER_FAILED,
            payload: err.response.data.errors
        })
    }
}




export const updateUsers = (id ,updatedUser) => async (dispatch) => {
    dispatch({ type: UPDATE_USER_LOADING })
    // console.log("id update", id)
    // console.log("updatedUser", updatedUser)
    try {
        setToken()
        const res = await axios.put(`https://myfirstapp-gmc.herokuapp.com/api/user/updateUserAdmin/${id}`,updatedUser)
        console.log("res",res.data)
        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: res.data
        })
        toast.success("Successfully Updated!", {
            theme: "colored",
            position: toast.POSITION.TOP_CENTER
        })
    } catch (err) {
        dispatch({
            type: UPDATE_USER_FAILED,
            payload: err.response.data.errors
        })
    }
}
