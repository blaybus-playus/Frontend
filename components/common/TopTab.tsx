'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useAtomValue } from 'jotai';
import { currentPathAtom } from '../../store/atoms';
import { useRouter } from 'next/navigation';
import { TAB_MAP } from '@/constant';

const TopTab = () => {
  const router = useRouter();
  const currentPath: string[] = useAtomValue(currentPathAtom);
  const tabs = TAB_MAP[currentPath[1] as keyof typeof TAB_MAP];

  const handleClick = (path: string) => {
    router.push(`/${currentPath[1]}/${path}`);
  };

  return (
    <div className='pt-[56px]'>
      {tabs &&
        <div className="w-full bg-white h-[48px]">
          <div className="flex">
            {tabs.map((tab) => {
              const isActive = currentPath[2] === tab.id; // 현재 경로와 tab.id 비교

              return (
                <button
                  key={tab.id}
                  className={cn(
                    "flex-1 pt-4 pb-2.5 px-2.5 title-semibold-16 text-gray-400 focus:outline-none",
                    isActive && "border-b-2 border-gray-950  text-gray-950" // active 스타일
                  )}
                  onClick={() => handleClick(tab.id)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>}
    </div>
  );
};

export default TopTab;