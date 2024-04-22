// @ts-ignore
import { canteenInfo, canteenMonitor, canteenParamInfo, canteenSummary } from '@/interface/canteen.interface';
import { API_POST_CANTEEN, API_POST_CANTEEN_SERVE } from '@/service/canteen.service';
import { Button, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react'
// @ts-ignore
import MuiButton from '@mui/material/Button';
import { Input } from '@/components/ui/input';
import moment from 'moment'
import Swal from 'sweetalert2'

function Canteen() {
    const [data, setData] = useState<canteenSummary>();
    const [load, setLoad] = useState<boolean>(true);
    const [prepareVal1, setPrepareVal1] = useState('0');
    const [prepareVal2, setPrepareVal2] = useState('0');
    const [prepareVal3, setPrepareVal3] = useState('0');
    const [prepareVal4, setPrepareVal4] = useState('0');
    const [prepareVal5, setPrepareVal5] = useState('0');
    const [prepareVal6, setPrepareVal6] = useState('0');
    const [prepareVal7, setPrepareVal7] = useState('0');
    const [timeShow, setTimeShow] = useState('');

    useEffect(() => {

        setInterval(() => {
            init();

            setTimeShow(moment().format('HH:mm'))

        }, 10000);
    }, [])
    async function init() {

        let param: canteenParamInfo;
        param = {
            dateShift: moment(new Date()).add(-8, 'hours').format('YYYY-MM-DD'),
            shift: (moment(new Date()).add(-8, 'hours').hour() >= 0 && moment(new Date()).add(-8, 'hours').hour() < 12) ? 'D' : 'N'
        }

        let res: canteenSummary = await API_POST_CANTEEN(param);
        setData(res);

        setPrepareVal1(res?.data.totalPrepare1!);
        setPrepareVal2(res?.data.totalPrepare2!);
        setPrepareVal3(res?.data.totalPrepare3!);
        setPrepareVal4(res?.data.totalPrepare4!);
        setPrepareVal5(res?.data.totalPrepare5!);
        setPrepareVal6(res?.data.totalPrepare6!);
        setPrepareVal7(res?.data.totalPrepare7!);
    }
    useEffect(() => {

        if (data != null && Object.keys(data).length > 0) {
            setLoad(false);
        }

    }, [data])

    const updateServe = (i: number, value: string) => {
        const val = value.replace(/\D/g, "");
        switch (i) {
            case 1: setPrepareVal1(val); break;
            case 2: setPrepareVal2(val); break;
            case 3: setPrepareVal3(val); break;
            case 4: setPrepareVal4(val); break;
            case 5: setPrepareVal5(val); break;
            case 6: setPrepareVal6(val); break;
            case 7: setPrepareVal7(val); break;
        }
    }



    const InsertPrepared = async () => {
        const param: canteenInfo = await {
            dataShift: moment(new Date()).add(-8, 'hours').format('YYYY-MM-DD'),
            shift: (moment(new Date()).add(-8, 'hours').hour() >= 0 && moment(new Date()).add(-8, 'hours').hour() < 12) ? 'D' : 'N',
            totalEmployee: '',
            muId1: '1',
            totalPrepare1: prepareVal1,
            totalServe1: '',
            muId2: '2',
            totalPrepare2: prepareVal2,
            totalServe2: '',
            muId3: '3',
            totalPrepare3: prepareVal3,
            totalServe3: '',
            muId4: '4',
            totalPrepare4: prepareVal4,
            totalServe4: '',
            muId5: '5',
            totalPrepare5: prepareVal5,
            totalServe5: '',
            muId6: '6',
            totalPrepare6: prepareVal6,
            totalServe6: '',
            muId7: '7',
            totalPrepare7: prepareVal7,
            totalServe7: '',
        }
        // @ts-ignore
        let res: canteenSummary = await API_POST_CANTEEN_SERVE(param);

        Swal.fire({
            icon: "success",
            title: "บันทึกเสร็จสิ้นเรียบร้อยแล้ว",
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            init();
        });

    };

    return (
        <div className='w-full h-full bg-black text-white canteen-page'>
            <div className='bg-gray-500 h-[10%] text-center flex justify-center items-center text-[3em] font-bold mb-[14px]'>
                DCI CANTEEN SYSTEM   &nbsp; &nbsp;
                <Button variant="contained" color="success" disableElevation onClick={InsertPrepared}>
                    <h2>Update ยอดจัด</h2>
                </Button>
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
                                {   // @ts-ignore
                                    [...Array(7)].map((o: any, i: number) => {
                                        let slot: number = (i + 1);
                                        let _prepare: string = '';
                                        let _serve: string = '';
                                        if (slot == 1) {
                                            _prepare = prepareVal1;
                                            _serve = data?.data.totalServe1!;
                                        }
                                        else if (slot == 2) {
                                            _prepare = prepareVal2;
                                            _serve = data?.data.totalServe2!;
                                        }
                                        else if (slot == 3) {
                                            _prepare = prepareVal3;
                                            _serve = data?.data.totalServe3!;
                                        }
                                        else if (slot == 4) {
                                            _prepare = prepareVal4;
                                            _serve = data?.data.totalServe4!;
                                        }
                                        else if (slot == 5) {
                                            _prepare = prepareVal5;
                                            _serve = data?.data.totalServe5!;
                                        }
                                        else if (slot == 6) {
                                            _prepare = prepareVal6;
                                            _serve = data?.data.totalServe6!;
                                        }
                                        else if (slot == 7) {
                                            _prepare = prepareVal7;
                                            _serve = data?.data.totalServe7!;
                                        }

                                        return <div key={i} className='text-[3em] flex flex-row justify-between'>
                                            <div className='text-center flex-1 flex justify-center items-center'>{slot}.</div>
                                            <div className='p-1 flex-1'>
                                                <div className='flex-1 num7 bg-black text-lime-300 text-[1.25em] text-right p-1'>
                                                    <Input className='flex-1 num7 bg-black text-lime-300 text-[0.90em] text-right p-1 h-[90px] '
                                                        onChange={(event) => updateServe(slot, event.target.value)}
                                                        maxLength={3} value={_prepare} ></Input>
                                                </div>
                                            </div>
                                            <div className='p-1 flex-1'>
                                                <div className='flex-1 num7 bg-black text-green-600 text-[1.25em] text-right p-1'>
                                                    {_serve}
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
                                    <div className=' font-bold w-[60%] text-[4em] text-yellow-300 bg-black rounded-sm px-3 num7 text-center'>
                                        {
                                            data?.data.dataShift
                                        }
                                    </div>
                                </div>
                                <div className=' font-bold flex w-full items-end pr-[5%] gap-3'>
                                    <span className='text-[3em] w-[20%]'>เวลา</span>
                                    <div className=' font-bold w-[60%] text-[4em] text-yellow-300 bg-black rounded-sm px-3 num7 text-center'>
                                        {
                                            timeShow
                                        }
                                    </div>
                                </div>
                                <div className=' font-bold flex w-full items-end pr-[5%] gap-3'>
                                    <span className='text-[3em] w-[20%]'>กะ</span>
                                    <div className=' font-bold w-[60%] text-[4em] text-yellow-300 bg-black rounded-sm px-3 text-center'>
                                        {
                                            data?.data.shift
                                        }
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span className='text-[3em]'>จำนวนพนักงาน</span>
                                    <div className='bg-black rounded-sm px-3 text-[5em] num7 text-lime-400 text-right'>
                                        {
                                            data?.data.totalEmployee
                                        }
                                    </div>
                                </div>
                                <div>
                                    <span className='text-[3em]'>ยอดการทานข้าว</span>
                                    <div className='bg-black rounded-sm px-3 text-[5em] num7 text-green-600 text-right'>
                                        {
                                            // data?.totalServe.reduce((a: number, b: number) => {
                                            //     return a + b
                                            // }, 0)
                                            (Number(data?.data.totalServe1) +
                                                Number(data?.data.totalServe2) +
                                                Number(data?.data.totalServe3) +
                                                Number(data?.data.totalServe4) +
                                                Number(data?.data.totalServe5) +
                                                Number(data?.data.totalServe6) +
                                                Number(data?.data.totalServe7))
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