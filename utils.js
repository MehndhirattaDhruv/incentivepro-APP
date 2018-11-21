import React from 'react'
import axios from 'axios';
import {
    AsyncStorage
} from 'react-native';
import { apiUrl } from './src/constants'
/**
 * Pass number to convert to decimal
 * @params
 * places number of decimal places after the number
 * no number to convert
*/

/* export function isLoggedIn() {
    let session = getObject('session');

    let token = session && session.accessToken;

    return session && session.accessToken;
} */

export function isLoggedIn() {
    return AsyncStorage.getItem('user');
}

export async function logout() {
    return AsyncStorage.removeItem('user');

}

/* export function getHeaders() {
    let session = getObject('session');
    return {
        authorization: session && session.accessToken || null
    }
} */

export function saveObject(value) {
    return AsyncStorage.setItem('user', JSON.stringify(value));
}

export function getObject(key) {

    return AsyncStorage.getItem(key)
}


export function generateUrl(path) {

    return apiUrl + path;
}

export function apiReq(endPoint, data, method, headers, config) {
    return new Promise((res, rej) => {
        let user = getObject("user")
        headers = {
            ...headers,
            Auth: user && user.access_token || null
        }

        if (method == 'get') {
            data = {
                params: data,
                headers,
                ...config
            }
        }



        axios[method](endPoint, data, { ...config, headers }).then((result) => {
            let { data } = result;

            return res(data)
        }).catch((err) => {

            return rej(err);
        });
    })
}

export function apiPost(endPoint, data, headers = {}, config = {}) {
    return apiReq(generateUrl(endPoint), data, 'post', headers, config);
}

export function apiDelete(endPoint, data, headers = {}, config = {}) {
    return apiReq(generateUrl(endPoint), data, 'delete', headers, config);
}

export function apiGet(endPoint, data, headers = {}, config = {}) {
    return apiReq(generateUrl(endPoint), data, 'get', headers, config);
}

export function apiPut(endPoint, data, headers = {}, config = {}) {
    return apiReq(generateUrl(endPoint), data, 'put', headers, config);
}
