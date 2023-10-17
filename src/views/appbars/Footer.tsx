import React from 'react'
import Image from 'next/image'
import {GoMail} from 'react-icons/go'
const Footer = () => {
  return (
    <div className='hidden md:block'>
        <div className='flex justify-between items-center bg-[#f3f3f3] px-12 py-7'>
            <div>
                <div className='flex justify-start items-center gap-2 text-3xl mb-3'>
                    <div className='text-4xl'>
                        <GoMail/>
                    </div>
                    <p className='font-medium'>STAY TUNED</p>
                </div>
                <p className='text-lg w-[55%] text-slate-500'>Don’t miss the opportunity to get daily updates on all that’s new at Aarong</p>
            </div>
            <div className='flex justify-end items-center gap-4'>
                <input type="email" placeholder='Enter Email Address' className='border p-2 outline-none bg-transparent'/>
                <button className='bg-black text-white py-2 px-6'>SUBSCRIBE</button>
            </div>
        </div>
        <div className='grid grid-cols-4'>
            {
                footerImages?.map((item:any,i:any)=>(
                    <div key={i} className='relative'>
                        <Image 
                            src={item?.image || "/images/dummyImage.png"}
                            alt=""
                            width={1000}
                            height={1000}
                            className="w-full h-[350px] object-cover"
                        />
                        <p className='absolute top-[5%] left-[5%] text-white drop-shadow-2xl text-2xl uppercase font-bold'>{item?.title}</p>
                    </div>
                ))
            }
        </div>
        <div className='h-[60px] bg-red-600'>
            <p>COLOR CLOTHS</p>
        </div>
    </div>
  )
}

export default Footer

const footerImages = [
    {
        image:"/images/f1.png",
        title:"Who we are"
    },
    {
        image:"/images/f2.png",
        title:"Categories"
    },
    {
        image:"/images/f3.png",
        title:"Customer Service"
    },
    {
        image:"/images/f4.png",
        title:"More"
    }
]