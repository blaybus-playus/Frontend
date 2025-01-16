'use client'

import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { avatar, userInfoAtom } from '@/store/atoms'
import { useAtom } from 'jotai'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {
  const router = useRouter();
  const [userInfo] = useAtom(userInfoAtom);
  const { logout } = useAuth();
  const [myAvatar] = useAtom(avatar);

  return (
    <div className='h-full'>
      <div className='bg-white p-5 rounded-2xl'>
        <Image
          src={myAvatar}
          alt="avatar"
          width={120}
          height={120}
          className='mx-auto border-2 rounded-[100px] mb-11 hover:bg-gray-900 hover:opacity-70'
          onClick={() => router.push("/mypage/avatar-change")}
        />
        <ul className='space-y-4'>
          <li className='flex justify-between items-center body-medium-16 text-gray-800'>이름
            <span className='text-gray-950'>{userInfo.name}</span>
          </li>
          <li className='flex justify-between items-center body-medium-16 text-gray-800'>사번
            <span className='text-gray-950'>{userInfo.employeeId}</span>
          </li>
          <li className='flex justify-between items-center body-medium-16 text-gray-800'>소속
            <span className='text-gray-950'>{userInfo.department}</span>
          </li>
          <li className='flex justify-between items-center body-medium-16 text-gray-800'>입사일
            <span className='text-gray-950'>{userInfo.joinDate}</span>
          </li>
          <li className='flex justify-between items-center body-medium-16 text-gray-800'>레벨
            <span className='text-gray-950'>{userInfo.level}</span>
          </li>
        </ul>
      </div>
      <div className='mt-10 space-y-5'>
        <Button>비밀번호 변경</Button>
        <Button variant={"outline"} onClick={logout}>로그아웃</Button>
      </div>
    </div>
  )
}

export default Page
