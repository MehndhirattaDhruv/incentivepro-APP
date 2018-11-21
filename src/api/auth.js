import {
    apiGet,
    apiPost
} from '../../utils.js';

export function loginAPI(user) {
    let data = JSON.stringify(user)
    return apiPost('app/login', data);
}