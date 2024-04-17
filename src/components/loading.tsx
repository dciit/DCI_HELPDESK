import { CircularProgress } from '@mui/material'
function Loading() {
    return (
        <div className='flex flex-col justify-center items-center gap-2 h-full'>
            <CircularProgress/>
            <span>กำลังโหลดข้อมูล</span>
        </div>
    )
}

export default Loading