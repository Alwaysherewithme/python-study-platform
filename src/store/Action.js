import API from "../api/index";
import * as types from "./ActionTypes";

export const getUserData = data => dispatch => {
    API.userLogin(data, result => {
        dispatch({
            type: types.GET_USER_DATA,
            user: result.data,
            status: result.status,
            message: result.message
        });
    }).catch(err => {
        console.log(err);
    });
};

export const getPathname = path => dispatch => {
    dispatch({
        type: types.GET_PATHNAME,
        pathname: path
    });
};

export const logout = () => dispatch => {
    dispatch({
        type: types.LOGOUT
    });
};