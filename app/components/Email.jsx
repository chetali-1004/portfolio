"use client";
import React from 'react';
import Connectlink from './Connectlink';

const Email = () => {

    return (
        <section className='grid justify-center lg:w-3/4 mx-auto lg:grid-cols-2 my-0 md:my-12 py-20 gap-4 relative'>
            <div className='text-center lg:text-left z-10'>
                <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>

                    Have a question or want to collaborate? Feel free to reach out! Your message is important to me, and I'm eager to connect. Whether it's discussing a potential project, sharing feedback, or simply saying hello, I'm just a click away. Let's start the conversation!
                </p>
                <div className='socials flex flex-row gap-2 justify-center lg:justify-start'>
                    <Connectlink href='/' icon='github' />
                    <Connectlink href='/' icon='linkedin' />
                </div>
            </div>

            <div>
                <form className='flex flex-col gap-5'>
                    <div>
                        <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Your email</label>
                        <input name="email" type="email" id="email" required placeholder='jacob@google.com' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'></input>
                    </div>
                    <div>
                        <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>Subject</label>
                        <input name="subject" type="text" id="subject" required placeholder='hello world' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'></input>
                    </div>
                    <div>
                        <label htmlFor="message" className='text-white block mb-2 text-sm font-medium'>Message</label>
                        <textarea name="message" id="message" required placeholder="Let's talk about...." className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'></textarea>
                    </div>
                    <button type="submit" className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}
export default Email;