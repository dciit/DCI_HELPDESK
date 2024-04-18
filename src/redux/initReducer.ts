import { MRedux } from "@/interface/core.interface"


const initialState: MRedux = {
}

const IndexReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                login: true,
                name: action.payload.name,
                sure: action.payload.sure,
                code: action.payload.code
            }
        case 'LOGOUT':
            return {
                ...state,
                menuActive: 'home',
                login: false
            }
        default:
            return state
    }
}
export default IndexReducer;
