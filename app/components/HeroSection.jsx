"use client"
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
    return (
        <section id="About">
            <div className={'grid grid-cols-1 sm:grid-cols-12 mx-auto'}>
                <div className={'col-span-7 place-self-center text-center'}>

                    <h1 className={'text-white mb-4 text-2xl sm:text-3xl lg:text-6xl font-extrabold'}>
                        Hello, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 "><TypeAnimation
                            sequence={[
                                'Chetali',
                                1000,
                                'A Student',
                                1000,
                                'A Tech Enthusiast',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                        /></span>
                    </h1>
                    <p className={'text-[#ADB7BE] text-md mb-10 sm:text-lg lg:text-md mx-auto mt-10'}>
                        <span className='font-bold'>Welcome to my portfolio website!</span>
                        <br /> With a commitment to practicality and the ability to grasp new concepts swiftly, I bring a strong problem-solving attitude to the table. Continuously striving to stay abreast of industry trends, I am dedicated to delivering innovative solutions.
                    </p>
                    <div>
                        <button className={'px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white '}>Let's Connect</button>
                        <button className={'px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'}>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                        </button>
                    </div>
                </div>

                <div className={'col-span-5 place-self-center mt-4 lg:mt-0'}>
                    <div className={'mx-auto lg:ml-20 rounded-full bg-[#313131] w-[220px] h-[220px] lg:w-[350px] lg:h-[350px] relative'}>
                        <Image
                            src={'/images/chetali.png'}
                            alt={'image'}
                            className={'absolute w-[220px] h-[220px] lg:w-[350px] lg:h-[350px] transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'}
                            width={300}
                            height={300}
                        />
                    </div>

                </div>
            </div>

        </section>
    );
};

export default HeroSection;