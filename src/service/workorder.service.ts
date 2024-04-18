import { HelpDeskDict, MGetDict, MInsertJob, MStatus } from '@/interface/workorder.interface';
import axios from 'axios'
const http = axios.create({
    baseURL: 'http://localhost:5022',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8;json/html; charset=UTF-8',
        // 'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    }
});
export default http;

export function API_GET_DICT_BY_CATEGORY(param: MGetDict) {
    return new Promise<HelpDeskDict[]>(resolve => {
        http.post(`/getDictByCategory`, param).then((res) => {
            resolve(res.data);
        })
    })
}
export function API_INSERT_JOB(param: any) {
    return new Promise<MStatus>(resolve => {
        http.post(`/insertJob`, param).then((res) => {
            resolve(res.data);
        })
    })
}
// export function API_ACCEPT_JOB(param:) {
//     return new Promise(resolve => {
//         http.post(`/acceptJob`, param).then((res) => {
//             resolve(res);
//         })
//     })
// }
// export function API_FINISH_JOB(param:) {
//     return new Promise(resolve => {
//         http.post(`/finishJob`, param).then((res) => {
//             resolve(res);
//         })
//     })
// }