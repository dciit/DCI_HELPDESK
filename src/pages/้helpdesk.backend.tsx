import { Avatar, Button, Divider } from '@mui/material'
import { faker } from '@faker-js/faker';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import AirplayOutlinedIcon from '@mui/icons-material/AirplayOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import moment from 'moment';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BrightnessHighOutlinedIcon from '@mui/icons-material/BrightnessHighOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { bgColor } from '@/constant';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useEffect, useState } from 'react';
import DialogLogout from '@/components/core/dialog.logout';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import { MFilterDate, MFilterProgress } from '@/interface/helpdesk.interface';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
function Management() {
    const today = moment();
    const day: string = moment().format('DD');
    const month: string = moment().format('MMM');
    const dddd: string = moment().format('dddd');
    const textColor: string = '#5c5fc8';
    const icons: any[] = [<AccessAlarmOutlinedIcon />, <AirplayOutlinedIcon />, <AssessmentOutlinedIcon />];
    const [openLogout, setOpenLogout] = useState<boolean>(false);
    const [openFilter, setOpenFilter] = useState<boolean>(false);
    const [progresss, setProgresss] = useState<MFilterProgress[]>([{ text: 'Request', check: false }, { text: 'Accepted', check: false }, { text: 'Completed', check: false }]);
    const [days, setDays] = useState<MFilterDate[]>([{ text: 'Today', check: true }, { text: 'Last Week', check: false }, { text: 'Last Month', check: false }]);
    const [counterFilter,setCounterFilter] = useState<number>(1);
    useEffect(()=>{
        let cFilter = 1;
        progresss.map((o:MFilterProgress)=>{
            cFilter += (o.check == true ? 1 : 0);
        })
        setCounterFilter(cFilter);
    },[counterFilter,progresss])
    const handleCheckFilterStatus = (indexProgress: number) => {
        let cloneProgresss = progresss;
        cloneProgresss[indexProgress].check = !cloneProgresss[indexProgress].check;
        setProgresss([...cloneProgresss]);
    }
    const handleCheckFilterDate = (index: number) => {
        let cloneDays = days;
        cloneDays[index].check = !cloneDays[index].check;
        cloneDays.map((o: MFilterDate, i: number) => {
            o.check = i == index ? true : false;
        })
        setDays([...cloneDays]);
    }

    const handleSearch = () => {
        setOpenFilter(false);
    }
    return (
        <div className='h-[100%] flex flex-row' id='helpdesk'>
            <div id="nav" className=' w-[150px] flex items-center flex-col pt-6 gap-6 h-full border-r border-r-[#ddd]  '>
                <div className='flex flex-col flex-none items-center'>
                    <Avatar className='shadow-lg' src='http://dcidmc.dci.daikin.co.jp/PICTURE/41256.jpg' />
                    <span className={`text-[${textColor}] font-semibold drop-shadow-lg select-none`}>P.K</span>
                </div>
                <div id="nav-menu" className='grow'>
                    {
                        icons.map((oIcon: any, i: number) => {
                            return <div key={i} className='text-black text-center py-2 select-none cursor-pointer hover:text-[#5c5fc8] duration-300 transition-all hover:scale-105'>
                                <div id="icon">{oIcon}</div>
                                <span className='text-[1em]'>{faker.name.firstName().substring(0, 4)}</span>
                            </div>
                        })
                    }
                </div>
                <div id='logout' className=' flex-col h-[100px] border-t w-full flex items-center justify-between text-[#8b8b8b]'>
                    <div className='flex items-center justify-center border-b flex-1 w-full'>
                        <SettingsOutlinedIcon className='hover:scale-105 transition-all duration-500 cursor-pointer select-none' />
                    </div>
                    <div className='flex items-center justify-center flex-1 w-full' onClick={() => setOpenLogout(true)}>
                        <ExitToAppOutlinedIcon className='hover:scale-105 transition-all duration-500 cursor-pointer select-none' />
                    </div>
                </div>
            </div>
            <div id='listHelpdesk' className='border-r flex flex-col'>
                <div id='calendar' className='flex-none w-full  pt-3'>
                    <div id="calendar " className='flex flex-col gap-2 px-6 border-b pb-5'>
                        <span className='font-semibold'>December</span>
                        <div id="search" className='flex gap-1'>
                            <input type="text" className='bg-[#ddd] rounded-sm pl-3 py-1' placeholder='Search' />
                            <div className='bg-[#ddd] w-fit rounded-sm px-2 py-1 text-[#575757]'>
                                <KeyboardVoiceOutlinedIcon />
                            </div>
                        </div>
                        <div >
                            <div className='flex justify-around w-full'>
                                {
                                    [...Array(7)].map((oDay: string, iDay: number) => {
                                        return <div className='text-[rgb(189,189,189)]'>{moment().add('days', iDay).format('dd').substring(0, 2)}</div>
                                    })
                                }
                            </div>
                            <div className='flex justify-around w-full select-none cursor-pointer'>
                                {
                                    [...Array(7)].map((oDay: string, iDay: number) => {
                                        let dayLoop = moment().add('days', iDay).format('DD');
                                        return day == dayLoop ? <div className={`w-[30px] h-[30px] text-[${textColor}] rounded-full flex  justify-center items-center bg-[#5c5fc835] border-[#5c5fc810] font-semibold border`}>
                                            {dayLoop}
                                        </div> : <div className={`w-[30px] h-[30px]  rounded-full flex  justify-center items-center text-[#7e7e7e]  font-semibold`}>
                                            {dayLoop}
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div id="list" className='grow px-6 pt-3 flex flex-col gap-[16px]'>
                    <div className='flex flex-col  gap-3 items-center'>
                        <div className='flex  gap-3 items-center'>
                            <div className='flex gap-1 font-bold text-[#5a5a5a] flex-none'>
                                <span>{month.toUpperCase()}</span>
                                <span>{day}</span>
                            </div>
                            <span className='grow'>{dddd}</span>
                            <span className='text-[#5c5fc8] bg-[#5c5fc810] px-3 py-1 rounded-lg border border-[#5c5fc850]'>Today</span>
                            <div>
                                <div className="flex items-center justify-center">
                                    <span className="relative inline-flex">
                                        <div className={`select-none text-[#8b8b8b] bg-[#8b8b8b10] px-3 py-1 rounded-lg border border-[#5c5fc850] flex gap-1 cursor-pointer hover:text-black transition-all duration-300 ${counterFilter > 1 ? 'border-[#b8baf8]' : ''}`} onClick={() => setOpenFilter(!openFilter)}>

                                            <TuneOutlinedIcon size='14px'  className={`${counterFilter > 1 ? 'text-[#979ae9]' : ''}`}/>
                                            <span className={`${counterFilter > 1 ? 'text-[#5c5fc8]' : ''}`}>Filter</span>
                                        </div>
                                        {
                                            counterFilter > 1 &&   <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5c5fc8] opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5c5fc8]"></span>
                                        </span>
                                        }
                                    </span>
                                </div>

                            </div>
                        </div>
                        {
                            openFilter && <div className=' w-full rounded-md shadow-sm p-6 flex flex-col gap-6 border-2 border-[#5c5fc8] bg-[#5c5fc805]'>
                                <div className='flex items-start gap-2'>
                                    <span>Date</span>
                                    <div id='item-progress' className='flex flex-wrap gap-2 items-start'>
                                        {
                                            days.map((oDay: MFilterDate, iDay: number) => {
                                                return <div key={iDay} className={`cursor-pointer select-none border px-2 py-1  rounded-lg flex items-center gap-1 ${oDay.check == true ? 'text-[#5c5fc8] font-semibold border-[#5c5fc8]' : ''}`} onClick={() => handleCheckFilterDate(iDay)}>
                                                    {
                                                        oDay.check && <CheckOutlinedIcon size='8px' />
                                                    }
                                                    <span>{oDay.text}</span>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>

                                <div className='flex items-start gap-2'>
                                    <div className='w-fit flex-none flex gap-1 '>
                                        <span>Progress</span>
                                        <span className='text-red-600'>{progresss.filter((o: MFilterProgress) => o.check == true).length ? `(${progresss.filter((o: MFilterProgress) => o.check == true).length})` : ''}</span>
                                    </div>
                                    <div id='item-progress' className='grow flex flex-wrap gap-2 items-start'>
                                        {
                                            progresss.map((oProgress: MFilterProgress, iProgress: number) => {
                                                return <div key={iProgress} className={`cursor-pointer select-none border px-2 py-1  rounded-lg flex items-center gap-1 ${oProgress.check == true ? 'text-[#5c5fc8] font-semibold border-[#5c5fc8]' : ''}`} onClick={() => handleCheckFilterStatus(iProgress)}>
                                                    {
                                                        oProgress.check && <CheckOutlinedIcon size='8px' />
                                                    }
                                                    <span>{oProgress.text}</span>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                                <div id="filterAction" className='flex gap-2 flex-row justify-end'>
                                    <div className='cursor-pointer select-none rounded-md px-[14px] py-[5px]  text-[#6e6e6e] border border-[#6e6e6e50s]' onClick={() => setOpenFilter(false)}>Cancel</div>
                                    <div className='cursor-pointer select-none rounded-md pl-[10px] pr-[18px] pt-[4px] pb-[5px] bg-[#5c5fc8] text-white flex items-center gap-1' onClick={handleSearch}>
                                        <SearchOutlinedIcon size='10px' />
                                        <span>Search</span>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div id='listSaleForecase ' className='flex flex-col gap-3'>
                        {
                            [...Array(3)].map((o: any, i: number) => {
                                return <div key={i} className={`cursor-pointer p-[4px] px-[10px] rounded-md drop-shadow-lg bg-[#5c5fc8] h-[75px] flex items-center gap-2`}>
                                    <div className='flex-none w-[8px] h-[80%] bg-white rounded-3xl'></div>
                                    <div className='grow pl-[3px]'>
                                        <div className='text-white'>{faker.name.lastName()}</div>
                                        <div className='text-white flex items-center gap-1'>
                                            <NearMeOutlinedIcon sx={{ fontSize: '16px' }} />
                                            <span>{`${moment().format('HH:mm')} AM`}</span>
                                        </div>
                                    </div>
                                    <div className='flex-none'>
                                        <div id="btn" className='bg-[#363872] px-[12px] py-[6px] rounded-lg drop-shadow-lg text-white'>
                                            <span>Request</span>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                        <div className={`cursor-pointer p-[4px] px-[10px] rounded-md drop-shadow-lg bg-white h-[75px] flex items-center gap-2`}>
                            <div className='flex-none w-[8px] h-[80%] bg-[#5c5fc8] rounded-3xl'></div>
                            <div className='grow pl-[3px]'>
                                <div className='text-[#5c5fc8] font-semibold'>{faker.name.lastName()}</div>
                                <div className='text-[#5c5fc8] flex items-center gap-1'>
                                    <NearMeOutlinedIcon sx={{ fontSize: '16px' }} />
                                    <span>{`${moment().format('HH:mm')} AM`}</span>
                                </div>
                            </div>
                            <div className='flex-none'>
                                <div id="btn" className='bg-white  border-2  font-semibold border-[#5c5fc8] px-[12px] py-[4px] rounded-lg drop-shadow-lg text-[#5c5fc8]'>
                                    <CheckOutlinedIcon />
                                    <span>Accepted</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-none border-t h-[50px] flex items-center pl-[15px] bg-[#ffffff] gap-2">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5c5fc8] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5c5fc8]"></span>
                    </span>
                    <span className='text-[#5c5fc8] font-semibold uppercase'>Helpdesk Systems</span>
                </div>
            </div>
            <div className='p-6 flex flex-col gap-6'>
                <div className='flex items-center'>
                    <div className='grow flex gap-2 flex-row items-center'>
                        <div className='rounded-full bg-[#5c5fc8] text-[#fff]  w-[36px] h-[36px] flex items-center justify-center'>
                            <BrightnessHighOutlinedIcon sx={{ fontSize: '20px' }} />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-[18px]'>{faker.company.name()}</span>
                            <span className='text-[12px] text-[#939393]'>งานซ่อม</span>
                        </div>
                    </div>
                    <div className='flex-none text-[#8b8b8b]'>
                        <CloseOutlinedIcon />
                    </div>
                </div>
                <div className='gap-2 flex flex-col'>
                    <div className='font-semibold text-[22px]' id="title">{faker.name.fullName().toString()}</div>
                    <div>{`${today.format('dddd')}, ${today.format('MMM')} ${today.format('DD')} ,${today.format('YYYY')}`}</div>
                    <span className='text-[#8b8b8b]'>{`${today.format('HH:mm')} AM`}</span>
                    <div className='text-[#8b8b8b] flex '>
                        <LocationOnOutlinedIcon />
                        <span>Conferent Room 1</span>
                    </div>
                    <div id='btnAction' className='flex gap-2'>
                        <div className={`text-white ${bgColor} rounded-md pt-[4.5px] pb-[7px] pl-[10px] pr-[18px] w-fit flex`}>
                            <CheckOutlinedIcon />
                            <span>Accept</span>
                        </div>
                        <div className={`text-white bg-red-600 rounded-md pt-[4.5px] pb-[7px] pl-[10px] pr-[9px] w-fit flex`}>
                            <CloseOutlinedIcon />
                            <span>Reject</span>
                        </div>
                    </div>
                    <div id='description ' className='py-[15px]'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, laborum labore ipsa numquam quas in quis ut soluta, culpa aliquid expedita necessitatibus eum quo consequuntur assumenda dignissimos! Iste veniam totam fugit adipisci in facere corrupti delectus dolorum nihil error nulla autem soluta, aut blanditiis excepturi, sunt a, quod molestias? Ut a, fuga rerum sint nisi placeat explicabo error est sequi!
                    </div>
                    <div id='participants'>
                        <div id='partRequest' className='flex flex-row items-center gap-4'>
                            <Avatar src='http://dcidmc.dci.daikin.co.jp/PICTURE/41179.jpg' />
                            <div id='partContext' className='flex flex-col w-full'>
                                <div>{faker.name.fullName().toString()}</div>
                                <div className='text-[#8b8b8b] mb-[10px]'>Request</div>
                                <Divider />
                            </div>
                        </div>
                        <div id='partRequest' className='flex flex-row items-center gap-4 pt-[14px]'>
                            <Avatar src='http://dcidmc.dci.daikin.co.jp/PICTURE/41179.jpg' />
                            <div id='partContext' className='flex flex-col w-full'>
                                <div>{faker.name.fullName().toString()}</div>
                                <div className='text-[#8b8b8b] mb-[10px]'>Request</div>
                                <Divider />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DialogLogout open={openLogout} close={setOpenLogout} />
        </div>
    )
}

export default Management