'use client'

import { quest_badge_jeonsa } from '@/assets/images'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const RecentEXP = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-50 rounded-2xl p-4">
      <div className='space-y-6'>
        <div className='flex justify-between'>
          <h3 className='title-semibold-16'>최근 획득한 경험치</h3>
          <ChevronRight className="h-6 w-6" onClick={() => router.push('/exp/list')} />
        </div>
        <div className='flex justify-between'>
          <div className='flex gap-3'>
            <Image
              src={quest_badge_jeonsa}
              alt='badge'
              width={40}
              height={40}
            />
            <div>
              <h3 className='body-semibold-14 text-gray-950'>물류 무사고 3000일 달성</h3>
              <span className='body-regular-12 text-gray-950'>[전사 프로젝트]</span>
            </div>
          </div>
          <div>
            <h3 className='title-semibold-16 text-primary-400'>
              +1000do
            </h3>
            <span className='caption-medium-11 text-gray-500'>
              19060do
            </span>
          </div>
        </div>
      </div>
    </div >
  )
}

export default RecentEXP
