import React from 'react'

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 m-4 lg:p-4 md:p-4">
        <div className='bg-[#1E1E1E] p-6 rounded-xl flex flex-col items-start justify-center gap-5'>
            <h1 className='uppercase'>independency</h1>
            <p>Explore the creativity of independent designers from around the globe.</p>
            <div className="flex gap-2 items-center">
                <div><i className="ri-arrow-down-line bg-[#2D322C] rounded-full w-8 h-8 flex items-center justify-center"></i></div>
                <div className="uppercase ">Learn More</div>
            </div>
        </div>
        <div className='bg-[#1E1E1E] p-6 rounded-xl flex flex-col items-start justify-center gap-5'>
            <h1 className='uppercase'>uniquity</h1>
            <p>Discover the charm of unique pieces that stand out effortlessly.</p>
            <div className="flex gap-2 items-center">
                <div><i className="ri-arrow-down-line bg-[#2D322C] rounded-full w-8 h-8 flex items-center justify-center"></i></div>
                <div className="uppercase ">Learn More</div>
            </div>
        </div>
        <div className='bg-[#1E1E1E] p-6 rounded-xl flex flex-col items-start justify-center gap-5'>
            <h1 className='uppercase'>quality</h1>
            <p>Experience unparalleled craftsmanship and attention to detail.</p>
            <div className="flex gap-2 items-center">
                <div><i className="ri-arrow-down-line bg-[#2D322C] rounded-full w-8 h-8 flex items-center justify-center"></i></div>
                <div className="uppercase ">Learn More</div>
            </div>
        </div>
        <div className='bg-[#1E1E1E] p-6 rounded-xl flex flex-col items-start justify-center gap-5'>
            <h1 className='uppercase'>sustainabiltiy</h1>
            <p>Embrace eco-conscious fashion choices without compromising on style.</p>
            <div className="flex gap-2 items-center">
                <div><i className="ri-arrow-down-line bg-[#2D322C] rounded-full w-8 h-8 flex items-center justify-center"></i></div>
                <div className="uppercase ">Learn More</div>
            </div>
        </div>
    </div>
  )
}

export default Cards