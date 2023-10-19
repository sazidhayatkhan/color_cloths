"use client"
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import {FiSearch} from 'react-icons/fi'
import {AiOutlineUser,AiOutlineHeart} from 'react-icons/ai'
import {IoBagOutline} from 'react-icons/io5'
import {GiHamburgerMenu} from 'react-icons/gi'
import Link from "next/link";
import Image from "next/image"
import LeftDrawer from "../../components/LeftDrawer";

const ScrollableNavbar = () => {
    
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const closeLeftDrawer = () => {
    setIsLeftDrawerOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Initially, set isScrolled to true if the page is already scrolled 100 pixels down.
    if (window.scrollY > 180) {
      setIsScrolled(true);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <nav
      className={classNames(
        "w-full",
        "px-4",
        "bg-white",
        "transition-all duration-300",
        {
          "fixed top-[-2px] shadow-lg opacity-100": isScrolled,
          "opacity-0 -translate-y-16": !isScrolled,
        }
      )}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-3">
                <div className=''>
                    <Link href={"/"}>
                    <Image
                        src="/images/color_cloths.png"
                        alt=""
                        width={3000}
                        height={3000}
                        className="w-[60px] md:w-[70px] h-[60px] md:h-[70px] object-cover"
                    />
                    </Link>
                </div>
                <ul className="hidden md:flex space-x-4">
                        {
                            MenuData.map((item:any,i:any)=>(
                                <Link href={item?.url}>
                                    <li key={i} className='uppercase cursor-pointer'>
                                        {item?.title}
                                    </li>
                                </Link>
                            ))
                        }
                </ul>
            </div>
            <ul className="flex space-x-4 text-2xl">
                <li>
                    <FiSearch/>
                </li>
                <li>
                    <AiOutlineUser/>
                </li>
                <li>
                    <AiOutlineHeart/>
                </li>
                <li>
                    <IoBagOutline/>
                </li>
                <li onClick={()=>setIsLeftDrawerOpen(true)} className="block md:hidden">
                    <GiHamburgerMenu/>
                </li>
            </ul>
        </div>
      </div>
    </nav>
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
  );
};

export default ScrollableNavbar;

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
