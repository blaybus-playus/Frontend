'use client'

import React, { useState } from 'react'
import CategoryButton from '../ui/CategoryButton';

const RecentBoard = () => {
  const [category, setCategory] = useState("전체");
  const tabs = ['전체', '부서1', '부서2', '부서3'];

  return (
    <div className='p-4 bg-gray-50 space-y-5 rounded-2xl'>
      <h2 className='title-semibold-16 text-gray-950'>최근 게시글</h2>
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
      <div className='space-y-3.5 bg-[#FFF3F0] rounded-2xl px-4 py-5'>
        <div className='flex items-center gap-1.5'>
          <h3 className='text-primary-400 body-semibold-12'>[전체 공지]</h3>
          <span className='body-regular-12 text-gray-500'>00분 전</span>
        </div>
        <div>
          AAA 프로젝트 신설 (경험치 500 do, 신청 마감 ~10/31), 잡초이스 공고(신청 마감 ~11/20)
        </div>
      </div>
      <div className='space-y-3.5 bg-[#FFF3F0] rounded-2xl px-4 py-5'>
        <div className='flex items-center gap-1.5'>
          <h3 className='text-primary-400 body-semibold-12'>[전체 공지]</h3>
          <span className='body-regular-12 text-gray-500'>00분 전</span>
        </div>
        <div>
          AAA 프로젝트 신설 (경험치 500 do, 신청 마감 ~10/31), 잡초이스 공고(신청 마감 ~11/20)
        </div>
      </div>
      <div className='space-y-3.5 bg-[#FFF3F0] rounded-2xl px-4 py-5'>
        <div className='flex items-center gap-1.5'>
          <h3 className='text-primary-400 body-semibold-12'>[전체 공지]</h3>
          <span className='body-regular-12 text-gray-500'>00분 전</span>
        </div>
        <div>
          AAA 프로젝트 신설 (경험치 500 do, 신청 마감 ~10/31), 잡초이스 공고(신청 마감 ~11/20)
        </div>
      </div>
    </div >
  )
}

export default RecentBoard
