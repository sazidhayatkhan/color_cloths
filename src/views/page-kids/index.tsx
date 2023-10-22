import CommonHeader from '@/views/appbars/CommonHeader'
import Trending from '@/components/Trending'
import SliderOne from '@/components/sliderOne'
import React from 'react'

const KidsUi = () => {
  return (
    // https://www.aarong.com/media/wysiwyg/r-clp-men-mainbanner-puja-23_1.jpg
    <div>
        <div className="block md:hidden min-h-screen" style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // backgroundAttachment: 'fixed',
            backgroundPosition: 'top center',
            backgroundImage: 'url(https://www.aarong.com/media/wysiwyg/R-kids-category-banner-03102023.png)'}}>
          <div>
            <CommonHeader/>
          </div>
          <p className='flex justify-center items-center pt-52 text-white text-4xl uppercase'>KID'S</p>
        </div>
        <div className="hidden md:block min-h-screen" style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // backgroundAttachment: 'fixed',
            backgroundPosition: 'top center',
            backgroundImage: 'url(https://www.aarong.com/media/wysiwyg/D-kids-category-banner-03102023.png)'}}>
          <div>
            <CommonHeader/>
          </div>
          <p className='flex justify-center items-center pt-28 text-white text-6xl uppercase'>KID'S</p>
        </div>
        <div className='bg-white py-6'>
            <SliderOne data={kidPageSliderData}/>
        </div>
        <div className='bg-white py-2 md:py-10'>
            <Trending data={kidPageTrendingData}/>
        </div>
    </div>
  )
}

export default KidsUi

const kidPageSliderData =[
  {
    image:'/images/kid1.webp',
    title:'Panjabi',
    url:'',
  },
  {
    image:'/images/kid2.webp',
    title:'Shirt',
    url:'',
  },
  {
    image:'/images/kid3.webp',
    title:'Frock',
    url:'',
  },
  {
    image:'/images/kid4.webp',
    title:'Shoes',
    url:'',
  },
  {
    image:'/images/kid5.webp',
    title:'Lehenga',
    url:'',
  },
]

const kidPageTrendingData =[
  {
    image:'/images/kid1.webp',
    title:'Panjabi',
    url:'',
  },
  {
    image:'/images/kid2.webp',
    title:'Shirt',
    url:'',
  },
  {
    image:'/images/kid3.webp',
    title:'Frock',
    url:'',
  },
  {
    image:'/images/kid4.webp',
    title:'Shoes',
    url:'',
  },
  {
    image:'/images/kid5.webp',
    title:'Lehenga',
    url:'',
  },
]