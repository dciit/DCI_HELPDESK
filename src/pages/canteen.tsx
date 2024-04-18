import { canteenMonitor } from '@/interface/canteen.interface';
import { API_GET_CANTEEN } from '@/service/canteen.service';
import { CircularProgress } from '@mui/material';
import  { useEffect, useState } from 'react'

function Canteen() {
    const [data, setData] = useState<canteenMonitor>();
    const [load, setLoad] = useState<boolean>(true);
    useEffect(() => {
        init();
    }, [])
    async function init() {
        let res: canteenMonitor = await API_GET_CANTEEN();
        setData(res);
    }
    useEffect(() => {
        console.log(data);
        if (data != null && Object.keys(data).length > 0) {
            setLoad(false);
        }
    }, [data])
    return (
        <div className='w-full h-full bg-black text-white canteen-page'>
            <div className='bg-gray-500 h-[10%] text-center flex justify-center items-center text-[3em] font-bold mb-[14px]'>
                DCI CANTEEN SYSTEM
            </div>
            {
                load ? <div className='flex w-full h-full justify-center items-center flex-col gap-2 text-[2em]'>
                    <CircularProgress />
                    <span>กำลังโหลดข้อมูล ...</span>
                </div> :
                    <div className='flex'>
                        <div className='flex-1'>
                            <table className='w-full bg-gray-500 '>
                                <tr>
                                    <td width={'33%'} className=' text-center text-[3em]'>ช่อง</td>
                                    <td width={'33%'} className=' text-center text-[3em]'>ยอดจัด</td>
                                    <td width={'33%'} className=' text-center text-[3em]'>ยอดจ่าย</td>
                                </tr>

                            </table>
                            <div className='bg-gray-500'>
                                {
                                    [...Array(7)].map((o: any, i: number) => {
                                        let slot: number = (i + 1);
                                        return <div className='text-[3em] flex flex-row justify-between'>
                                            <div className='text-center flex-1 flex justify-center items-center'>{slot}.</div>
                                            <div className='p-1 flex-1'>
                                                <div className='flex-1 num7 bg-black text-lime-400 text-[1.25em] text-right p-1'>
                                                    0
                                                </div>
                                            </div>
                                            <div className='p-1 flex-1'>
                                                <div className='flex-1 num7 bg-black text-red-500 text-[1.25em] text-right p-1'>
                                                    0
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <div className='w-[14px] bg-black'>
                            &nbsp;
                        </div>
                        <div className='flex-1 bg-gray-500 p-3 flex flex-col gap-9'>
                            <div className='flex flex-col gap-3'>
                                <div className=' font-bold flex w-full items-end pr-[5%] gap-3'>
                                    <span className='text-[3em] w-[20%]'>วันที่</span>
                                    <div className=' font-bold w-[60%] text-[4em] text-orange-500 bg-black rounded-sm px-3 num7 text-center'>{
                                        data?.serveDate
                                    }</div>
                                </div>
                                <div className=' font-bold flex w-full items-end pr-[5%] gap-3'>
                                    <span className='text-[3em] w-[20%]'>เวลา</span>
                                    <div className=' font-bold w-[60%] text-[4em] text-lime-500 bg-black rounded-sm px-3 num7 text-center'>
                                        {
                                            data?.serveTime
                                        }
                                    </div>
                                </div>
                                <div className=' font-bold flex w-full items-end pr-[5%] gap-3'>
                                    <span className='text-[3em] w-[20%]'>กะ</span>
                                    <div className=' font-bold w-[60%] text-[5em] text-red-500 bg-black rounded-sm px-3  text-center'>
                                        {
                                            data?.serveShift
                                        }
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span className='text-[3em]'>จำนวนพนักงาน</span>
                                    <div className='bg-black rounded-sm px-3 text-[5em] num7 text-lime-500 text-right'>
                                        {
                                            data?.totalEmployee
                                        }
                                    </div>
                                </div>
                                <div>
                                    <span className='text-[3em]'>ยอดการทานข้าว</span>
                                    <div className='bg-black rounded-sm px-3 text-[5em] num7 text-red-600 text-right'>
                                        {
                                            data?.totalServe.reduce((a: number, b: number) => {
                                                return a + b
                                            }, 0)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Canteen