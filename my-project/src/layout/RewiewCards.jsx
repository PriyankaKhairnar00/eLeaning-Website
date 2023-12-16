import React from 'react'

const RewiewCards = (props) => {
  return (
    <div className=' w-full md:w-1/3 bg-white border-2 border-lighttext md:border-none p-5 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all'>
        <div>
            <p className=' text-slate-500'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
            dicta adipisci eaque blanditiis error facilis animi dolores dolorem 
            </p>
        </div>
        <div className='flex flex-row justify-center'>
          <img className=' rounded-full  w-2/4' src={props.img} alt="img" />
        </div>
    </div>
  )
}

export default RewiewCards