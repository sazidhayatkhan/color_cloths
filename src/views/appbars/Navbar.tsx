"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const pn = usePathname();

  if (["/products"].includes(pn)) {
    return null;
  }
  const [hoveredItem, setHoveredItem] = useState(null);
  return (
    <>
    <div className='fixed bottom-0 w-full z-40 hidden md:block'>
        <div className='bg-white flex justify-between items-center text-lg px-8'>
            {
                MenuItemsList.map((item:any,i:number)=>(
                    <>
                    <div key={i} className="relative">
                        
                        <Link href={item?.url}>
                            <button
                            className="uppercase py-4 text-black hover:text-red-500"
                            onMouseEnter={() => setHoveredItem(item)}
                            
                            >
                                {item?.title} 
                            </button>
                        </Link>
                    </div>
                        {hoveredItem === item && (
                            <div onMouseLeave={() => setHoveredItem(null)} className="absolute w-[95%] bg-white py-4 px-4 bottom-[59px] h-[240px] transition-opacity duration-300">
                                <p className='ps-4 text-xl font-bold mb-3'>{item?.title} Section</p>
                                <div className='flex justify-start items-start gap-4'>
                                    <div className='grid grid-cols-3 w-[70%]'>
                                        {
                                            item?.products?.map((prodItem:any,i:any)=>(
                                                <div key={i} className='ps-4 border-r-[1px]'>
                                                    <p className='font-semibold'>{prodItem?.subCategoryTitle}</p>
                                                    {
                                                        prodItem?.subCategoryLists?.map((listItem:any,i:any)=>(
                                                            <div key={i}>
                                                                <button className='text-sm text-slate-500 hover:text-red-600 transition duration-500'>{listItem?.title}</button>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className='w-[30%]'>
                                        <Image 
                                            src={item?.featuredImage || "/images/dummyimage.png"}
                                            alt=""
                                            width={1000}
                                            height={1000}
                                            className="w-[90%] mx-auto h-[170px] object-cover object-top drop-shadow border p-1 bg-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        </>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Navbar

const MenuItemsList=[
    {
        title:"Woman",
        url:"/women",
        products:[
            {
                subCategoryTitle:'Saree',
                subCategoryLists:[
                    {
                        title:'Cotton',
                        url:'',
                    },
                    {
                        title:'Muslin',
                        url:'',
                    }
                    ,{
                        title:'Slik',
                        url:'',
                    },
                    {
                        title:'Kathan',
                        url:'',
                    }
                    ,{
                        title:'Nakshi Katha',
                        url:'',
                    }
                ]
            },
            {
                subCategoryTitle:'Salwar Kameez',
                subCategoryLists:[
                    {
                        title:'Cotton',
                        url:'',
                    },
                    {
                        title:'Muslin',
                        url:'',
                    }
                    ,{
                        title:'Slik',
                        url:'',
                    },
                ]
            },
            {
                subCategoryTitle:'Shawls',
                subCategoryLists:[
                    {
                        title:'Cotton',
                        url:'',
                    },
                    {
                        title:'Viscos',
                        url:'',
                    }
                    ,{
                        title:'Slik',
                        url:'',
                    },
                ]
            },
        ],
        featuredImage:"/images/woman_section.jpg"
        
    },
    {
        title:"Man",
        url:"/men",
        products:[
            {
                subCategoryTitle:'Panjabi',
                subCategoryLists:[
                    {
                        title:'Cotton & Blends',
                        url:'',
                    },
                    {
                        title:'Addi',
                        url:'',
                    }
                    ,{
                        title:'Endi',
                        url:'',
                    },
                    {
                        title:'Silk',
                        url:'',
                    }
                    ,{
                        title:'Muslin',
                        url:'',
                    }
                ]
            },
            {
                subCategoryTitle:'Fatua',
                subCategoryLists:[
                    {
                        title:'Endi',
                        url:'',
                    },
                    {
                        title:'Muslin',
                        url:'',
                    }
                    ,{
                        title:'Slik',
                        url:'',
                    },
                    ,{
                        title:'Cotton & Blends',
                        url:'',
                    },
                ]
            },
            {
                subCategoryTitle:'Shirts',
                subCategoryLists:[
                    {
                        title:'Ethnic',
                        url:'',
                    },
                    {
                        title:'Casual',
                        url:'',
                    }
                    ,{
                        title:'Executive',
                        url:'',
                    },
                ]
            },
        ],
        featuredImage:"/images/panjabi_man.jpg"
        
    },
    {
        title:"Kids",
        url:"",
        products:[
            {
                subCategoryTitle:'Boys (8Y-10Y)',
                subCategoryLists:[
                    {
                        title:'Shirts',
                        url:'',
                    },
                    {
                        title:'Fatua',
                        url:'',
                    }
                    ,{
                        title:'Tshirts',
                        url:'',
                    },
                ]
            },
            {
                subCategoryTitle:'Girls (8Y-10Y)',
                subCategoryLists:[
                    {
                        title:'Frocks',
                        url:'',
                    },
                    {
                        title:'Tops',
                        url:'',
                    }
                    ,{
                        title:'Skirts',
                        url:'',
                    },
                    {
                        title:'Pants',
                        url:'',
                    },
                    {
                        title:'Kurti',
                        url:'',
                    },
                ]
            },
            {
                subCategoryTitle:'Shoes',
                subCategoryLists:[
                    {
                        title:'Ethnic',
                        url:'',
                    },
                    {
                        title:'Casual',
                        url:'',
                    }
                    ,{
                        title:'Executive',
                        url:'',
                    },
                ]
            },
        ],
        featuredImage:"/images/kids_section.webp"
        
    },
    {
        title:"HOME DÉCOR",
        url:"",
        products:[
            {
                subCategoryTitle:'Living',
                subCategoryLists:[
                    {
                        title:'Bed Covers',
                        url:'',
                    },
                    {
                        title:'Pillow Covers',
                        url:'',
                    },
                    {
                        title:'Cushion Covers',
                        url:'',
                    },
                    {
                        title:'Curtains',
                        url:'',
                    },
                ]
            },
            {
                subCategoryTitle:'Dining',
                subCategoryLists:[
                    {
                        title:'Dinnerware Sets',
                        url:'',
                    },
                    {
                        title:'Bowls',
                        url:'',
                    }
                    ,{
                        title:'Trays',
                        url:'',
                    },
                    {
                        title:'Runners',
                        url:'',
                    },
                    {
                        title:'Coasters',
                        url:'',
                    },
                ]
            },
            {
                subCategoryTitle:'Decor',
                subCategoryLists:[
                    {
                        title:'Wall Hangings',
                        url:'',
                    },
                    {
                        title:'Photo Frames',
                        url:'',
                    }
                    ,{
                        title:'Vases',
                        url:'',
                    },
                    {
                        title:'Mirrors',
                        url:'',
                    },
                ]
            },
        ],
        featuredImage:"/images/homedecor.jpg"
        
    },
    {
        title:"Wedding",
        url:"",
        products:[
            {
                subCategoryTitle:'Woman',
                subCategoryLists:[
                    {
                        title:'Sharee',
                        url:'',
                    },
                    {
                        title:'Lehenga',
                        url:'',
                    }
                    ,{
                        title:'Purse & Batua',
                        url:'',
                    },
                ]
            },
            {
                subCategoryTitle:'Man',
                subCategoryLists:[
                    {
                        title:'Panjabi Pajama Set',
                        url:'',
                    },
                    {
                        title:'Coaty',
                        url:'',
                    }
                    ,{
                        title:'Nagra',
                        url:'',
                    },
                    {
                        title:'Panjabi',
                        url:'',
                    },
                    {
                        title:'Kurti',
                        url:'',
                    },
                ]
            },
            {
                subCategoryTitle:'Jwellery',
                subCategoryLists:[
                    {
                        title:'Silver',
                        url:'',
                    },
                    {
                        title:'Gold',
                        url:'',
                    }
                    ,{
                        title:'Pearl',
                        url:'',
                    },
                ]
            },
        ],
        featuredImage:"/images/wedding_section.webp"
        
    },
    {
        title:"Jewellery",
        url:"",
        products:[
            {
                subCategoryTitle:'Necklace',
                subCategoryLists:[
                    {
                        title:'Gold',
                        url:'',
                    },
                    {
                        title:'Pearl',
                        url:'',
                    }
                    ,{
                        title:'Silver',
                        url:'',
                    },
                ]
            },
            {
                subCategoryTitle:'Earrings',
                subCategoryLists:[
                    {
                        title:'Gold',
                        url:'',
                    },
                    {
                        title:'Silver',
                        url:'',
                    }
                    ,{
                        title:'Pearl',
                        url:'',
                    },
                    {
                        title:'Fashion',
                        url:'',
                    },
                ]
            },
            {
                subCategoryTitle:'Rings',
                subCategoryLists:[
                    {
                        title:'Silver',
                        url:'',
                    },
                    {
                        title:'Gold',
                        url:'',
                    }
                    ,{
                        title:'Pearl',
                        url:'',
                    },
                ]
            },
        ],
        featuredImage:"/images/jewellery_section.jpg"
        
    },
    {
        title:"Gifts and Cards",
        url:"",
        products:[
            {
                subCategoryTitle:'GIft Cards',
                subCategoryLists:[
                    {
                        title:'Gold',
                        url:'',
                    },
                    {
                        title:'Pearl',
                        url:'',
                    }
                    ,{
                        title:'Silver',
                        url:'',
                    },
                ]
            },
            {
                subCategoryTitle:'Cupons',
                subCategoryLists:[
                    {
                        title:'Gold',
                        url:'',
                    },
                    {
                        title:'Silver',
                        url:'',
                    }
                    ,{
                        title:'Pearl',
                        url:'',
                    },
                ]
            },
            {
                subCategoryTitle:'Voucher',
                subCategoryLists:[
                    {
                        title:'Silver',
                        url:'',
                    },
                    {
                        title:'Gold',
                        url:'',
                    }
                    ,{
                        title:'Pearl',
                        url:'',
                    },
                    {
                        title:'Fashion',
                        url:'',
                    },
                ]
            },
        ],
        featuredImage:"/images/gifts_section.webp"
        
    },
    {
        title:"Beauty",
        url:""
    },
    {
        title:"Brands",
        url:""
    },
    {
        title:"Puja 23",
        url:""
    },
]