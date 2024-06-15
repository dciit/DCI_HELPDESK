import React from 'react'
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import StarIcon from '@mui/icons-material/Star';
import { faker } from '@faker-js/faker';
function Home() {
    return (
        <div>
            <span>Popular in you system</span>
            <div className='grid grid-cols-4'>
                {
                    [...Array(10)].map((o: any, i: number) => {
                        return <div>
                            <div>
                                <div>
                                    <AddToQueueIcon/>
                                </div>
                                <div>
                                    <span>Title</span>
                                    <span>Description</span>
                                </div>
                                <div></div>
                            </div>
                            <div>
                                <StarIcon color=''/>
                                <span>5.0</span>
                                <span>(12345 ratings) </span>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Home