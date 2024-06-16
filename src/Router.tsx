// import { ThemeContext } from '@emotion/react'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { MContext } from './interface'
import Account from './pages/account'
import Canteen from './pages/canteen'
import NotFound from './pages/notfound'
import Sparepart from './pages/sparepart'
import Workorder from './pages/workorder'
import { useSelector } from 'react-redux'
import { MRedux } from './interface/core.interface'
import Layout from './pages/layout'
import Helpdesk from './pages/helpdesk'
import LoginTest from './pages/login.testing'
import HelpdeskBackend from './pages/helpdesk.backend'
import Management from './pages/helpdesk.backend'
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
                    <Route path={`${BASE}/management`} element={<Management />} />
                    <Route path={`${BASE}/helpdesk`} element ={ <Helpdesk/>}/>
                </Route>
                <Route path={`${BASE}`} element={<NotFound />} />
                <Route path={`${BASE}/login`} element={<LoginTest />} />
                <Route path={`${BASE}/canteen`} element={<Canteen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers

