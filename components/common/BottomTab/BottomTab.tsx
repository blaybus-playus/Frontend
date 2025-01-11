import React from 'react'
import BottomTabItem from './BottomTabItem'
import { TAB_MENU_ITEMS } from '@/constant'

const BottomTab = () => {
  return (
    <nav className='w-full h-[85px] fixed bottom-0 z-100 bg-white'>
      <div className='h-[53px] border-t'>
        <div className='my-[6px] flex'>
          {TAB_MENU_ITEMS.map((tab) => (
            <BottomTabItem key={tab} content={tab} />
          ))}
        </div>
      </div>
    </nav>
  )
}

export default BottomTab 