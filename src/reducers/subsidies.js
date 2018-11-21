import types from '../types';

let initState = {
    fetching: false,
    subsidies: [],
    subsidiesLength: 0
}

export default function (state = initState, action) {
    switch (action.type) {
        case types.SUBSIDIES:
            return { ...state, fetching: true }
        case types.SUBSIDIES_SUCCESS:
            return { ...state, subsidies: [...action.payload.response.subsidies], subsidiesLength: action.payload.response.total, fetching: false }
        case types.SUBSIDIES_FAILED:
            return { ...state, fetching: false }
        default:
            return { ...state }
    }

}
