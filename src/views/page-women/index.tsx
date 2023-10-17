import CommonHeader from '@/components/CommonHeader'
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
          <p className='flex justify-center items-center pt-28 text-white text-6xl uppercase'>Woman's</p>
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

export default WomenUi
