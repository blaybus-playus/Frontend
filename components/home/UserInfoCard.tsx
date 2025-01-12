import Image from 'next/image'
import React from 'react'
import { level_badge_01, man1_avatar } from '@/assets/images'
import { Progress } from '../ui/progress'

const UserInfoCard = () => {
  return (
    <div className="bg-gray-50 rounded-2xl w-full px-2.5 py-4">
      <div className="flex flex-col gap-6">
        <div className="flex gap-3 items-center">
          <div className="rounded-full ">
            <Image
              src={man1_avatar}
              alt={"유저 사진"}
              width={80}
              height={80}
            />
          </div>
          <div className="space-y-2.5">
            <div className="flex gap-2">
              <span className="body-medium-14 text-gray-800">이름 :</span>
              <span className="body-semibold-14 text-gray-950">홍길동</span>
            </div>
            <div className="flex gap-2">
              <span className="body-medium-14 text-gray-800">사번 :</span>
              <span className="body-semibold-14 text-gray-950">123456789</span>
            </div>
            <div className="flex gap-2">
              <span className="body-medium-14 text-gray-800">소속 :</span>
              <span className="body-semibold-14 text-gray-950">음성 1센터</span>
            </div>
            <div className="flex gap-2">
              <span className="body-medium-14 text-gray-800">레벨 :</span>
              <span className="body-semibold-14 text-gray-950">F1-1</span>
            </div>
          </div>
          <Image
            src={level_badge_01}
            alt='레벨 뱃지'
            width={60}
            height={60}
            className='ml-auto'
          />
        </div>

      </div>
      <Progress className="mt-6" value={75} />
      <div className="text-right body-regular-14 text-primary-400 mt-1.5">75%</div>
    </div >
  )
}

export default UserInfoCard
