import types from '../types';
import store from '../store';
import { getSubsidiesAPI } from '../api/getSubsidiesAPI';
const { dispatch } = store;

export function getSubsidies(data) {
    dispatch({
        type: types.SUBSIDIES
    })
    return new Promise((response, rej) => getSubsidiesAPI(data)
        .then(res => {

            dispatch({
                type: types.SUBSIDIES_SUCCESS,
                payload: res
            })

            return response(res)

        })
        .catch(err => {
            dispatch({
                type: types.SUBSIDIES_FAILED
            })
            return rej(err)
        })
    )
}

