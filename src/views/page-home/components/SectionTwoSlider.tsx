"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Slider from 'react-slick'
const SectionTwoSlider = (props:any) => {
  return (
            <div className=''>
                    <Slider {...settings}>
                        {
                            props?.data.map((item:any,i:any)=>(
                                <div key={i} className=''>
                                    <Link href={item?.url}>
                                        <div className='block md:hidden'>
                                            <Image 
                                            src={item?.mobileImage || "/images/dummyImage.png"}
                                            alt=""
                                            width={4000}
                                            height={4000}
                                            className="w-screen h-[600px] object-cover object-top"
                                            />
                                        </div>
                                        <div className='hidden md:block'>
                                            <Image 
                                            src={item?.image || "/images/dummyImage.png"}
                                            alt=""
                                            width={4000}
                                            height={4000}
                                            className="w-screen h-screen object-cover object-top"
                                            />
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </Slider>
            </div>
  )
}

export default SectionTwoSlider

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: false,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  function SampleNextArrow({ onClick }: any) {
    return (
      <BsChevronRight
        className="absolute right-6 md:right-[69px] top-[45%] md:top-[45%] text-3xl md:text-5xl text-white rounded-full cursor-pointer"
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow({ onClick }: any) {
    return (
      <BsChevronLeft
        className="absolute left-6 md:left-[69px] top-[45%] md:top-[45%] text-3xl md:text-5xl text-white rounded-full cursor-pointer z-10"
        onClick={onClick}
      />
    );
  }

