import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import MuiButton from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useEffect, useState } from 'react';
import '../css/workorder.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// @ts-ignore
import { MLocation, MResultWorkorder, MWorkorderItemList, MWorkorderList } from '@/interface';
// @ts-ignore
import { Grid } from '@mui/material';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import alpha from '../assets/Alpha.png'

export default function account() {
    const mapStep = 2;
    // @ts-ignore
    const [result, setResult] = useState<MResultWorkorder>({});
    const [page, setPage] = useState<number>(0);
    const theme = useTheme();
    const handleNext = () => {
        setPage((prevPage) => prevPage + 1);
    };
    const [step, setStep] = useState<MWorkorderList>({
        label: 'รายการ',
        list: [
            { text: 'ALPHA SYSTEM', active: true },
            { text: 'On-line Request Forms', active: false },
            // { text: 'WMS (FG Warehouse)', active: false },
            // { text: 'DCI-ALPHA WEB', active: false },
            //{ text: 'Andon Board', active: false },
            // { text: 'Backflush System', active: false },
            // { text: 'Scrap Management System', active: false },
            // { text: 'Supplier Car Control', active: false },
            // { text: 'Delivery Order', active: false },
            // { text: 'Compressor Rework', active: false },
            // { text: 'ECR Online', active: false },
            // { text: 'UKEHARAI', active: false },
        ]
    });
    const handleTypeActive = (iActive: number) => {
        let clone = step;
        clone.list.map((oStep: MWorkorderItemList, iStep: number) => {
            oStep.active = iStep == iActive ? true : false;
        });
        setStep({ ...clone })
    }
    const handleBack = () => {
        setPage((prevPage) => prevPage - 1);
    };
    useEffect(() => {
        console.log(result)
    }, [result])
    return (
        <div className='h-[100%] max-w-[400px] flex-grow-1 flex flex-col justify-between'>
            <div className='p-6'>
                <div className='flex flex-col mb-4'>
                    <span className='text-[#f5559a] font-semibold text-[20px]'>แจ้งปัญหาเกี่ยวกับระบบ</span>
                </div>
                <div className='flex flex-col gap-3'>
                    {
                        page == 0 && <>
                            <span className='text-[16px]'>กรุณาเลือก<span className='text-red-500 '>  "รายการ"</span></span>
                            {
                                step.list.map((o: MWorkorderItemList, i: number) => {
                                    if (o.text == "ALPHA SYSTEM") {
                                        return <div key={i} className={`transition-all duration-500 flex  pl-3 gap-2 uppercase px-3 py-2 rounded-[12px]  border text-center   ${o.active == true ? 'bg-[#108de7] text-white font-bold' : 'bg-white text-[#092848]'}`} onClick={() => handleTypeActive(i)}>
                                            {
                                                o.active && <CheckCircleOutlineIcon />
                                            }
                                            <span>{o.text}</span>
                                            <img className='size-7 relative left-20' src={alpha} alt="alpha" />
                                        </div>
                                    }
                                    else {
                                        return <div key={i} className={`transition-all duration-500 flex  pl-3 gap-2 uppercase px-3 py-2 rounded-[12px]  border text-center   ${o.active == true ? 'bg-[#108de7] text-white font-bold' : 'bg-white text-[#092848]'}`} onClick={() => handleTypeActive(i)}>
                                            {
                                                o.active && <CheckCircleOutlineIcon />
                                            }
                                            <span>{o.text}</span>
                                            {/* <img className='size-7' src={pichon} alt="pichon" /> */}
                                        </div>
                                    }
                                })
                            }
                        </>
                    }
                    {
                        page == 1 && <div className='flex flex-col gap-3'>
                            <div className=''>
                                <span>รายละเอียดเพิ่มเติม</span>
                                <Textarea placeholder='ระบุหมายเหตุเพิ่มเติมได้ที่นี่ ...'></Textarea>
                            </div>
                            <div className='flex gap-1 flex-col'>
                                <span>เบอร์ติดต่อ</span>
                                <Input type='number' placeholder='ระบุหมายเหตุเพิ่มเติมได้ที่นี่ ...'></Input>
                            </div>
                            <div className='w-full mt-3 flex items-center justify-center'>
                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ยืนยัน <q>แจ้งปัญหา</q></button>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <MobileStepper
                variant="text"
                steps={mapStep}
                position="static"
                activeStep={page}
                nextButton={
                    <MuiButton
                        size="small"
                        onClick={handleNext}
                        disabled={page === mapStep - 1}
                    >
                        ถัดไป
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </MuiButton>
                }
                backButton={
                    <MuiButton size="small" onClick={handleBack} disabled={page === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        กลับ
                    </MuiButton>
                }
            />
        </div>
    );
}