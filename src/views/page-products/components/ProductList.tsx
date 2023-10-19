import React from 'react'
import Image from 'next/image'

const ProductList = ({data}:any) => {

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-7 mx-2 md:mx-0'>
          {
            data?.map((item:any,i:any)=>(
              <div key={i}>
                <div>
                    <Image 
                    src={item?.image || "/images/wom3.webp"}
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full h-[270px] md:h-[400px] object-cover object-top border"
                    />
                </div>
                <div className='mt-1'>
                    <p className='text-sm md:text-lg font-semibold'>{item?.title}</p>
                    <p className='text-xs md:text-base font-medium'>Tk 2000.00</p>
                </div>
              </div>
            ))
          }
    </div>
  )
}

export default ProductList