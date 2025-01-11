'use client'

import { cn } from '@/lib/utils'
import { useAtomValue } from 'jotai'
import { currentPathAtom } from '../atoms'

interface TopTabProps {
  id: string
  label: string
}

export function TobTabItem({ tab }: { tab: TopTabProps }) {
  const currentPath = useAtomValue(currentPathAtom);
  const isActive = currentPath[2] === tab.id; // 현재 경로와 tab.id 비교

  return (
    <button
      className={cn(
        "flex-1 px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none",
        isActive && "border-b-2 border-purple-500 text-purple-600" // active 스타일
      )}
    >
      {tab.label}
    </button>
  );
}
