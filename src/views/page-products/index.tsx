'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import ProductsNavbar from '@/views/appbars/ProductsNavbar';
import ScrollableNavbar from '@/views/appbars/ScrollableNavbar';
import ProductList from './components/ProductList';

const ProductsUi = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortOption, setSortOption] = useState('');

  const handleCategoryChange = (category:any) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const filteredProducts = ProductsData.filter((product) =>
    (selectedCategories.length === 0 || selectedCategories.includes(product.title)) &&
    product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  if (sortOption === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      <div className='bg-white h-[60px] md:h-[150px]'>
        <div className='custom-bg h-[130px]'>
          <ProductsNavbar />
        </div>
      </div>
      <div>
        <ScrollableNavbar />
      </div>
      <div className='_container grid grid-cols-12 gap-4'>
        <div className='hidden md:block col-span-3 p-4'>
          <h2 className='text-lg font-bold mb-4'>Filters</h2>
          <div className='mb-4'>
            <h3 className='text-md font-semibold'>Category</h3>
            <div className='space-y-2'>
              {['Panjabi', 'Shirt', 'Tshirt', 'Shoes', 'Accessories', 'Silk', 'Sharee', 'Salwar Kameez', 'Shawl'].map((category) => (
                <label key={category} className='flex items-center space-x-2'>
                  <input
                    type='checkbox'
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className='w-4 h-4 accent-black'
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>
          <div className='mb-4'>
            <h3 className='text-md font-semibold'>Price Range</h3>
            <input
              type='range'
              min='0'
              max='100'
              step='1'
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
              className='w-full'
            />
            <input
              type='range'
              min='0'
              max='100'
              step='1'
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className='w-full'
            />
            <p className='text-sm mt-2'>${priceRange[0]} - ${priceRange[1]}</p>
          </div>
          <div>
            <h3 className='text-md font-semibold'>Sort By</h3>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className='w-full p-2 border rounded-md'
            >
              <option value=''>Default</option>
              <option value='price-low'>Price: Low to High</option>
              <option value='price-high'>Price: High to Low</option>
            </select>
          </div>
        </div>
        <div className='col-span-12 md:col-span-9 mb-20'>
          <ProductList data={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductsUi;

const ProductsData = [
  { image: '/images/men1.webp', title: 'Panjabi', url: '', price: 50 },
  { image: '/images/men2.webp', title: 'Shirt', url: '', price: 40 },
  { image: '/images/men3.webp', title: 'Tshirt', url: '', price: 20 },
  { image: '/images/men4.webp', title: 'Shoes', url: '', price: 80 },
  { image: '/images/men5.webp', title: 'Accessories', url: '', price: 30 },
  { image: '/images/wom1.webp', title: 'Silk', url: '', price: 90 },
  { image: '/images/wom2.webp', title: 'Sharee', url: '', price: 100 },
  { image: '/images/wom3.webp', title: 'Salwar Kameez', url: '', price: 70 },
  { image: '/images/wom4.webp', title: 'Shawl', url: '', price: 60 },
  { image: '/images/wom5.webp', title: 'Shoes', url: '', price: 85 },
];
