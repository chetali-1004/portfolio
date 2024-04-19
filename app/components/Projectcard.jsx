import React from 'react'

const Projectcard = ({ image, title, desc }) => {
    return (
        <div className='w-full group'>
            <div className='relative overflow-hidden'>
                <img src={image} className='rounded-2xl'></img>
                <div className='absolute h-full w-full bg-gradient-to-r from-purple-400/90 to-pink-600/90 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl'>
                    <p className='p-3 font-semibold text-xs md:text-lg text-black'>{desc}</p>
                </div>
            </div>
            <div className='group'>
                <h2 className=' text-xl mt-5 font-semibold'>{title}</h2>
                <div className='mx-auto w-1/4 h-0.5 bg-white/80 scale-x-0 group-hover:scale-x-100 transition-all duration-300'></div>
            </div>


        </div>
    )
}
export default Projectcard;