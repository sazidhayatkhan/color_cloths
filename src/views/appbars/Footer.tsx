import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {GoMail} from 'react-icons/go'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineInstagram,AiOutlineYoutube} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import {ImPinterest2} from 'react-icons/im'
const Footer = () => {
  return (
    <div className=''>
        <div className='flex flex-col md:flex-row justify-between items-center bg-[#f3f3f3] px-12 py-7'>
            <div>
                <div className='flex justify-center md:justify-start items-center gap-2 text-lg md:text-3xl mb-3'>
                    <div className='text-2xl md:text-4xl'>
                        <GoMail/>
                    </div>
                    <p className='font-medium'>STAY TUNED</p>
                </div>
                <p className='text-center md:text-start text-sm md:text-lg w-full md:w-[55%] text-slate-500'>Don’t miss the opportunity to get daily updates on all that’s new at Aarong</p>
            </div>
            <div className='flex flex-col md:flex-row justify-center md:justify-end items-center gap-4 mt-6 md:mt-0'>
                <input type="email" placeholder='Enter Email Address' className='border p-2 outline-none bg-transparent'/>
                <button className='bg-black text-white py-2 px-6 text-sm md:text-base'>SUBSCRIBE</button>
            </div>
        </div>
        <div className='hidden md:grid grid-cols-4'>
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
        <div className='block md:hidden'>
            {
                footerImages?.map((item:any,i:any)=>(
                    <div key={i}>
                        <Link href={item?.url}>
                            <button className='text-sm uppercase border-b-2 w-full text-start p-4'>{item?.title}</button>
                        </Link>
                    </div>
                ))
            }
            <div className='p-4'>
                <p className='uppercase text-black mb-3 text-sm'>Follow Us</p>
                <div className='flex justify-between items-center text-2xl'>
                    <button><FaFacebookF/></button>
                    <button><AiOutlineInstagram/></button>
                    <button><FiTwitter/></button>
                    <button><ImPinterest2/></button>
                    <button><AiOutlineYoutube/></button>
                </div>
            </div>
            <div className='bg-black p-4 text-white'>
                <p className='text-center text-xs'>Color Cloth Copyright @2023</p>
            </div>
        </div>
        
        {/* <div className='h-[60px] bg-white text-white hidden md:block'>
            <p>COLOR CLOTHS</p>
        </div> */}
    </div>
  )
}

export default Footer

const footerImages = [
    {
        image:"/images/f1.png",
        title:"Who we are",
        url:""
    },
    {
        image:"/images/f2.png",
        title:"Categories",
        url:""
    },
    {
        image:"/images/f3.png",
        title:"Customer Service",
        url:""
    },
    {
        image:"/images/f4.png",
        title:"More",
        url:""
    }
]