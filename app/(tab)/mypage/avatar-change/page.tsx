'use client'

import { man1_avatar, man2_avatar, man3_avatar, man4_avatar, woman1_avatar, woman2_avatar, woman3_avatar, woman4_avatar } from '@/assets/images'
import { avatar } from '@/store/atoms'
import { useAtom } from 'jotai'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {
  const [myAvatar, setMyAvatar] = useAtom(avatar);
  const router = useRouter()

  return (
    <div className='px-12 py-10'>
      <div className='flex justify-between items-center'>
        <Image
          src={man1_avatar}
          alt={"avatar"}
          width={120}
          height={120}
          className='cursor-pointer rounded-full hover:bg-black hover:opacity-70'
          onClick={() => {
            setMyAvatar(man1_avatar);
            router.back();
          }}
        />
        <Image
          src={man2_avatar}
          alt={"avatar"}
          width={120}
          height={120}
          className='cursor-pointer rounded-full hover:bg-black hover:opacity-70'
          onClick={() => {
            setMyAvatar(man2_avatar);
            router.back();
          }}
        />
      </div>
      <div className='flex justify-between items-center'>
        <Image
          src={man3_avatar}
          alt={"avatar"}
          width={120}
          height={120}
          className='cursor-pointer rounded-full hover:bg-black hover:opacity-70'
          onClick={() => {
            setMyAvatar(man3_avatar);
            router.back();
          }}
        />
        <Image
          src={man4_avatar}
          alt={"avatar"}
          width={120}
          height={120}
          className='cursor-pointer rounded-full hover:bg-black hover:opacity-70'
          onClick={() => {
            setMyAvatar(man4_avatar);
            router.back();
          }}
        />
      </div>
      <div className='flex justify-between items-center'>
        <Image
          src={woman1_avatar}
          alt={"avatar"}
          width={120}
          height={120}
          className='cursor-pointer rounded-full hover:bg-black hover:opacity-70'
          onClick={() => {
            setMyAvatar(woman1_avatar);
            router.back()
          }}
        />
        <Image
          src={woman2_avatar}
          alt={"avatar"}
          width={120}
          height={120}
          className='cursor-pointer rounded-full hover:bg-black hover:opacity-70'
          onClick={() => {
            setMyAvatar(woman2_avatar);
            router.back()
          }}
        />
      </div>
      <div className='flex justify-between items-center'>
        <Image
          src={woman3_avatar}
          alt={"avatar"}
          width={120}
          height={120}
          className='cursor-pointer rounded-full hover:bg-black hover:opacity-70'
          onClick={() => {
            setMyAvatar(woman3_avatar);
            router.back()
          }}
        />
        <Image
          src={woman4_avatar}
          alt={"avatar"}
          width={120}
          height={120}
          className='cursor-pointer rounded-full hover:bg-black hover:opacity-70'
          onClick={() => {
            setMyAvatar(woman4_avatar);
            router.back()
          }}
        />
      </div>
    </div>
  )
}

export default Page
