'use client'

import { logo, magnifier } from '@/assets/images'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { PATH_TITLE } from '@/constant/index'
import { useAtom } from 'jotai';
import { currentPathAtom } from '../../store/atoms';
import { useEffect } from 'react'

const Header = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useAtom(currentPathAtom);
  const currentTitle = PATH_TITLE[currentPath[1]]

  useEffect(() => {
    setCurrentPath(pathname.split("/"))
  }, [pathname, setCurrentPath])

  return (
    <header className="fixed top-0 w-full bg-white z-1000">
      <div className="w-full h-[56px] flex justify-between items-center pl-[2rem] pr-[2rem]">
        {/* Home 헤더 */}
        {currentTitle === '홈' ?
          <Image
            src={logo}
            alt={'로고'}
            width={54}
            height={30}
            className='cursor-pointer'
          /> :
          <span className="title-semibold-18">{currentTitle}</span>}
        <div className='flex gap-4'>
          {currentTitle === '게시판' &&
            <Image
              src={magnifier}
              alt='검색 icon'
              width={24}
              height={24}
            />}
          {/* <Image
            src={bell}
            alt="Notifications"
            width={24}
            height={24}
            className="cursor-pointer"
          /> */}
        </div>
      </div>
    </header>
  )
}

export default Header
