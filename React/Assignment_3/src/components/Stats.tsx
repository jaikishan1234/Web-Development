import React from 'react'

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 m-4 lg:p-4 md:p-4">
        <div className='flex flex-col items-center text-3xl'>
            <h3 className='uppercase text-[#908989]'>designers</h3>
            <h1>150+</h1>
        </div>
        <div className='flex flex-col items-center text-3xl'>
            <h3 className='uppercase text-[#908989]'>clients</h3>
            <h1>500+</h1>
        </div>
        <div className='flex flex-col items-center text-3xl'>
            <h3 className='uppercase text-[#908989]'>masterpieces</h3>
            <h1>20K+</h1>
        </div>
        <div className='flex flex-col items-center text-3xl'>
            <h3 className='uppercase text-[#908989]'>events</h3>
            <h1>50+</h1>
        </div>
    </div>
  )
}

export default Stats