import React from 'react'
import Image from "next/image";

const Skillcard = ({image, skill}) => {
    return (
        <div className='m-4'>
            <Image src={image} height={100} width={100} className='mx-auto h-[100px] w-[120px]' />
            <p className='text-xl pt-3 text-center mx-auto'>{skill}</p>
        </div>
    )
}

export default Skillcard;