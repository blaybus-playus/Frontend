import { quest_badge_insa, quest_badge_jeonsa, quest_badge_leader, quest_badge_special, quest_badge_zikmu } from '@/assets/images'
import ContentLayout from '@/components/common/ContentLayout'
import Image from 'next/image'
import React from 'react'

const ExpStats = () => {
  return (
    <ContentLayout title={"전체 경험치 통계"}>
      <div className='space-y-5'>
        <div className='flex gap-3 pb-4 border-b border-gray-200'>
          <Image
            src={quest_badge_leader}
            alt='badge'
            width={24}
            height={24}
          />
          리더부여 퀘스트
          <span className='ml-auto title-semibold-16'>
            1500 do
          </span>
        </div>
        <div className='flex gap-3 pb-4 border-b border-gray-200'>
          <Image
            src={quest_badge_special}
            alt='badge'
            width={24}
            height={24}
          />
          특근
          <span className='ml-auto title-semibold-16'>
            1500 do
          </span>
        </div>
        <div className='flex gap-3 pb-4 border-b border-gray-200'>
          <Image
            src={quest_badge_zikmu}
            alt='badge'
            width={24}
            height={24}
          />
          직무별 퀘스트
          <span className='ml-auto title-semibold-16'>
            1500 do
          </span>
        </div>
        <div className='flex gap-3 pb-4 border-b border-gray-200'>
          <Image
            src={quest_badge_jeonsa}
            alt='badge'
            width={24}
            height={24}
          />
          전사 프로젝트
          <span className='ml-auto title-semibold-16'>
            1500 do
          </span>
        </div>
        <div className='flex gap-3'>
          <Image
            src={quest_badge_insa}
            alt='badge'
            width={24}
            height={24}
          />
          인사평가
          <span className='ml-auto title-semibold-16'>
            1500 do
          </span>
        </div>
      </div >
    </ContentLayout>
  )
}
export default ExpStats
