"use client";
import React from 'react';
import Skillcard from './Skillcard';

const skills = [
  { image: '/images/java.png', skill: 'Java' },
  { image: '/images/dsa.png', skill: 'DSA' },
  { image: '/images/webdev.png', skill: 'Web Development' },
  { image: '/images/api.png', skill: 'APIs' },
  { image: '/images/oops.png', skill: 'OOPs' },
  { image: '/images/database-management.png', skill: 'DBMS' },
];

const Skills = () => {
  // Create a combined list of skills to achieve the infinite scroll
  const combinedSkills = [...skills, ...skills];

  return (
    <section className='mt-[160px] bg-[#313131] rounded-xl md:py-10 py-7 md:w-3/4 w-full mx-auto' id="skills">
      <div className='text-center'>
        <span className='text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Skill Set</span>
        <p className='text-[#ADB7BE] text-md mt-5 mx-10 mb-7'>&quot;Powered by expertise in leading-edge technologies and programming languages, I possess a versatile skill set to engineer innovative solutions, sparking triumph in dynamic endeavors.&quot;</p>
        
        <div className='relative mt-10'>
          {/* Infinite scroll for large screens */}
          <div className='hidden md:flex md:overflow-hidden md:w-5/6 md:mx-auto'>
            <div className='flex w-full animate-scroll'>
              {combinedSkills.map((skill, index) => (
                <div className='flex-shrink-0 w-35 mx-4' key={index}>
                  <Skillcard image={skill.image} skill={skill.skill} />
                </div>
              ))}
            </div>
          </div>

          {/* Vertical list for mobile screens */}
          <div className='md:hidden flex flex-col'>
            {skills.map((skill, index) => (
              <div className='mb-10' key={index}>
                <Skillcard image={skill.image} skill={skill.skill} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 7s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Skills;
