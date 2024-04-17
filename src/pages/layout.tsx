import React, { useState } from 'react'
import Login from './login';
import Toolbar from '@/components/toolbar';
import { Outlet } from 'react-router-dom';

function Layout() {
    const [login, setLogin] = useState<boolean>(true);
    return (
        login ?  <div className=' h-[95%]'>
            <Toolbar />
            <Outlet/>
        </div> : <Login/>
    )
}

export default Layout