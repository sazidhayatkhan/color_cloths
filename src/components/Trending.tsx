"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import {AiFillPlusCircle} from 'react-icons/ai'
import {GrClose} from 'react-icons/gr'
import Slider from 'react-slick'
const Trending = (props:any) => {
  const [openDiv, setOpenDiv] = useState(new Array(props?.data.length).fill(false));

  const toggleDiv = (index: number) => {
    const updatedOpenDiv = [...openDiv];
    updatedOpenDiv[index] = !updatedOpenDiv[index];
    setOpenDiv(updatedOpenDiv);
  };
  return (
    <div>
        <div className='flex justify-center items-center'>
            <p className='text-xl md:text-3xl font-semibold mb-3'>TRENDING</p>
        </div>
            <div className='w-[92%] md:w-[75%] mx-auto'>
                    <Slider {...settings}>
                        {
                            props?.data.map((item:any,i:any)=>(
                                <div key={i} className='ms-[64px] md:ms-0'>
                                    <>
                                        <div className='me-3 md:me-0 border-2 relative'>
                                            <Image 
                                            src={item?.image || "/images/dummyImage.png"}
                                            alt=""
                                            width={1000}
                                            height={1000}
                                            className="w-full h-[320px] md:h-[460px] object-cover object-top"
                                            />
                                            <button onClick={()=>toggleDiv(i)} className='absolute bottom-[20px] left-[12px] text-4xl text-slate-700'><AiFillPlusCircle/></button>
                                            <div className={`transition-transform transform scale-y-0 ${openDiv[i] ? 'scale-y-100' : ''} origin-bottom duration-300 ease-in-out`}>
                                              <div className='bg-white drop-shadow-xl w-[90%] md:w-[85%] h-[100px] absolute bottom-[20px] left-[12px] rounded-bl-2xl p-3'>
                                                <p className='text-black font-bold text-lg'>{item?.title}</p>
                                                <p className='text-black mb-2'>{item?.price || 'TBA'}</p>
                                                <button onClick={() => toggleDiv(i)} className='text-black text-xl'><GrClose /></button>
                                              </div>
                                            </div>
                                        </div>
                                    </>
                                </div>
                            ))
                        }
                    </Slider>
            </div>
    </div>
  )
}

export default Trending

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2,
          dots: false,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          dots: false,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  function SampleNextArrow({ onClick }: any) {
    return (
      <BsArrowRight
        className="absolute hidden md:block right-6 md:right-[-50px] top-[28%] md:top-[45%] text-xl md:text-3xl text-gn600 bg-b900 rounded-full cursor-pointer"
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow({ onClick }: any) {
    return (
      <BsArrowLeft
        className="absolute hidden md:block left-0 md:left-[-50px] top-[28%] md:top-[45%] text-xl md:text-3xl text-gn600 bg-b900 rounded-full cursor-pointer z-10"
        onClick={onClick}
      />
    );
  }

