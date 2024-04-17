import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import MuiButton from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Suspense, useContext, useEffect, useState } from 'react';
import '../css/workorder.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { MLocation, MResultWorkorder, MTheme, MWorkorderItemList, MWorkorderList } from '@/interface';
import { Grid } from '@mui/material';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { ThemeContext } from '@/main';
import Loading from '@/components/loading';
export default function Workorder() {
    // const appname = import.meta.env.VITE_APPNAME;
    const context = useContext(ThemeContext);
    const theme = context.themelight;
    const mapStep = 3;
    const [result, setResult] = useState<MResultWorkorder>({});
    const [locations] = useState<MLocation[]>([
        { dictId: '0', text: 'ออฟฟิศชั้น 2' },
        { dictId: '1', text: 'Main L7' },
        { dictId: '2', text: 'MECHA L7' },
    ]);
    const [page, setPage] = useState<number>(0);
    const [load, setLoad] = useState<boolean>(true);
    const action = useTheme();
    const handleNext = () => {
        setPage((prevPage) => prevPage + 1);
    };
    const [step, setStep] = useState<MWorkorderList>({
        label: 'รายการ',
        list: [
            { text: 'Andonboard', active: true },
            { text: 'จอมอนิเตอร์', active: false },
            { text: 'Kiosk', active: false },
        ]
    });
    const handleTypeActive = (iActive: number) => {
        let clone = step;
        clone.list.map((oStep: MWorkorderItemList, iStep: number) => {
            oStep.active = iStep == iActive ? true : false;
        });
        setStep({ ...clone })
    }
    const handleFacActive = (fac: number) => {
        setResult({ ...result, fac: fac })
    }
    const handleLocationActive = (dictId: string) => {
        setResult({ ...result, location: dictId })
    }
    const handleBack = () => {
        setPage((prevPage) => prevPage - 1);
    };
    useEffect(() => {
        if (theme != undefined && Object.keys(theme).length) {
            console.log(theme)
            setLoad(false);
        }
    }, [theme]);
    return (
        <div className='h-[100%] max-w-[400px] flex-grow-1 flex flex-col justify-between'>
            {
                load ? <Loading /> : <>
                    <div className='p-6 flex flex-col gap-6'>
                        <div className='flex flex-col'>
                            <span className={`${theme?.textTitleColor} text-[3em]`}>แจ้งซ่อม</span>
                            <span className={`${theme?.textContentColor} text-[14px]`}>ปัญหาของคุณคืออะไรเลือกมาได้เลย  ...</span>
                        </div>
                        {/* <div className='flex flex-col mb-4'>
                            <span>เลือก <span className='text-red-500'>"รายการ"</span> ที่ต้องการแจ้งซ่อม</span>
                        </div> */}
                        <div className='flex flex-col gap-3'>
                            {
                                page == 0 && step.list.map((o: MWorkorderItemList, i: number) => {
                                    return <div key={i} className={`transition-all duration-500 flex  pl-3 gap-2 uppercase px-3 py-2 rounded-[12px]  border text-center   ${o.active == true ? 'bg-[#108de7] text-white font-bold' : 'bg-white text-[#092848]'}`} onClick={() => handleTypeActive(i)}>
                                        {
                                            o.active && <CheckCircleOutlineIcon />
                                        }
                                        <span>{o.text}</span>
                                    </div>
                                })
                            }
                            {
                                page == 1 && <div className='flex flex-col gap-1'>
                                    <div className='flex flex-col gap-2 mb-3'>
                                        <span className='font-bold'>โรงงาน</span>
                                        <div className='flex justify-around'>
                                            {
                                                [...Array(3)].map((oFac: any, iFac: number) => {
                                                    let fac = (iFac + 1).toLocaleString('en');
                                                    return <div key={(oFac + '' + iFac)} className={`transition-all text-[18px] duration-500 flex gap-2 uppercase p-3 rounded-full w-16 h-16 justify-center items-center border text-center   ${(result.fac != undefined && result.fac == (iFac + 1)) ? 'bg-[#108de7] text-white font-bold' : 'bg-white text-[#092848]'}`} onClick={() => handleFacActive(Number(fac))}>
                                                        <span>{fac}</span>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <span className='font-bold'>พื้นที่</span>
                                        <Grid container spacing={1}>
                                            {
                                                locations.map((oLocation: MLocation, iLocation: number) => {
                                                    return <Grid item>
                                                        <div key={iLocation} className={` transition-all  border  duration-500 flex uppercase p-3 rounded-[8px] justify-center items-center  text-center w-fit   ${(result.location != undefined && result.location == oLocation.dictId) ? 'bg-[#108de7] text-white font-bold' : 'bg-white text-[#092848]'}`} onClick={() => handleLocationActive(oLocation.dictId)}>
                                                            <span className='overflow-hidden truncate '>{oLocation.text}</span>
                                                        </div>
                                                    </Grid>
                                                })
                                            }
                                        </Grid>
                                    </div>
                                </div>
                            }
                            {
                                page == 2 && <div className='flex flex-col gap-3'>
                                    <div className=''>
                                        <span>รายละเอียดเพิ่มเติม</span>
                                        <Textarea placeholder='ระบุหมายเหตุเพิ่มเติมได้ที่นี่ ...'></Textarea>
                                    </div>
                                    <div className='flex gap-1 flex-col'>
                                        <span>เบอร์ติดต่อ</span>
                                        <Input type='number' placeholder='ระบุหมายเหตุเพิ่มเติมได้ที่นี่ ...'></Input>
                                    </div>
                                    <div className='w-full mt-3 flex items-center justify-center'>
                                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ยืนยัน <q>แจ้งซ่อม</q></button>
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
                                {action.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </MuiButton>
                        }
                        backButton={
                            <MuiButton size="small" onClick={handleBack} disabled={page === 0}>
                                {action.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                                กลับ
                            </MuiButton>
                        }
                    />
                </>
            }
        </div>
    );
}