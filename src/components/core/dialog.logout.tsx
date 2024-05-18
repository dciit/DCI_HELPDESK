import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import { MLogout } from '@/interface/core.interface'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { base } from '@/constant'
function DialogLogout(props: MLogout) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const redx = useSelector((state: any) => state.core);
    const { open, close } = props;
    useEffect(() => {
        if (open) {

        }
        if(redx.login == false){
            navigate(`../${base}/login`);
        }   
    }, [open,redx]);
    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
    }
    return (
        <Dialog open={open} onClose={() => close(false)} fullWidth maxWidth={'sm'} >
            <DialogTitle >
                <div className='flex gap-2 flex-row items-center'>
                    <div className='rounded-full bg-[#5c5fc8] text-[#fff]  w-[36px] h-[36px] flex items-center justify-center'>
                        <ExitToAppOutlinedIcon sx={{ fontSize: '20px' }} />
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[18px]'>Logout</span>
                        <span className='text-[12px] text-[#939393]'>ออกจากระบบ</span>
                    </div>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                <p>You are about to log out from your account. Logging out will end your current session, and you will need to log in again to access your account. Are you sure you want to proceed with logging out?</p>
            </DialogContent>
            <DialogActions >
                <div className='flex gap-2 py-[14px]'>
                    <div className='cursor-pointer select-none' onClick={()=>close(false)}>
                        <span className='border px-[16px] pt-[6px] pb-[8px] rounded-md'>Close</span>
                    </div>
                    <div className='cursor-pointer select-none' onClick={handleLogout}>
                        <span className=' drop-shadow-xl px-[16px] pt-[6px] pb-[8px] rounded-md bg-[#5c5fc8] text-white'>Confirm</span>
                    </div>
                </div>
            </DialogActions>
        </Dialog>
    )
}

export default DialogLogout