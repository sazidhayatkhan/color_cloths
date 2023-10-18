"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Slider from 'react-slick'
const CategorySlider = (props:any) => {
  return (
        <div className=''>
                    <Slider {...settings}>
                        {
                            props?.data?.map((item:any,i:any)=>(
                                <div key={i} className='ms-4'>
                                    <Link href={item?.url}>
                                        <div className='border-2 me-3'>
                                            <div className=''>
                                                <Image 
                                                src={item?.image || "/images/dummyImage.png"}
                                                alt=""
                                                width={2000}
                                                height={2000}
                                                className="w-full h-[90px] object-cover object-top border-b-2"
                                                />
                                            </div>
                                            <p className='text-sm text-center font-semibold py-2'>{item?.title}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </Slider>
        </div>
  )
}

export default CategorySlider

const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 3000,
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
          slidesToShow: 3.5,
          dots: false,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3.5,
          dots: false,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
//   function SampleNextArrow({ onClick }: any) {
//     return (
//       <BsChevronRight
//         className="absolute hidden md:block right-6 md:right-[30px] top-[28%] md:top-[45%] text-xl md:text-3xl text-gn600 bg-b900 rounded-full cursor-pointer"
//         onClick={onClick}
//       />
//     );
//   }
  
//   function SamplePrevArrow({ onClick }: any) {
//     return (
//       <BsChevronLeft
//         className="absolute hidden md:block left-0 md:left-[30px] top-[28%] md:top-[45%] text-xl md:text-3xl text-gn600 bg-b900 rounded-full cursor-pointer z-10"
//         onClick={onClick}
//       />
//     );
//   }

