import { canteenInfo, canteenParamInfo, canteenSummary } from '@/interface/canteen.interface';
import axios from 'axios'
const http = axios.create({
    baseURL: import.meta.env.VITE_API_CANTEEN,
    headers: {
        //'Content-Type': 'application/json;charset=UTF-8;json/html; charset=UTF-8',
        'Content-Type': 'application/json'
        // 'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    }
});


export default http;

export function API_POST_CANTEEN(param: canteenParamInfo) {
    return new Promise<canteenSummary>(resolve => {
        http.post(`/CanteenSummary`, param).then((res) => {
            resolve(res.data);
        })
    })
}

export async function API_POST_CANTEEN_SERVE(param: canteenInfo) {
    return await http.post(`/UpdateServe`, param).then((res) => {
        return res.data;
    })
}
