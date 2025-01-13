'use client'

import { DateTab } from '@/components/common/DateTap'
import ExpRecent from '@/components/exp/list/ExpRecent'
import ExpStats from '@/components/exp/list/ExpStats'
import React, { useState } from 'react'

const Page = () => {
  const [activeTab, setActiveTab] = useState("전체")

  return (
    <div className='space-y-3.5'>
      <DateTab activeTab={activeTab} setActiveTab={setActiveTab} />
      <ExpStats />
      <ExpRecent />
    </div>
  )
}

export default Page
