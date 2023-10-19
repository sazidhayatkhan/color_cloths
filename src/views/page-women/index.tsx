import CommonHeader from '@/views/appbars/CommonHeader'
import Trending from '@/components/Trending'
import SliderOne from '@/components/sliderOne'
import React from 'react'

const WomenUi = () => {
  return (
    <div>
      <div className="min-h-screen" style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // backgroundAttachment: 'fixed',
            backgroundPosition: 'top center',
            backgroundImage: 'url(https://www.aarong.com/media/wysiwyg/d-clp-women-mainbanner-puja-23.jpg)'}}>
          <div>
          <CommonHeader/>
        </div>
          <p className='flex justify-center items-center pt-52 md:pt-28 text-white text-4xl md:text-6xl uppercase'>Woman's</p>
        </div>
        <div className='bg-white py-6'>
            <SliderOne data={womanPageSliderData}/>
        </div>
        <div className='bg-white py-2 md:py-10'>
            <Trending data={womanPageTrendingData}/>
        </div>
    </div>
  )
}

export default WomenUi

const womanPageSliderData = [
      {
        image:'/images/wom1.webp',
        title:'Silk',
        url:'',
      },
      {
        image:'/images/wom2.webp',
        title:'Sharee',
        url:'',
      },
      {
        image:'/images/wom3.webp',
        title:'Salwar Kameez',
        url:'',
      },
      {
        image:'/images/wom4.webp',
        title:'Shawl',
        url:'',
      },
      {
        image:'/images/wom5.webp',
        title:'Shoes',
        url:'',
      },
    ]

    const womanPageTrendingData = [
      {
        image:'/images/wom1.webp',
        title:'Silk',
        url:'',
      },
      {
        image:'/images/wom2.webp',
        title:'Sharee',
        url:'',
      },
      {
        image:'/images/wom3.webp',
        title:'Salwar Kameez',
        url:'',
      },
      {
        image:'/images/wom4.webp',
        title:'Shawl',
        url:'',
      },
      {
        image:'/images/wom5.webp',
        title:'Shoes',
        url:'',
      },
    ]

