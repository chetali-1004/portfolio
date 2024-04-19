import React from 'react'
import Projectcard from './Projectcard';

const Projects = () => {
    return (
        <section className='mt-[100px] rounded-xl md:py-10 py-7 md:w-5/6 w-full mx-auto' id="projects">
            <div className='md:flex md:flex-col flex-row items-center text-center'>
                <span className='text-3xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Projects</span>
                <div className='w-5/6 items-center text-center mx-auto my-5'>
                    <p className='text-[#ADB7BE] text-lg'>"From inception to execution, witness how each endeavor showcases problem-solving skills, creativity, and technical finesse. Explore tangible results driving impactful solutions and pushing boundaries in dynamic environments."</p>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 mt-10 gap-4'>
                            <Projectcard
                                title='Portfolio Website'
                                desc='This portfolio website is a testament to my journey of mastering various skills and harnessing them to craft solutions that make an impact. Explore my diverse projects, showcasing technical prowess and creative ingenuity. Witness how I turn ideas into impactful outcomes, driving success in dynamic environments.'
                                image='/images/portfolio-project.png'
                            />
                            <Projectcard
                                title='Ride Wallet'
                                desc='Our ongoing project transforms campus transit: a website with QR code integration for seamless bus access. Say goodbye to paper passes and cash transactions—each unique QR code manages ride credits efficiently. Experience hassle-free travel while reducing waste and enhancing security.'
                                image='/images/ridewallet2.png'
                            />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;


// This portfolio website is a testament to my journey of mastering various skills and harnessing them to craft solutions that make an impact. Explore my diverse projects, showcasing technical prowess and creative ingenuity. Witness how I turn ideas into impactful outcomes, driving success in dynamic environments.