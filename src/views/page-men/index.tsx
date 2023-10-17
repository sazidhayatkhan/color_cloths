import CommonHeader from '@/components/CommonHeader'
import Trending from '@/components/Trending'
import SliderOne from '@/components/sliderOne'
import React from 'react'

const MenUi = () => {
  return (
    <div>
      <div className="min-h-screen" style={{
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
            <SliderOne/>
        </div>
        <div className='bg-white py-10'>
            <Trending/>
        </div>
    </div>
  )
}

export default MenUi
