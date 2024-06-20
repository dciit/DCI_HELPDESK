import { Avatar, BottomNavigation, BottomNavigationAction, Box, Button, Divider, MobileStepper, Paper, Typography, useTheme } from '@mui/material'
import RestoreIcon from '@mui/icons-material/Restore';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import { useState } from 'react';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
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
    factory?: string;
    location?: string;
    tel?: string;
    phone?: string;
}

const steps = [
    {
        label: 'Select campaign settings',
        description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
        label: 'Create an ad group',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        label: 'Create an ad',
        description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
];
function Helpdesk() {
    const theme = useTheme();
    const [value, setValue] = useState<number>(1);
    const [step, setStep] = useState<number>(0);
    const [data, setData] = useState<HelpdeskDataProps>({});
    const [activeStep, setActiveStep] = useState<number>(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        let ActiveStepCurrent = activeStep - 1;
        if(ActiveStepCurrent == 0){
            setData({...data,type:'',choice:''})
        }
        setActiveStep(ActiveStepCurrent);
    };
    const menuType = [{ key: 'workorder', text: 'แจ้งซ่อม', icon: <RestoreIcon />, bgColor: 'bg-[#ef5350]', textColor: 'text-[#f7f9ff]', active: true }, { key: 'repair', text: 'เบิกอุปกรณ์', icon: <DrawOutlinedIcon />, bgColor: 'bg-[#4caf50]', textColor: 'text-[#f7f9ff]', active: true }]

    const menuChoice = [
        { parent: 'workorder', key: 'andnoboard', text: 'AndnoBoard', icon: <DrawOutlinedIcon />, bgColor: 'bg-[#4caf50]', textColor: 'text-[#f7f9ff]', active: true },
        { parent: 'workorder', key: 'mpck', text: 'ตู้เช็คอิน', icon: <DrawOutlinedIcon />, bgColor: 'bg-[#4caf50]', textColor: 'text-[#f7f9ff]', active: true },
        { parent: 'workorder', key: 'kiosk', text: 'ตู้ KIOSK', icon: <DrawOutlinedIcon />, bgColor: 'bg-[#4caf50]', textColor: 'text-[#f7f9ff]', active: true }
    ]
    const handleClickType = async (type: string) => {
        setData({ ...data, type: type })
        setActiveStep((prev)=>prev+1)
    }
    return <div className='flex flex-col h-full'>

        <div className='p-6 flex flex-none flex-col gap-4'>
            <div className='text-[#44468f] flex-none tracking-wide'>เลือกรายการที่ต้องการให้เราช่วยเหลือ</div>
            <div>
                {
                    Object.keys(data).map((oData: string, i: number) => {
                        return <div key={i} className='text-white bg-[#5c5fc8] w-fit px-[4px] rounded-lg pt-[3px] pb-[2px]' >{data[oData]}</div>
                    })
                }
            </div>
        </div>
        <div className='grow flex flex-col'>
            <div className='grow flex flex-col gap-3 px-6'>
                {
                    activeStep == 0 && menuType.map((oType: HelpdeskMenuProps, i: number) => {
                        return <div className={`${oType.bgColor}  ${oType.textColor} rounded-md tracking-wide px-[12px] py-[12px] text-center  shadow-md text-[20px] select-none cursor-pointer drop-shadow-lg`} key={i} onClick={() => handleClickType(oType.key)}>{oType.text}</div>
                    })
                }
                {
                    activeStep == 1 && menuChoice.filter((oType: HelpdeskMenuProps) => (oType.parent == data.type)).map((oType: HelpdeskMenuProps, i: number) => {
                        return <div className={`${oType.bgColor}  ${oType.textColor} rounded-md tracking-wide px-[12px] py-[12px] text-center  shadow-md text-[20px] select-none cursor-pointer drop-shadow-lg`} key={i} onClick={() => setData({ ...data, choice: oType.key })}>{oType.text}</div>
                    })
                }
                {
                    activeStep == 2 && menuType.map((oType: HelpdeskMenuProps, i: number) => {
                        return <div className={`${oType.bgColor}  ${oType.textColor} rounded-md tracking-wide px-[12px] py-[12px] text-center  shadow-md text-[20px] select-none cursor-pointer drop-shadow-lg`} key={i}>{oType.text}</div>
                    })
                }
                {
                    activeStep == 3 && menuType.map((oType: HelpdeskMenuProps, i: number) => {
                        return <div className={`${oType.bgColor}  ${oType.textColor} rounded-md tracking-wide px-[12px] py-[12px] text-center  shadow-md text-[20px] select-none cursor-pointer drop-shadow-lg`} key={i}>{oType.text}</div>
                    })
                }
            </div>
            <div className='flex-none border-t'>
                <MobileStepper
                    variant="text"
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={(activeStep == 0 && data.type == '') || (activeStep == 1 && data.choice == '') || (activeStep == 2 && data.factory == '')}
                        >
                            ถัดไป
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            ย้อนกลับ
                        </Button>
                    }
                />
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