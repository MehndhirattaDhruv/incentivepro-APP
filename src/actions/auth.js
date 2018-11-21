import {
    loginAPI
} from '../api/auth';
import store from '../store';
import types from '../types';
const { dispatch } = store;

export function login(payload) {
    dispatch({
        type: types.AUTH_LOGIN
    })


    return new Promise((response, rej) => loginAPI(payload)
        .then(res => {
            dispatch({
                type: types.AUTH_LOGIN_SUCCESS,
                payload: res
            })

            return response(res)
        })
        .catch(err => {
            dispatch({
                type: types.AUTH_LOGIN_FAILED
            })

            return rej(err)
        })
    )

}





