import { quest_badge_insa, quest_badge_jeonsa, quest_badge_leader, quest_badge_special, quest_badge_zikmu } from '@/assets/images'
import ContentLayout from '@/components/common/ContentLayout'
import { EXP_INFO_LIST } from '@/constant'
import Image from 'next/image'
import React from 'react';

type EXPInfoKey = keyof typeof EXP_INFO_LIST;

const ExpStats = ({ tab }: { tab: EXPInfoKey }) => {
  const currentInfo = EXP_INFO_LIST[tab];


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
            {currentInfo[1]} do
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
            {currentInfo[2]} do
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
            {currentInfo[3]} do
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
            {currentInfo[4]} do
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
            {currentInfo[5]} do
          </span>
        </div>
      </div >
    </ContentLayout>
  )
}
export default ExpStats
