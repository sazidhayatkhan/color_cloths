import React from 'react'
import Image from 'next/image'
import ProductsNavbar from '@/views/appbars/ProductsNavbar'
import ScrollableNavbar from '@/views/appbars/ScrollableNavbar'

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
      <div className='_container grid grid-cols-12 gap-4'>
        <div className='bg-pink-300 hidden md:block col-span-3'>
          <p>I AM FILTER</p>
        </div>
        <div className='col-span-12 md:col-span-9'>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-7 mx-2 md:mx-0'>
          {
            [...Array(20)].map((i:any)=>(
              <div key={i} className=''>
                <div>
                  <Image 
                    src="/images/wom3.webp"
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full h-[270px] md:h-[400px] object-cover object-top border"
                  />
                </div>
                <div className='mt-1'>
                  <p className='text-base md:text-lg font-semibold'>Muslin Kurti</p>
                  <p className='text-sm md:text-base font-medium'>Tk 2000.00</p>
                </div>
              </div>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsUi