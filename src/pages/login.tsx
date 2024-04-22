import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Login() {
  const redux = useSelector((state: any) => state.reducer);
  // @ts-ignore
  const login = redux.login;
  const dispatch = useDispatch();
  const [code, setCode] = useState<string>('');
  function handleLogin() {
    if (code.trim() != '') {
      dispatch({
        type: 'LOGIN', payload: {
          code: code,
          name: 'NAME',
          sure: 'SURE',
          login: true
        }
      });
    }
  }
  return (
    <div className='bg-whtie text-black flex justify-center items-center h-full w-full flex-col gap-6'>
      <div className='flex flex-col items-start w-full pl-[15%]'>
        <div className='flex gap-2'>
          <div className='flex items-center font-bold text-[3em] drop-shadow-lg' >
            <span className='text-[#108de7]'>HELP</span>
            <span className='text-red-500'>DESK</span>
          </div>
          <div className='flex items-center font-bold text-[12px]'>
            <span className='text-gray-500 text-[18px]'>IT</span>
          </div>
        </div>
        <div className='flex flex-col text-[1.5em] text-gray-600 leading-6 drop-shadow-lg'>
          <span>เราจะรบกวนแค่ครั้งนี้ ,</span>
          <span>เท่านั้นน้า</span>
        </div>
      </div>
      <div>
        <span className='text-gray-400'>กรุณาใส่รหัสผ่านของคุณ</span>
      </div>
      <div className='flex flex-col gap-1 px-[15%]'>
        <span className=' text-gray-400'>รหัสพนักงาน</span>
        <Input className='bg-gray-50 text-[48px] h-full text-center tracking-[12px]' placeholder='12345' value={code} onChange={(e) => setCode(e.target.value)} />
      </div>
      <div>
        <div className='bg-[#108de7] hover:bg-[#2196f3] cursor-pointer select-none transition-all duration-300 text-white px-6 py-3 rounded-lg shadow-md' onClick={handleLogin}>
          เข้าสู่ระบบ
        </div>
      </div>
    </div>
  )
}

export default Login