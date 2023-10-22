import CommonHeader from '@/views/appbars/CommonHeader'
import Trending from '@/components/Trending'
import SliderOne from '@/components/sliderOne'
import React from 'react'

const WeddingUi = () => {
  return (
    // https://www.aarong.com/media/wysiwyg/r-clp-men-mainbanner-puja-23_1.jpg
    <div>
        <div className="block md:hidden min-h-screen" style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // backgroundAttachment: 'fixed',
            backgroundPosition: 'top center',
            backgroundImage: 'url(https://www.aarong.com/media/wysiwyg/WEDDING-M.jpg)'}}>
          <div>
            <CommonHeader/>
          </div>
          <p className='flex justify-center items-center pt-52 text-white text-4xl uppercase'>Wedding</p>
        </div>
        <div className="hidden md:block min-h-screen" style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // backgroundAttachment: 'fixed',
            backgroundPosition: 'top center',
            backgroundImage: 'url(https://www.aarong.com/media/catalog/category/WEDDING_1.jpg)'}}>
          <div>
            <CommonHeader/>
          </div>
          <p className='flex justify-center items-center pt-28 text-white text-6xl uppercase'>Wedding</p>
        </div>
        <div className='bg-white py-6'>
            <SliderOne data={weddingPageSliderData}/>
        </div>
        <div className='bg-white py-2 md:py-10'>
            <Trending data={weddingPageTrendingData}/>
        </div>
    </div>
  )
}

export default WeddingUi

const weddingPageSliderData =[
  {
    image:'/images/wd1.webp',
    title:'Woman',
    url:'',
  },
  {
    image:'/images/wd2.webp',
    title:'Men',
    url:'',
  },
  {
    image:'/images/wd3.webp',
    title:'Home Decor',
    url:'',
  },
  {
    image:'/images/wd4.webp',
    title:'Jewellery',
    url:'',
  },
  {
    image:'/images/wd5.webp',
    title:'Gift Cards',
    url:'',
  },
]

const weddingPageTrendingData =[
  {
    image:'/images/wd1.webp',
    title:'Woman',
    url:'',
  },
  {
    image:'/images/wd2.webp',
    title:'Men',
    url:'',
  },
  {
    image:'/images/wd3.webp',
    title:'Home Decor',
    url:'',
  },
  {
    image:'/images/wd4.webp',
    title:'Jewellery',
    url:'',
  },
  {
    image:'/images/wd5.webp',
    title:'Gift Cards',
    url:'',
  },
]