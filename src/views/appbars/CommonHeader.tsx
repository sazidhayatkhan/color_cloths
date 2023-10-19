"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FiSearch} from 'react-icons/fi'
import {AiOutlineUser,AiOutlineHeart} from 'react-icons/ai'
import {IoBagOutline} from 'react-icons/io5'
import {GiHamburgerMenu} from 'react-icons/gi'
import LeftDrawer from '../../components/LeftDrawer'
const CommonHeader = () => {
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const closeLeftDrawer = () => {
    setIsLeftDrawerOpen(false);
  };
  return (
    <>
    <div className='flex justify-between items-start px-4 md:px-12 drop-shadow-xl pt-4 md:pt-0'>
        <div>
            <Link href={"/"}>
            <Image
                src="/images/color_cloths.png"
                alt=""
                width={3000}
                height={3000}
                className="w-[80px] md:w-[120px] h-[80px] md:h-[120px] object-cover"
            />
            </Link>
        </div>
        <div>
            <div className='mt-1 mb-4 hidden md:block'>
                {
                    CommonHeaderData?.map((item:any,i:any)=>(
                        <button key={i} className='text-white text-sm font-semibold p-3 bg-transparent hover:bg-slate-300/50 transition duration-500'>
                            {item?.title}
                        </button>
                    ))
                }
            </div>
            <div className='flex justify-end items-center gap-3 md:gap-4'>
                <button className='text-white text-2xl font-bold'><FiSearch/></button>
                <button className='text-white text-2xl font-bold'><AiOutlineUser/></button>
                <button className='text-white text-2xl font-bold'><AiOutlineHeart/></button>
                <button className='text-white text-2xl font-bold'><IoBagOutline/></button>
                <button onClick={()=>setIsLeftDrawerOpen(true)} className='text-white text-2xl font-bold block md:hidden'><GiHamburgerMenu/></button>
            </div>
        </div>
    </div>
    <LeftDrawer isOpen={isLeftDrawerOpen} onClose={closeLeftDrawer}>
    <div>
        <div>
            <button className='border-b-2 w-full text-start p-3 flex justify-start items-center gap-2 text-semibold text-xl'><AiOutlineUser/> Sign in</button>
        </div>
        {
            MenuData?.map((item:any,i:any)=>(
                <div key={i}>
                    <Link href={item?.url}>
                        <button onClick={()=>setIsLeftDrawerOpen(false)} className='uppercase border-b-2 w-full text-start p-4'>{item?.title}</button>
                    </Link>
                </div>
            ))
        }
        {
            CommonHeaderData?.map((item:any,i:any)=>(
                <div key={i}>
                    <button onClick={()=>setIsLeftDrawerOpen(false)} className='uppercase border-b-2 w-full text-start p-4 bg-black text-white'>{item?.title}</button>
                </div>
            ))
        }

    </div>
  </LeftDrawer>
  </>
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

const MenuData = [
    {
        title:"Woman",
        url:"/women"
    },
    {
        title:"Man",
        url:"/men"
    },
    {
        title:"Kids",
        url:""
    },
    {
        title:"HOME DÉCOR",
        url:""
    },
    {
        title:"Wedding",
        url:""
    },
    {
        title:"Jewellary",
        url:""
    },
    {
        title:"Gifts and Crafts",
        url:""
    },
    {
        title:"Beauty",
        url:""
    },
    {
        title:"Brands",
        url:""
    },
    {
        title:"Puja 23",
        url:""
    },
]
