'use client';
import React from 'react'
import Image from 'next/image';
import controller from './../../public/images/controller.png';
const AddToCart = () => {
  return (
    <div className='p-0.5 mx-2'>
       <Image className='h-45 w-60' src={controller} alt="controller"/>
        <button className='text-base-100  btn btn-primary hover:btn-accent ' onClick={()=>console.log('Click')}>Add to 🛒</button>
    </div>
  )
}

export default AddToCart