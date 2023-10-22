import CommonHeader from '@/views/appbars/CommonHeader'
import Trending from '@/components/Trending'
import SliderOne from '@/components/sliderOne'
import React from 'react'

const MenUi = () => {
  return (
    // https://www.aarong.com/media/wysiwyg/r-clp-men-mainbanner-puja-23_1.jpg
    <div>
        <div className="block md:hidden min-h-screen" style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // backgroundAttachment: 'fixed',
            backgroundPosition: 'top center',
            backgroundImage: 'url(https://www.aarong.com/media/wysiwyg/r-clp-men-mainbanner-puja-23_1.jpg)'}}>
          <div>
            <CommonHeader/>
          </div>
          <p className='flex justify-center items-center pt-52 text-white text-4xl uppercase'>Man's</p>
        </div>
        <div className="hidden md:block min-h-screen" style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // backgroundAttachment: 'fixed',
            backgroundPosition: 'top center',
            backgroundImage: 'url(https://www.aarong.com/media/wysiwyg/d-clp-men-mainbanner-puja-23_1.jpg)'}}>
          <div>
            <CommonHeader/>
          </div>
          <p className='flex justify-center items-center pt-28 text-white text-6xl uppercase'>Man's</p>
        </div>
        <div className='bg-white py-6'>
            <SliderOne data={manPageSliderData}/>
        </div>
        <div className='bg-white py-2 md:py-10'>
            <Trending data={manPageTrendingData}/>
        </div>
    </div>
  )
}

export default MenUi

const manPageSliderData =[
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

const manPageTrendingData =[
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