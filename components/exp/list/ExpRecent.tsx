import { quest_badge_leader } from '@/assets/images'
import ContentLayout from '@/components/common/ContentLayout'
import Image from 'next/image'
import React from 'react'

const ExpRecent = () => {
  return (
    <ContentLayout title={"최근 획득한 경험치"}>
      <div className='space-y-4'>
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num} className='flex justify-between'>
            <div className='flex gap-3'>
              <Image
                src={quest_badge_leader}
                alt='badge'
                width={40}
                height={40}
              />
              <div>
                <h3 className='body-semibold-14 text-gray-950'>퀘스트 이름</h3>
                <span className='body-regular-12 text-gray-400'>[리더부여]</span>
              </div>
            </div>
            <div>
              <h3 className='title-semibold-16 text-primary-400'>
                +4do
              </h3>
              <span className='caption-medium-11 text-gray-500'>
                7,504do
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
