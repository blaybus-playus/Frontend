import { man1_avatar } from '@/assets/images'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='h-full'>
      <div className='bg-white p-5 rounded-2xl'>
        <Image
          src={man1_avatar}
          alt={"avatar"}
          width={120}
          height={120}
          className='mx-auto border-2 rounded-[100px] mb-11'
        />
        <ul className='space-y-4'>
          <li className='flex justify-between items-center body-medium-16 text-gray-800'>이름<span className='text-gray-950'>홍길동</span></li>
          <li className='flex justify-between items-center body-medium-16 text-gray-800'>사번<span className='text-gray-950'>12345678</span></li>
          <li className='flex justify-between items-center body-medium-16 text-gray-800'>소속<span className='text-gray-950'>음성 1센터</span></li>
          <li className='flex justify-between items-center body-medium-16 text-gray-800'>입사일<span className='text-gray-950'>25.01.05</span></li>
          <li className='flex justify-between items-center body-medium-16 text-gray-800'>레벨<span className='text-gray-950'>F1 - I</span></li>
        </ul>
      </div>
      <div className='mt-10 space-y-5'>
        <Button>비밀번호 변경</Button>
        <Button variant={"outline"}>로그아웃</Button>
      </div>
    </div>
  )
}

export default page
