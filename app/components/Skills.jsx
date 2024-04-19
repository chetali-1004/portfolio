import React from 'react'
import Skillcard from './Skillcard';

const Skills = () => {
  return (
    <section className='mt-[160px] bg-[#313131] rounded-xl md:py-10 py-7 md:w-5/6 w-full mx-auto' id="skills">
      <div className='md:flex md:flex-col flex-row items-center text-center'>
        <span className='text-3xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Skill Set</span>
        <div className='w-5/6 items-center text-center mx-auto my-5'>
          <p className='text-[#ADB7BE] text-lg'>"Powered by expertise in leading-edge technologies and programming languages, I possess a versatile skill set to engineer innovative solutions, sparking triumph in dynamic endeavors."</p>
          <div className='grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-10 gap-4'>
            <Skillcard image='/images/java.png' skill='Java' />
            <Skillcard image='/images/dsa.png' skill='DSA' />
            <Skillcard image='/images/webdev.png' skill='Web Development' />
            <Skillcard image='/images/cn.png' skill='CN' />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills;