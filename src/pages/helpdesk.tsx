import { Avatar, BottomNavigation, BottomNavigationAction, Box, Button, Divider } from '@mui/material'
import RestoreIcon from '@mui/icons-material/Restore';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import { useState } from 'react';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
export interface HelpdeskMenuProps {
    parent?: string;
    key: string;
    text: string;
    icon: any
    bgColor: string;
    textColor: string;
    active: boolean;
}
export interface HelpdeskDataProps {
    type?: string;
    choice?: string;
    factory?: number;
    location?: string;
    tel?: string;
    phone?: string;
}
function Helpdesk() {
    const [value, setValue] = useState<number>(1);
    const [step, setStep] = useState<number>(0);
    const [data, setData] = useState<HelpdeskDataProps>({});
    const menuType = [{ key: 'workorder', text: 'แจ้งซ่อม', icon: <RestoreIcon />, bgColor: 'bg-[#ef5350]', textColor: 'text-[#f7f9ff]', active: true }, { key: 'repair', text: 'เบิกอุปกรณ์', icon: <DrawOutlinedIcon />, bgColor: 'bg-[#4caf50]', textColor: 'text-[#f7f9ff]', active: true }]

    const menuChoice = [
        { parent : 'workorder',key: 'andnoboard', text: 'Andno board', icon: <DrawOutlinedIcon />, bgColor: 'bg-[#4caf50]', textColor: 'text-[#f7f9ff]', active: true },
        { parent : 'workorder',key: 'mpck', text: 'ตู้เช็คอิน', icon: <DrawOutlinedIcon />, bgColor: 'bg-[#4caf50]', textColor: 'text-[#f7f9ff]', active: true },
        { parent : 'workorder',key: 'ตู้เบิกพ', text: 'ตู้เช็คอิน', icon: <DrawOutlinedIcon />, bgColor: 'bg-[#4caf50]', textColor: 'text-[#f7f9ff]', active: true }
    ]
    const handleClickType = async (type: string) => {
        setData({ ...data, type: type })
        setStep(1)
    }
    return <div className='flex flex-col h-full'>

        <div className='p-6 flex grow flex-col gap-4'>
            <div className='text-[#44468f] flex-none tracking-wide'>เลือกรายการที่ต้องการให้เราช่วยเหลือ</div>
            <div className='grow flex gap-2 flex-col '>
                {
                    JSON.stringify(data)
                }
                {
                    step == 0 && menuType.map((oType: HelpdeskMenuProps, i: number) => {
                        return <div className={`${oType.bgColor}  ${oType.textColor} rounded-md tracking-wide px-[12px] py-[12px] text-center  shadow-md text-[20px] select-none cursor-pointer drop-shadow-lg`} key={i} onClick={() => handleClickType(oType.key)}>{oType.text}</div>
                    })
                }
                {
                    step == 1 && menuChoice.filter((oType: HelpdeskMenuProps) => (oType.parent == data.type)).map((oType: HelpdeskMenuProps, i: number) => {
                        return <div className={`${oType.bgColor}  ${oType.textColor} rounded-md tracking-wide px-[12px] py-[12px] text-center  shadow-md text-[20px] select-none cursor-pointer drop-shadow-lg`} key={i}>{oType.text}</div>
                    })
                }
                {
                    step == 2 && menuType.map((oType: HelpdeskMenuProps, i: number) => {
                        return <div className={`${oType.bgColor}  ${oType.textColor} rounded-md tracking-wide px-[12px] py-[12px] text-center  shadow-md text-[20px] select-none cursor-pointer drop-shadow-lg`} key={i}>{oType.text}</div>
                    })
                }
                {
                    step == 3 && menuType.map((oType: HelpdeskMenuProps, i: number) => {
                        return <div className={`${oType.bgColor}  ${oType.textColor} rounded-md tracking-wide px-[12px] py-[12px] text-center  shadow-md text-[20px] select-none cursor-pointer drop-shadow-lg`} key={i}>{oType.text}</div>
                    })
                }
            </div>
        </div>
        <div className='flex-none border-t'>
            <Box >
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="ติดตามงาน" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="กำลังทำ" icon={<DrawOutlinedIcon />} />
                    <BottomNavigationAction label="ติดต่อเรา" icon={<PhoneOutlinedIcon />} />
                </BottomNavigation>
            </Box>
        </div>
    </div>

}

export default Helpdesk