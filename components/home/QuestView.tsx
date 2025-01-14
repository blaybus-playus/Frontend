import { quest_badge_special } from '@/assets/images'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const QuestView = () => {
  return (
    <div className='bg-[#FFF3F0] rounded-2xl py-5 px-4'>
      <div className='flex items-center gap-3'>
        <Image
          src={quest_badge_special}
          alt={"badge"}
          width={24}
          height={24}
        />
        <h2 className='title-bold-18 text-gray-950'>월특근</h2>
        <span className='text-gray-500 body-regular-12'>월별 퀘스트</span>
      </div>
      <div className='border-b border-gray-50 mt-3 mb-4'></div>
      <div className='w-full flex gap-1.5'>
        <div className='flex items-center justify-center w-7 h-7 body-semibold-12 bg-primary-300 rounded-[6px] text-gray-50'>
          1주
        </div>
      </div>
      <Button
        className="mt-8"
      >
        전체 퀘스트 보기
      </Button>
    </div>
  )
}

export default QuestView
