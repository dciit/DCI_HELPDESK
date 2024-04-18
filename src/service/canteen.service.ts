import { canteenMonitor } from '@/interface/canteen.interface';
import axios from 'axios'
const http = axios.create({
    baseURL: import.meta.env.VITE_WK,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8;json/html; charset=UTF-8',
        // 'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    }
});
export default http;

export function API_GET_CANTEEN() {
    return new Promise<canteenMonitor>(resolve => {
        http.get(`/getDataCanteen`).then((res) => {
            resolve(res.data);
        })
    })
}