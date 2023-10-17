
import CommonHeader from '@/components/CommonHeader'
import React,{useState} from 'react'

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
        <div className='bg-red-600 h-[400px] w-full'>
            <p>Section1</p>
        </div>
        <div className='bg-yellow-600 h-[400px] w-full'>
            <p>Section2</p>
        </div>

    </div>
  )
}

export default HomeUi