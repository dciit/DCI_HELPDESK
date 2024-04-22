import { Avatar } from '@mui/material'
function Toolbar() {
    return (
        <>
            <div className='px-2 py-2 flex justify-between shadow-md h-[5%]'>
                <div className='flex gap-1 items-center justify-end'>
                    <div className='flex items-center font-bold'>
                        <span className='text-[#108de7]'>HELP</span>
                        <span className='text-red-500'>DESK</span>
                    </div>
                    <span className='text-[12px]'>IT</span>
                </div>
                <div className='flex justify-end items-center gap-1'>
                    <span>12345</span>
                    <Avatar sx={{ width: 30, height: 30 }} src='http://dcihrm.dci.daikin.co.jp/PICTURE/41179.JPG' />
                </div>
            </div>
        </>
    )
}

export default Toolbar