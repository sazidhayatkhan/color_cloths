import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-blue-200'>
        <div>
            <div className=''>
                <Link href={"/"}>
                <Image
                    src="/images/color_cloths.png"
                    alt=""
                    width={3000}
                    height={3000}
                    className="w-[80px] md:w-[80px] h-[80px] md:h-[80px] object-cover mx-auto"
                />
                </Link>
            </div>
            <h1 className='font-semibold mt-3'>Comming Soon</h1>
        </div>
    </div>
  )
}

export default page