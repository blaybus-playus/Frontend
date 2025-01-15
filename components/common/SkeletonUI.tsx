import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const SkeletonView = () => {
  return (
    <>
      <Skeleton className="w-full h-[56px] bg-gray-200 dark:bg-gray-700"></Skeleton>
      <div className="container mx-auto p-4 space-y-4">
        <div className="space-y-4">
          <Skeleton className="w-full h-[200px] rounded-2xl bg-gray-200 dark:bg-gray-700"></Skeleton>
          <Skeleton className="w-full h-[125px] rounded-2xl bg-gray-200 dark:bg-gray-700"></Skeleton>
          <Skeleton className="w-full h-[280px] rounded-2xl bg-gray-200 dark:bg-gray-700"></Skeleton>
        </div>
      </div>
      <Skeleton className="w-full h-[85px] bg-gray-200 dark:bg-gray-700">
        <div className="flex justify-evenly py-4 px-2 gap-4">
          <Skeleton className="w-9 h-9 rounded-l bg-gray-300 dark:bg-gray-200"></Skeleton>
          <Skeleton className="w-9 h-9 rounded-l bg-gray-300 dark:bg-gray-200"></Skeleton>
          <Skeleton className="w-9 h-9 rounded-l bg-gray-300 dark:bg-gray-200"></Skeleton>
          <Skeleton className="w-9 h-9 rounded-l bg-gray-300 dark:bg-gray-200"></Skeleton>
          <Skeleton className="w-9 h-9 rounded-l bg-gray-300 dark:bg-gray-200"></Skeleton>
        </div>
      </Skeleton>
    </>
  )
}

export default SkeletonView
