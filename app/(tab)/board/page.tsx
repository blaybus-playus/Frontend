'use client'

import { loud_speaker, magnifier } from '@/assets/images'
import Banner from '@/components/common/Banner'
import CategoryButton from '@/components/ui/CategoryButton'
import Image from 'next/image'
import React, { useState } from 'react'

const Page = () => {
  const [category, setCategory] = useState("전체");
  const tabs = ['전체', '부서1', '부서2', '부서3'];
  const boards = ['전체공지', '현장부서', '성장전략', '인사팀', '현장부서']

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
      <div className='flex items-center px-4 py-3.5 bg-primary-100 rounded-2xl gap-1 text-gray-800 body-medium-12'>
        <Image
          src={loud_speaker}
          alt='확성기'
          width={20}
          height={20}
        />
        <span className='body-semibold-12 text-gray-800'>[시스템공지]</span>
        DoStep 게시판 사용안내 ver.1.0
      </div>
      <div className='space-y-4'>
        {boards.map((board) => (
          <div
            key={board}
            className='bg-gray-50 p-4 space-y-4'
          >
            <h2 className='body-semibold-14 text-gray-800'>{board}<span className='ml-1.5 caption-medium-11 text-gray-400'>• 25분 전</span></h2>
            <div className='body-medium-14'>AAA 프로젝트 신설 (경험치 500 do, 신청 마감 ~10/31), 잡초이스 공고(신청 마감 ~11/20)</div>
          </div>
        ))}
      </div>

    </div >
  )
}

export default Page
