import { useEffect, useState } from 'react'
import Login from './login';
import Toolbar from '@/components/toolbar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Layout() {
    const redux = useSelector((state: any) => state.reducer);
    // @ts-ignore
    const [login, setLogin] = useState<boolean>(false);
    useEffect(() => {
        if (redux?.login != undefined && typeof redux.login == 'boolean') {
            setLogin(redux.login)
        }
    }, [])
    return (
        true ? <div className=' flex  flex-col h-[100%]'>
            <Toolbar />
            <div className='grow'>
                <Outlet />
            </div>
        </div> : <Login />
    )
}

export default Layout