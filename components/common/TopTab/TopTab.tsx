import { TOP_TABS } from '@/constant'
import React from 'react'
import { TobTabItem } from './TopTabItem'

const TopTab = () => {
  return (
    <div className="w-full bg-white h-[48px]">
      <div className="flex">
        {TOP_TABS.map((tab) => (
          <TobTabItem key={tab.id} tab={tab} />
        ))}
      </div >
    </div >
  )
}

export default TopTab
