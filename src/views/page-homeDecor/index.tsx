import CommonHeader from '@/views/appbars/CommonHeader'
import Trending from '@/components/Trending'
import SliderOne from '@/components/sliderOne'
import React from 'react'

const HomeDecorUi = () => {
  return (
    // https://www.aarong.com/media/wysiwyg/r-clp-men-mainbanner-puja-23_1.jpg
    <div>
        <div className="block md:hidden min-h-screen" style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // backgroundAttachment: 'fixed',
            backgroundPosition: 'top center',
            backgroundImage: 'url(https://www.aarong.com/media/wysiwyg/CLP-Home-Decor-Responsive-21062023_4.jpg)'}}>
          <div>
            <CommonHeader/>
          </div>
          <p className='flex justify-center items-center pt-52 text-white text-4xl uppercase'>Home Decor</p>
        </div>
        <div className="hidden md:block min-h-screen" style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // backgroundAttachment: 'fixed',
            backgroundPosition: 'top center',
            backgroundImage: 'url(https://www.aarong.com/media/wysiwyg/CLP-Home-Decor-Desktop-21062023_5.jpg)'}}>
          <div>
            <CommonHeader/>
          </div>
          <p className='flex justify-center items-center pt-28 text-white text-6xl uppercase'>Home Decor</p>
        </div>
        <div className='bg-white py-6'>
            <SliderOne data={homeDecorPageSliderData}/>
        </div>
        <div className='bg-white py-2 md:py-10'>
            <Trending data={homeDecorPageTrendingData}/>
        </div>
    </div>
  )
}

export default HomeDecorUi

const homeDecorPageSliderData =[
  {
    image:'/images/hd1.webp',
    title:'Bed Sheet',
    url:'',
  },
  {
    image:'/images/hd2.webp',
    title:'Table Mat',
    url:'',
  },
  {
    image:'/images/hd3.webp',
    title:'Frame',
    url:'',
  },
  {
    image:'/images/hd4.webp',
    title:'Cussion',
    url:'',
  },
  {
    image:'/images/hd5.webp',
    title:'Accessories',
    url:'',
  },
]

const homeDecorPageTrendingData =[
  {
    image:'/images/hd1.webp',
    title:'Bed Sheet',
    url:'',
  },
  {
    image:'/images/hd2.webp',
    title:'Table Mat',
    url:'',
  },
  {
    image:'/images/hd3.webp',
    title:'Frame',
    url:'',
  },
  {
    image:'/images/hd4.webp',
    title:'Cussion',
    url:'',
  },
  {
    image:'/images/hd5.webp',
    title:'Accessories',
    url:'',
  },
]