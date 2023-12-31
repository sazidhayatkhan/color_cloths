"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FiSearch} from 'react-icons/fi'
import {AiOutlineUser,AiOutlineHeart} from 'react-icons/ai'
import {IoBagOutline} from 'react-icons/io5'
import {GiHamburgerMenu} from 'react-icons/gi'
import LeftDrawer from '../../components/LeftDrawer'
const ProductsNavbar = () => {
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const closeLeftDrawer = () => {
    setIsLeftDrawerOpen(false);
  };
  return (
    <>
    <div className='flex justify-between items-start px-4 md:px-12 pt-4 md:pt-0'>
        <div className=''>
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
        <div className='w-[48%] md:w-[90%]'>
            <div>
                <div className='mt-1 mb-12 hidden md:flex justify-end items-center'>
                    {
                        CommonHeaderData?.map((item:any,i:any)=>(
                            <button key={i} className='text-white text-sm font-semibold p-3 bg-transparent hover:bg-slate-300/50 transition duration-500'>
                                {item?.title}
                            </button>
                        ))
                    }
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='hidden md:flex justify-start items-center'>
                    {
                        MenuData.map((item:any,i:any)=>(
                            <div key={i}>
                                <button className='uppercase text-lg px-3'>{item?.title}</button>
                            </div>
                        ))
                    }
                </div>
                <div className='flex justify-end items-center gap-3 md:gap-4'>
                    <button className='text-black text-2xl font-bold'><FiSearch/></button>
                    <button className='text-black text-2xl font-bold'><AiOutlineUser/></button>
                    <button className='text-black text-2xl font-bold'><AiOutlineHeart/></button>
                    <button className='text-black text-2xl font-bold'><IoBagOutline/></button>
                    <button onClick={()=>setIsLeftDrawerOpen(true)} className='text-black text-2xl font-bold block md:hidden'><GiHamburgerMenu/></button>
                </div>
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

export default ProductsNavbar

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
        url:"/kid"
    },
    {
        title:"HOME DÉCOR",
        url:"/home-decor"
    },
    {
        title:"Wedding",
        url:"/wedding"
    },
    {
        title:"Jewellary",
        url:"/jewellary"
    },
    {
        title:"Gifts and Crafts",
        url:"/gifts-crafts"
    },
    {
        title:"Beauty",
        url:"/beauty"
    },
    {
        title:"Brands",
        url:"/brands"
    },
    {
        title:"Puja 23",
        url:"/puja"
    },
]
