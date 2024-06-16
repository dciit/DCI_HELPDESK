import { Avatar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
function Toolbar() {
    return (
        <div id='toolbar' className='h-[45px] flex flex-none items-center pl-[16px] pr-[8px] justify-between border-b border-[#e4e4e7]   gap-2'>
            <div className='flex-none'>
                <MenuIcon />
            </div>
            <div className='flex-none flex gap-1 items-center justify-end select-none cursor-pointer'>
                <div className='flex items-center bg-[#5c5fc8] px-3 py-[2px] rounded-sm'>
                    <span className='text-[#f7f9ff]'>HELPDESK</span>
                </div>
            </div>
            <div className='grow flex justify-end items-center gap-2'>
                <span className='text-[#7b85d9]'>12345</span>
                <Avatar sx={{ width: 30, height: 30 }} src='http://dcihrm.dci.daikin.co.jp/PICTURE/41179.JPG' />
            </div>
        </div>
    )
}

export default Toolbar