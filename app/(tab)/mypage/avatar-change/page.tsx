import { man1_avatar, man2_avatar, man3_avatar, man4_avatar, woman1_avatar, woman2_avatar, woman3_avatar, woman4_avatar } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='px-12 py-10'>
      <div className='flex justify-between items-center'>
        <Image
          src={man1_avatar}
          alt={"avatar"}
          width={120}
          height={120}
          className='rounded-full hover:bg-black hover:opacity-70'
        />
        <Image
          src={man2_avatar}
          alt={"avatar"}
          width={120}
          height={120}
          className='rounded-full hover:bg-black hover:opacity-70'
        />
      </div>
      <div className='flex justify-between items-center'>
        <Image
          src={man3_avatar}
          alt={"avatar"}
          width={120}
          height={120}
          className='rounded-full hover:bg-black hover:opacity-70'
        />
        <Image
          src={man4_avatar}
          alt={"avatar"}
          width={120}
          height={120}
          className='rounded-full hover:bg-black hover:opacity-70'
        />
      </div>
      <div className='flex justify-between items-center'>
        <Image
          src={woman1_avatar}
          alt={"avatar"}
          width={120}
          height={120}
          className='rounded-full hover:bg-black hover:opacity-70'
        />
        <Image
          src={woman2_avatar}
          alt={"avatar"}
          width={120}
          height={120}
          className='rounded-full hover:bg-black hover:opacity-70'
        />
      </div>
      <div className='flex justify-between items-center'>
        <Image
          src={woman3_avatar}
          alt={"avatar"}
          width={120}
          height={120}
          className='rounded-full hover:bg-black hover:opacity-70'
        />
        <Image
          src={woman4_avatar}
          alt={"avatar"}
          width={120}
          height={120}
          className='rounded-full hover:bg-black hover:opacity-70'
        />
      </div>
    </div>
  )
}

export default Page
