import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className=' bg-rgba(237, 234, 234, 0.799) py-2 rounded-full mt-5 outline p-10 hover:shadow-[rgba(0,_0,_0,_0.2)_0px_1px_8px] hover:bg-blue-400 hover:text-white transition text-black'>
            {props.title}
        </button>
    </div>
  )
}

export default Button