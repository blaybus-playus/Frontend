'use client'

import { bell } from '@/assets/images'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { PATH_TITLE } from '@/constant/index'
import { useAtom } from 'jotai';
import { currentPathAtom } from './atoms';
import { useEffect } from 'react'

const Header = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useAtom(currentPathAtom);
  const currentTitle = PATH_TITLE[currentPath[1]]

  useEffect(() => {
    setCurrentPath(pathname.split("/"))
  }, [pathname, setCurrentPath])

  return (
    <header className="fixed top-0 w-full h-[104px] bg-white z-1000">
      <div className="absolute bottom-0 w-full h-[56px] flex justify-center items-center">
        <Image
          src={bell}
          alt="Notifications"
          width={24}
          height={24}
          className="absolute left-[1rem] cursor-pointer"
        />
        <span className="title-semibold-18">{currentTitle}</span>
      </div>
    </header>
  )
}

export default Header
