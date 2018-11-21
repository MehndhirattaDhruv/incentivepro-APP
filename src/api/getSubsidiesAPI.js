import { apiPost, apiGet, apiReq, apiPut } from '../../utils';


export function getSubsidiesAPI(data) {
    let user = JSON.stringify(data);
    return apiPost('app/getallsubsidies', user)
}
