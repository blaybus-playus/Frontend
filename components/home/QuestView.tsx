import { quest_badge_special } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

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
      <div className='w-full flex flex-wrap gap-1.5'>
        <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>1월</div>
        <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>2월</div>
        <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>3월</div>
        <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>4월</div>
        <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>5월</div>
        <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>6월</div>
        <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>7월</div>
        <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>8월</div>
        <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-[#FBD288] flex-shrink-0'>9월</div>
        <div className='flex justify-center items-center w-7 h-7 rounded-md text-white body-semibold-12 bg-primary-300 flex-shrink-0'>10월</div>
      </div>
    </div>
  )
}

export default QuestView
