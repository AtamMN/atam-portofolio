import React from 'react';
import Ava from '../assets/ava.png'
import {BsGithub, BsInstagram, BsLinkedin, BsWhatsapp} from 'react-icons/bs'
import Description from './HomeComponents/Description';
import Education from './HomeComponents/Education';
import Experience from './HomeComponents/Experience';
import Certificate from './HomeComponents/Certificate';

const Home = () => {
  const handleClick = () => {
    window.location.replace('https://wa.me/6283192679651');
  };
  return (
    <div id='home-container'>
      <div id='intro-container' className='flex items-center justify-evenly py-4 flex-wrap gap-3 bg-[#0f0e17]'>
        <img src={Ava} alt='ava' className='border border-slate-800 rounded-full max-h-[200px]'/>
        <div id='short-desc' className='text-[#fffffe] flex flex-col items-center'>
          <h2 className='font-semibold'>MUHAMMAD KHATAM RAMADHAN</h2>
          <h4 className='font-thin text-xs'>FRONTEND DEVELOPER</h4>
          <p className='pt-4'>FEEL FREE TO:</p>
          <div id='contact' className='flex gap-2'>
            <button onClick={handleClick} id='btn-wa' className='flex items-center gap-1 bg-[#ff8906] p-2 rounded-md hover:bg-[rgb(26,151,72)] '><BsWhatsapp size='20'/>Contact Me!</button>
            <button id='btn-ig'><BsInstagram size='30' className='hover:text-slate-800'/></button>
            <button id='btn-li'><BsLinkedin size='30' className='hover:text-slate-800'/></button>
            <button id='btn-git'><BsGithub size='30' className='hover:text-slate-800'/></button>
          </div>
        </div>
      </div>
      <div id='desc-container'>
        <Description/>
      </div>
      <div id='edu-container'>
        <Education/>
      </div>
      <div id='po-container'>
        <Experience/>
      </div>
      <div id='co-container'>
        <Certificate/>
      </div>
    </div>
  )
}

export default Home