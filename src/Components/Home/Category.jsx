import React from 'react'

function Category() {
  return (
    <div className='w-full pt-10 pb-6'>
      <div className='flex w-full justify-center'>
        <h1 className='font-bold text-2xl md:text-4xl '>Shop By  </h1>
        <h1 className='font-bold text-2xl md:text-4xl pl-2 text-purple-500'>Categories</h1>
      </div>
      <div className='grid w-full px-3  gap-3 grid-cols-3 md:grid-cols-4 mt-8'>
        <div className='col-span-3  md:col-span-2'>
          <img src="src/assets/ban8.jpg" className=' object-cover h-full' alt="" />
        </div>
        <div className='  '>
          <img src="src/assets/ban4.png" className=' object-cover h-full' alt="" />
        </div>
        <div className='  row-span-2'>
          <img src="src/assets/ban5.png" className=' object-cover h-full' alt="" />
        </div>
        <div className=' '>
          <img src="src/assets/ban2.png" className=' object-cover h-full' alt="" />
        </div>
        <div className=' '>
          <img src="src/assets/ban7.png" className=' object-cover h-full' alt="" />
        </div>
        <div className=' '>
          <img src="src/assets/ban6.jpg" className=' object-cover h-full' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Category
