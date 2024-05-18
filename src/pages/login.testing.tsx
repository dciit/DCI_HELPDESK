import React, { ChangeEvent, useRef, useState } from 'react'
import logo from '../assets/logo-login.png'
import { Alert, CircularProgress, Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { base } from '@/constant';
import { useDispatch } from 'react-redux';
import { faker } from '@faker-js/faker';
function LoginTest() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [empcode, setEmpcode] = useState<string>('');
    const [warning, setWarning] = useState<boolean>(false);
    const [load, setLoad] = useState<boolean>(false);
    const refInp = useRef<HTMLInputElement>(null);
    const handleLogin = () => {
        if (empcode.length != 5) {
            refInp.current?.focus();
            setWarning(true);
            return false;
        }

        dispatch({ type: 'LOGIN', payload: { name: faker.name.firstName(), sure: faker.name.lastName(), code: empcode } })
        setLoad(true);
        setTimeout(() => {
            navigate(`../${base}/helpdesk`);
        }, 2000);
    }
    const handleChangeEmpCode = (code: string) => {
        if (code.length > 5) {
            code = code.substring(0, 5);
        }
        setWarning(false);
        setEmpcode(code);
    }
    return (
        <div id='login' className='bg-[#5c5fc8] h-full w-full flex items-center justify-center'>
            <div className='flex items-center gap-[50px]'>
                <div id="logo">
                    {/* {logo} */}
                    <img src={logo} alt="" />
                </div>
                <div className='flex flex-col  select-none  items-start text-white'>
                    <span className='flex-none font-bold text-[36px]'>Connect your Helpdesk Account</span>
                    <span className='flex-none  mb-[36px]'>Clicking on 'Connect' will open the Help Desk System </span>
                    <div className='grow mb-[12px] flex flex-col gap-2'>
                        <input type="text" ref={refInp} className='transition-all duration-300 focus-visible:outline-[#5c5fc8] focus-visible:bg-[#f8f9fd] rounded-lg py-[10px] px-[16px] text-[#5c5fc8]  text-[24px] focus-visible:' placeholder='Enter Employee Code ...' autoFocus onChange={((e: ChangeEvent<HTMLInputElement>) => handleChangeEmpCode(e.target.value))} value={empcode} maxLength={5} />
                        {
                            warning && <Alert severity="error">Please enter a complete employee ID</Alert>
                        }
                    </div>
                    <div className={`flex-none flex items-center gap-3 bg-white text-[#5c5fc8] rounded-md px-[20px] py-[7px] cursor-pointer drop-shadow-2xl ${load ? '' : 'hover:scale-105 transition-all duration-300'}`} onClick={handleLogin}>
                        {
                            load && <Fade in={load}><CircularProgress size='16px' sx={{ color: '#5c5fc8' }} /></Fade>
                        }
                        <span>Connect</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LoginTest