"use client";
import Link from 'next/link'
import React from 'react'
import useState from 'react'
import Navlink from './Navlink'
import Connectlink from './Connectlink';
import { MenuOverlay } from './MenuOverlay';


const navLinks = [
    {
        title: "About",
        path: "/"
    },
    {
        title: "Skills",
        path: "#skills"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "More",
        path: "#more"
    },
    {
        title: "Contact",
        path: "#contact"
    }
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState.useState(false);
    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#181818] bg-opacity-90'>
            <div className='flex flex-wrap items-center justify-between mx-auto py-3'>
                <Link href={"/"} className='text-2xl text-white font-bold ml-10 my-auto relative group'>
                    chetali.
                    <div className='absolute w-full h-0.5 bg-white/80 scale-x-0 group-hover:scale-x-100 transition-all duration-300'></div>
                </Link>

                {<div className='mobile-menu block lg:hidden'>
                    {
                        navbarOpen ? (
                            <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 text-white hover:text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>


                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 rounded  text-white hover:text-white'>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                        )
                    }
                </div>}
                <div className='  menu hidden lg:block md:w-auto' id="navbar">
                    <ul className=' flex p-4 md:p-0 md:flex-row md:space-x-6 mt-4 mb-4 font-semibold'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index} className='px-6 py-2 rounded-full hover:bg-slate-800'>
                                    <Navlink href={link.path} title={link.title} />
                                </li>
                            ))}
                    </ul>
                </div>
                <div className='flex'>
                    <Connectlink href={'https://www.linkedin.com/in/chetali-goyal-020860227/'} icon='linkedin'/>
                    <Connectlink href={'https://github.com/chetali-1004'} icon='github'/>
                    <Connectlink href={'https://drive.google.com/file/d/1z5xGM6NDznH-iwvldfi5xFPlS41Wy-Be/view?usp=sharing'} icon='resume'/>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

export default Navbar;