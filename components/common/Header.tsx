import { bell } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className="fixed top-0 w-[375px] h-[104px] bg-white z-1000 border-b">
      <div className="absolute bottom-0 w-full h-[56px] flex justify-center items-center">
        <Image
          src={bell}
          alt="Notifications"
          width={24}
          height={24}
          className="absolute left-[1rem] cursor-pointer"
        />
        <span className="text-lg font-semibold">동적주소</span>
      </div>
    </header>
  )
}

export default Header
