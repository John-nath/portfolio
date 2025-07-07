import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useRef } from 'react'
import { X } from 'lucide-react';

const Modal = ({onClose}) => {
  const modalRef = useRef()
    const closeModal = (e) => {
        if(modalRef.current === e.target) {
            onClose();
        }
    }
  return (
    <div ref={modalRef} onClick={closeModal} className='bg-black/30  fixed inset-0 backdrop-blur-sm flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center w-full'>
        <button onClick={onClose} className='place-self-end'><X size={30} /></button>

        <form className='mt-8 flex flex-col gap-4 justify-center items-center rounded-xl w-[300px] sm:w-[400px] bg-white h-[500px] py-10 '>
          <Image src={assets.firebase} />
          <p><strong>Login or Sign Up</strong></p>
         <input className='w-11/12 outline-solid outline-gray-300 outline-1 pl-3 py-1 rounded-sm focus:outline-blue-500 focus:outline-2'  type="email"  name="" id="" placeholder='Email' required/>
          <input className='w-11/12 outline-solid outline-gray-300 outline-1 pl-3 py-1 rounded-sm focus:outline-blue-500 focus:outline-2'  type="password"  name="" id="" placeholder='Password' required/>
        
          <button className='bg-black text-white w-11/12 text-center gap-3 px-10 py-1.5 rounded-sm border border-gray-500 cursor-pointer'   type='submit'>Login</button>
                          <a href='#' className='text-right text-blue-700 font-bold decoration-0 '>Forgot password?</a>
        </form>
      
      </div>
    </div>
  )
}

export default Modal
