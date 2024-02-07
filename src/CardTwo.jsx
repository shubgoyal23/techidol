import React from 'react'

function CardTwo({name}) {
  return (
    <div className='bg-transperent text-black grid-1 flex justify-center flex-col gap-4 lg:p-10 md:p-6 p-4  box-border items-center lg:h-28 md:h-20 h-16  hover:text-sky-700 hover:scale-110 rounded-lg border-2 border-gray-900 transition-all ease-in duration-300 cursor-pointer hover:shadow-xl shadow-gray-800'>
      <h4 className='md:text-lg text-xs lg:text-xl text-center'>{name}</h4>
    </div>
  )
}

export default CardTwo
