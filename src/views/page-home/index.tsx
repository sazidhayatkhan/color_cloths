import CategorySlider from '@/views/page-home/components/CategorySlider'
import CommonHeader from '@/components/CommonHeader'
import React from 'react'
import SectionTwoSlider from './components/SectionTwoSlider'

const HomeUi = () => {
    
  return (
    // 
    <div>
        <div className="block md:hidden min-h-screen" style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // backgroundAttachment: 'fixed',
            backgroundPosition: 'top center',
            backgroundImage: 'url(https://www.aarong.com/media/mageplaza/bannerslider/banner/image/mobile_image/r/1/r1-puja-mb-23092023.png)'}}>
        <div>
          <CommonHeader/>
        </div>
        </div>
        <div className="hidden md:block min-h-screen" style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // backgroundAttachment: 'fixed',
            backgroundPosition: 'top center',
            backgroundImage: 'url(https://www.aarong.com/media/mageplaza/bannerslider/banner/image/1/-/1-d-puja-mb-08102023-revised.png)'}}>
          <div>
            <CommonHeader/>
          </div>
        </div>
        <div className='block md:hidden py-6'>
            <CategorySlider data={CategorySliderData}/>
        </div>
        <div className=''>
            <SectionTwoSlider data={SectionTwoData}/>
        </div>

    </div>
  )
}

export default HomeUi

const CategorySliderData =[
  {
    image:'/images/c1.webp',
    title:'Woman',
    url:'/women',
  },
  {
    image:'/images/c2.webp',
    title:'Man',
    url:'/men',
  },
  {
    image:'/images/c3.webp',
    title:'Kids',
    url:'',
  },
  {
    image:'/images/c4.webp',
    title:'Home Decor',
    url:'',
  },
  {
    image:'/images/c5.webp',
    title:'Wedding',
    url:'',
  },
  {
    image:'/images/c6.webp',
    title:'Jewellary',
    url:'',
  },
]

const SectionTwoData =[
  {
    image:'/images/sl1.webp',
    mobileImage:'/images/msl1.webp',
    title:'Woman',
    url:'/women',
  },
  {
    image:'/images/sl2.webp',
    mobileImage:'/images/msl2.webp',
    title:'Man',
    url:'/men',
  },
  {
    image:'/images/sl3.webp',
    mobileImage:'/images/msl3.webp',
    title:'Kids',
    url:'',
  },
]