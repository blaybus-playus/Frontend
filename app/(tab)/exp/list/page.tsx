'use client'

import { DateTab } from '@/components/common/DateTap'
import ExpRecent from '@/components/exp/list/ExpRecent'
import ExpStats from '@/components/exp/list/ExpStats'
import { EXP_INFO_LIST } from '@/constant'
import React, { useState } from 'react'

type EXPInfoKey = keyof typeof EXP_INFO_LIST;

const Page = () => {
  const [activeTab, setActiveTab] = useState<EXPInfoKey>("전체")
  return (
    <div className='space-y-3.5'>
      <DateTab activeTab={activeTab} setActiveTab={setActiveTab} />
      <ExpStats tab={activeTab} />
      <ExpRecent />
    </div>
  )
}

export default Page
