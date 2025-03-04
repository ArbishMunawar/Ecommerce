import React from 'react'
import MobileIcon from '../../../assets/Icons/MobileIcon'
import Typography from '../Typography'

const CategoryCard = ({icon=<MobileIcon/>,title="Phones" ,className = ""}) => {
  return (
    <div className={`flex flex-col flex-grow justify-center items-center hover:bg-[#DB4444] border-2 rounded border-gray-300 pt-5 pb-5 ${className}`}>
            {icon}
  
            <Typography variant="p" >{title}</Typography>
         </div>
  )
}

export default CategoryCard