import React from 'react'

const Button = ({varient,text}) => {
  return (
    <div>
        {varient === 'determined' && <button className="w-full py-3 font-medium rounded-full bg-[#207EB8] text-sm text-white mb-4">{text}</button>}
        {varient === 'normal' &&<button className="w-full py-3 font-medium rounded-full border-2 border-[#207EB8] text-sm text-[#207EB8]">{text}</button>}
    </div>
  )
}

export default Button;