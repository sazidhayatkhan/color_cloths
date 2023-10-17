"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Slider from 'react-slick'
const SliderOne = (props:any) => {
  return (
    <div>
        <div className='grid grid-cols-5'>
            <div className='col-span-1 flex justify-center items-center'>
                <p className='text-4xl font-semibold w-[60%]'>SHOP BY CATEGORY</p>
            </div>
            <div className='col-span-4'>
                    <Slider {...settings}>
                        {
                            props?.data?.map((item:any,i:any)=>(
                                <div key={i} className=''>
                                    <Link href={''}>
                                        <div className='py-2 me-3'>
                                            <Image 
                                            src={item?.image || "/images/dummyImage.png"}
                                            alt=""
                                            width={2000}
                                            height={2000}
                                            className="w-full h-[460px] object-cover object-top"
                                            />
                                        </div>
                                        <p className='text-sm text-start font-semibold'>{item?.title}</p>
                                    </Link>
                                </div>
                            ))
                        }
                    </Slider>
            </div>
        </div>
       
    </div>
  )
}

export default SliderOne

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
          slidesToShow: 3,
          dots: false,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          dots: false,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  function SampleNextArrow({ onClick }: any) {
    return (
      <BsChevronRight
        className="absolute hidden md:block right-6 md:right-[30px] top-[28%] md:top-[45%] text-xl md:text-3xl text-gn600 bg-b900 rounded-full cursor-pointer"
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow({ onClick }: any) {
    return (
      <BsChevronLeft
        className="absolute hidden md:block left-0 md:left-[30px] top-[28%] md:top-[45%] text-xl md:text-3xl text-gn600 bg-b900 rounded-full cursor-pointer z-10"
        onClick={onClick}
      />
    );
  }

const sliderData =[
  {
    image:'/images/men1.webp',
    title:'Panjabi',
    url:'',
  },
  {
    image:'/images/men2.webp',
    title:'Shirt',
    url:'',
  },
  {
    image:'/images/men3.webp',
    title:'Tshirt',
    url:'',
  },
  {
    image:'/images/men4.webp',
    title:'Shoes',
    url:'',
  },
  {
    image:'/images/men5.webp',
    title:'Accessories',
    url:'',
  },
]