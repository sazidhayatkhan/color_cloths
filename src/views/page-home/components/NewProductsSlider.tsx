"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import Slider from 'react-slick'
const NewProductsSlider = (props:any) => {
  return (
    <div>
        <div className='flex justify-center items-center'>
            <p className='text-xl md:text-3xl font-semibold mb-5'>WHAT'S NEW</p>
        </div>
            <div className='w-[92%] md:w-[75%] mx-auto'>
                    <Slider {...settings}>
                        {
                            props?.data.map((item:any,i:any)=>(
                                <div key={i} className='ms-[64px] md:ms-0'>
                                    <Link href={'/products'}>
                                        <div className='me-3 md:me-0 border-2'>
                                            <Image 
                                            src={item?.image || "/images/dummyImage.png"}
                                            alt=""
                                            width={1000}
                                            height={1000}
                                            className="w-full h-[320px] md:h-[460px] object-cover object-top"
                                            />
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </Slider>
            </div>
    </div>
  )
}

export default NewProductsSlider

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

