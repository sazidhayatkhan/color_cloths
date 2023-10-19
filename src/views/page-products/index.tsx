import React from 'react'
import Image from 'next/image'
import ProductsNavbar from '@/views/appbars/ProductsNavbar'
import ScrollableNavbar from '@/views/appbars/ScrollableNavbar'
import ProductList from './components/ProductList'

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
          <ProductList data={ProductsData}/>
        </div>
      </div>
    </div>
  )
}

export default ProductsUi

const ProductsData =[
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
  {
    image:'/images/wom1.webp',
    title:'Silk',
    url:'',
  },
  {
    image:'/images/wom2.webp',
    title:'Sharee',
    url:'',
  },
  {
    image:'/images/wom3.webp',
    title:'Salwar Kameez',
    url:'',
  },
  {
    image:'/images/wom4.webp',
    title:'Shawl',
    url:'',
  },
  {
    image:'/images/wom5.webp',
    title:'Shoes',
    url:'',
  },
]