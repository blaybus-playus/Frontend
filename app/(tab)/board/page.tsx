'use client'

import Banner from '@/components/common/Banner'
import CategoryButton from '@/components/ui/CategoryButton'
import React, { useState } from 'react'

const Page = () => {
  const [category, setCategory] = useState("전체");
  const tabs = ['전체', '부서1', '부서2', '부서3'];

  return (
    <div className='space-y-5'>
      <Banner />
      <div className='flex gap-2'>
        {tabs.map((tab) => (
          <CategoryButton
            key={tab}
            tab={tab}
            variant={category === tab ? 'choice' : 'nonchoice'}
            onClick={() => setCategory(tab)}
          />
        ))}
      </div>

    </div >
  )
}

export default Page
