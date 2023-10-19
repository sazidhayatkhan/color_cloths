import ProductsNavbar from '@/views/appbars/ProductsNavbar'
import ScrollableNavbar from '@/views/appbars/ScrollableNavbar'
import React from 'react'

const ProductsUi = () => {
  return (
    <div>
      <div className='bg-white h-[60px] md:h-[150px]'>
        <div className='custom-bg h-[130px]'>
          <ProductsNavbar/>
        </div>
      </div>
      <div>
        <ScrollableNavbar/>
      </div>
      <div className='h-[400px] bg-yellow-300'>
        <p>Section1</p>
      </div>
      <div className='h-[400px] bg-pink-300'>
        <p>Section2</p>
      </div>
      <div className='h-[400px] bg-green-300'>
        <p>Section3</p>
      </div>
      <div className='h-[400px] bg-sky-300'>
        <p>Section4</p>
      </div>
    </div>
  )
}

export default ProductsUi