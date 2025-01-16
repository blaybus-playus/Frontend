'use client'

import { quest_badge_insa, quest_badge_jeonsa, quest_badge_leader, quest_badge_special, quest_badge_zikmu } from '@/assets/images'
import ContentLayout from '@/components/common/ContentLayout'
import { HISTORY } from '@/constant'
import Image from 'next/image'
import React from 'react'

const ExpRecent = () => {
  const history = HISTORY;

  return (
    <ContentLayout title={"최근 획득한 경험치"}>
      <div className='space-y-4'>
        {history.map((exp, index) => (
          <div key={index} className='flex justify-between'>
            <div className='flex gap-3'>
              <Image
                src={
                  exp.questGroup === '인사평가' ? quest_badge_insa :
                    exp.questGroup === '전사 프로젝트' ? quest_badge_jeonsa :
                      exp.questGroup === '직무별 퀘스트' ? quest_badge_zikmu :
                        exp.questGroup === '특근' ? quest_badge_special :
                          quest_badge_leader
                }
                alt='badge'
                width={40}
                height={40}
              />
              <div>
                <h3 className='body-semibold-14 text-gray-950'>{exp.questName}</h3>
                <span className='body-regular-12 text-gray-400'>[{exp.questGroup}]</span>
              </div>
            </div>
            <div>
              <h3 className='title-semibold-16 text-primary-400'>
                +{exp.score}do
              </h3>
              <span className='caption-medium-11 text-gray-500'>
                {exp.remain}do
              </span>
            </div>
          </div>
        )
        )}
      </div>
    </ContentLayout >
  )
}

export default ExpRecent
