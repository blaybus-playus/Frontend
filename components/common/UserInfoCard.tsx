'use client'

import Image from 'next/image'
import React from 'react'
import { level_badge_01, level_badge_02, level_badge_03, level_badge_04, level_badge_05 } from '@/assets/images'
import { Progress } from '../ui/progress'
import { useAtom } from 'jotai'
import { avatar, userInfoAtom } from '@/store/atoms'

const UserInfoCard = ({ bar }: { bar: boolean }) => {
  const [userInfo] = useAtom(userInfoAtom);
  const [myAvatar] = useAtom(avatar);
  const level = userInfo.level.slice(0, 2);

  return (
    <div className="bg-gray-50 rounded-2xl w-full px-2.5 py-4">
      <div className="flex flex-col gap-6">
        <div className="flex gap-3 items-center">
          <div className="rounded-full ">
            <Image
              src={myAvatar}
              alt={"유저 사진"}
              width={80}
              height={80}
            />
          </div>
          <div className="space-y-2.5">
            <div className="flex gap-2">
              <span className="body-medium-14 text-gray-800">이름 :</span>
              <span className="body-semibold-14 text-gray-950">{userInfo.name}</span>
            </div>
            <div className="flex gap-2">
              <span className="body-medium-14 text-gray-800">사번 :</span>
              <span className="body-semibold-14 text-gray-950">{userInfo.employeeId}</span>
            </div>
            <div className="flex gap-2">
              <span className="body-medium-14 text-gray-800">소속 :</span>
              <span className="body-semibold-14 text-gray-950">{userInfo.department}</span>
            </div>
            {bar && <>
              <div className="flex gap-2">
                <span className="body-medium-14 text-gray-800">레벨 :</span>
                <span className="body-semibold-14 text-gray-950">{userInfo.level}</span>
              </div>
            </>}
          </div>
          <Image
            src={
              level === 'F1' ? level_badge_01 :
                level === 'F2' ? level_badge_02 :
                  level === 'F3' ? level_badge_03 :
                    level === 'F4' ? level_badge_04 :
                      level_badge_05
            }
            alt='레벨 뱃지'
            width={60}
            height={60}
            className='ml-auto'
          />
        </div>

      </div>
      {bar && <>
        <Progress className="mt-6" value={75} />
        <div className="text-right body-regular-14 text-primary-400 mt-1.5">75%</div>
      </>}
    </div >
  )
}

export default UserInfoCard
