import React from 'react'

function Card({name, image}) {
  return (
    <div className='bg-gray-800 text-white grid-1 flex justify-center flex-col gap-4 lg:p-10 md:p-6 p-4  box-border items-center lg:h-60 md:h-52 h-32  hover:text-yellow-400 hover:scale-110 rounded-lg shadow-[0_1px_15px_2px] shadow-gray-900 transition-all ease-in duration-300 cursor-pointer'>
      <div>
        <img src={image} alt={name} className='ld:w-20 md:h-16 h-10 ld:h-20 md:w-16 w-10' />
      </div>
      <h4 className='md:text-lg text-xs lg:text-xl md:mt-2 mt-1 lg:mt-4 text-center'>{name}</h4>
    </div>
  )
}

export default Card
