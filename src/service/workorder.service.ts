import axios from 'axios'
const http = axios.create({
    baseURL: import.meta.env.VITE_WK,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8;json/html; charset=UTF-8',
        // 'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    }
});
export default http;

export function API_GET_DICT(hdCategory: string) {
    return new Promise(resolve => {
        http.get(`/getDict/${hdCategory}`).then((res) => {
            resolve(res);
        })
    })
}