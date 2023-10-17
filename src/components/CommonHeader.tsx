import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FiSearch} from 'react-icons/fi'
import {AiOutlineUser,AiOutlineHeart} from 'react-icons/ai'
import {IoBagOutline} from 'react-icons/io5'
const CommonHeader = () => {
  return (
    <div className='flex justify-between items-start px-12 drop-shadow-xl'>
        <div>
            <Link href={"/"}>
            <Image
                src="/images/color_cloths.png"
                alt=""
                width={3000}
                height={3000}
                className="w-[120px] h-[120px] object-cover"
            />
            </Link>
        </div>
        <div>
            <div className='mt-1 mb-4'>
                {
                    CommonHeaderData?.map((item:any,i:any)=>(
                        <button key={i} className='text-white text-sm font-semibold p-3 bg-transparent hover:bg-slate-300/50 transition duration-500'>
                            {item?.title}
                        </button>
                    ))
                }
            </div>
            <div className='flex justify-end items-center gap-4'>
                <button className='text-white text-2xl font-bold'><FiSearch/></button>
                <button className='text-white text-2xl font-bold'><AiOutlineUser/></button>
                <button className='text-white text-2xl font-bold'><AiOutlineHeart/></button>
                <button className='text-white text-2xl font-bold'><IoBagOutline/></button>
            </div>
        </div>
    </div>
  )
}

export default CommonHeader

const CommonHeaderData=[
    {
        title:'Find a Store',
        url:""
    },
    {
        title:'Customer Service',
        url:""
    },
    {
        title:'Club Taaga',
        url:""
    },
    {
        title:'My Aarong Rewards',
        url:""
    }
]