'use client'

import React from 'react'
import QuestView from './QuestView'
import { quest_badge_zikmu } from '@/assets/images'
import Image from 'next/image'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const TeamQuest = () => {
  const router = useRouter();

  return (
    <div className='bg-gray-50 p-4 rounded-2xl space-y-4'>
      <h2 className='title-semibold-16'>우리 팀 퀘스트</h2>
      <div className='space-y-3.5'>
        <QuestView />
        <div className='bg-[#FFF3F0] rounded-2xl py-5 px-4'>
          <div className='flex items-center gap-3'>
            <Image
              src={quest_badge_zikmu}
              alt={"badge"}
              width={24}
              height={24}
            />
            <h2 className='title-bold-18 text-gray-950'>업무 개선</h2>
            <span className='text-gray-500 body-regular-12'>월별 퀘스트</span>
          </div>
          <div className='border-b border-gray-50 mt-3 mb-4'></div>
          <div className='w-full flex flex-wrap gap-1.5'>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>2월</div>
            <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>7월</div>
          </div>
        </div>
        <Button
          className="mt-8"
          onClick={() => router.push('/quest/leader')}
        >
          전체 퀘스트 보기
        </Button>
      </div>
    </div>
  )
}

export default TeamQuest
