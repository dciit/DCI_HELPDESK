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
                </Route>
                <Route path={`${BASE}`} element={<NotFound />} />
                <Route path={`${BASE}/login`} element={<Login />} />
                <Route path={`${BASE}/canteen`} element={<Canteen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers

