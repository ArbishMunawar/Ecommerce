
import React from 'react'

const Button = ({ className, children }) => {
  return (
    <button 
      className={`pt-[0.7rem] pb-[0.7rem] pr-[1.4rem] pl-[1.4rem] rounded bg-[#DB4444] text-white mb-4 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button;
