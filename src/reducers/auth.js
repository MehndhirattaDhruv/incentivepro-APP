import types from '../types';

let initState = {
    fetching: false,
    user: {}
}

import { saveObject } from '../../utils'

export default function (state = initState, action) {

    switch (action.type) {

        case types.AUTH_LOGIN:
            return { ...state, fetching: true }
        case types.AUTH_LOGIN_SUCCESS:
            let newUser = { ...action.payload.response };
            saveObject(newUser)
            return { ...state, fetching: false, user: newUser }
        case types.AUTH_LOGIN_FAILED:
            return { ...state, fetching: false }

     
        default:
            return { ...state }

    }
}
