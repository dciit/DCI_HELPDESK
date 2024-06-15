// import { ThemeContext } from '@emotion/react'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { MContext } from './interface'
import Account from './pages/account'
import Canteen from './pages/canteen'
import Login from './pages/login'
import NotFound from './pages/notfound'
import Sparepart from './pages/sparepart'
import Workorder from './pages/workorder'
import { useSelector } from 'react-redux'
import { MRedux } from './interface/core.interface'
import Layout from './pages/layout'
import Helpdesk from './pages/helpdesk'
import LoginTest from './pages/login.testing'
import Home from './pages/home'
import SocketComponent from './pages/socket.io'
import RTSP from './pages/rtsp'
const BASE = import.meta.env.VITE_PATH;

const Routers = () => {
    const redux: MRedux = useSelector((state: any) => state.reducer);
    const login = redux.login;
    useEffect(() => {
    }, [login])
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={`${BASE}/*`} element={<NotFound />} />
                    <Route path={`${BASE}/workorder`} element={<Workorder />} />
                    <Route path={`${BASE}/sparepart`} element={<Sparepart />} />
                    <Route path={`${BASE}/account`} element={<Account />} />
                    <Route path={`${BASE}/rtsp`} element={<RTSP />} />
                </Route>
                <Route path={`${BASE}`} element={<NotFound />} />
                <Route path={`${BASE}/login`} element={<LoginTest />} />
                <Route path={`${BASE}/canteen`} element={<Canteen />} />
                <Route path={`${BASE}/helpsdesk`} element ={ <Helpdesk/>}/>
                <Route path={`${BASE}/home`} element ={ <Home/>}/>
                <Route path={`${BASE}/socket`} element ={ <SocketComponent/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers

