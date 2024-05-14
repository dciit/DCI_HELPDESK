import { Avatar } from '@mui/material'
import React from 'react'
import { faker } from '@faker-js/faker';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import AirplayOutlinedIcon from '@mui/icons-material/AirplayOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import moment from 'moment';
function Helpdesk() {
    const icons: any[] = [<AccessAlarmOutlinedIcon />, <AirplayOutlinedIcon />, <AssessmentOutlinedIcon />];
    return (
        <div className='h-[100%] flex flex-row'>
            <div id="nav" className='w-[7.5%]  flex items-center flex-col pt-3 gap-6 h-full border-r border-r-[#ddd]'>
                <Avatar />
                <div id="nav-menu">
                    {
                        icons.map((oIcon: any, i: number) => {
                            return <div key={i} className='text-black text-center py-2 select-none cursor-pointer hover:text-[#5c5fc8] duration-300 transition-colors'>
                                <div id="icon">{oIcon}</div>
                                <span className='text-[1em]'>{faker.name.firstName().substring(0, 4)}</span>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className='w-[35%] px-6 pt-3'>
                <div id="calendar " className='flex flex-col gap-2'>
                    <span className='font-semibold'>December</span>
                    <div id="search" className='flex gap-1'>
                        <input type="text" className='bg-[#ddd] rounded-sm pl-3 py-1' placeholder='Search' />
                        <div className='bg-[#ddd] w-fit rounded-sm px-2 py-1 text-[#575757]'>
                            <KeyboardVoiceOutlinedIcon />
                        </div>
                    </div>
                    <div>

                        <div className='flex justify-around w-full'>
                            {
                                [...Array(7)].map((oDay: string, iDay: number) => {
                                    return <div>{moment().add('days', iDay).format('dd').substring(0, 1)}</div>
                                })
                            }
                        </div>
                        <div className='flex justify-around w-full bg-red-50'>
                            {
                                [...Array(7)].map((oDay: string, iDay: number) => {
                                    return <div>{moment().add('days', iDay).format('DD')}</div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Helpdesk