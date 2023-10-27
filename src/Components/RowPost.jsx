
import React from 'react'
import rowimg from '../assets/rowpost.jpg'
import RowCard from './RowCard'

function RowPost() {
    return (
        <div className=' pt-5'>
            <div>
                <h1 className='text-3xl p-4 font-semibold text-[#c3073f]'>Heading</h1>
            </div>
            <div className='flex overflow-x-scroll overflow-y-hidden space-x-6 p-4 pb-10'>
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
                <RowCard />
            </div>
        </div>
    )
}

export default RowPost
