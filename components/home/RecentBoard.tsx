'use client'

import React, { useState } from 'react'
import CategoryButton from '../ui/CategoryButton'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from '@/api/board/api'
import { Cookies } from 'react-cookie'
import { useRouter } from 'next/navigation'
import { Skeleton } from '../ui/skeleton'

const RecentBoard = () => {
  const router = useRouter();
  const cookies = new Cookies()
  const accessToken = cookies.get('accessToken')
  const [category, setCategory] = useState("전체")
  const tabs = ['전체', '부서1', '부서2', '부서3']

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(accessToken)
  })

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="w-full h-[200px] rounded-2xl bg-gray-200 dark:bg-gray-700"></Skeleton>
        <Skeleton className="w-full h-[125px] rounded-2xl bg-gray-200 dark:bg-gray-700"></Skeleton>
        <Skeleton className="w-full h-[280px] rounded-2xl bg-gray-200 dark:bg-gray-700"></Skeleton>
      </div>
    )
  }

  if (isError) {
    return <div>오류: {error?.message}</div>
  }

  // Move this after error handling to ensure data exists
  const filteredPosts = data?.result?.filter((post: Post) => {
    if (category === '전체') return true
    return post.jobGroup === category
  }) ?? []

  return (
    <div className='p-4 bg-gray-50 space-y-5 rounded-2xl'>
      <h2 className='title-semibold-16 text-gray-950'>최근 게시글</h2>

      <div className='flex gap-2'>
        {tabs.map((tab) => (
          <CategoryButton
            key={tab}
            tab={tab}
            variant={category === tab ? 'choice' : 'nonchoice'}
            onClick={() => setCategory(tab)}
          />
        ))}
      </div>

      {/* Map through filtered posts instead of hardcoded notices */}
      {filteredPosts.slice(0, 4).map((post: Post) => (
        <div
          key={post.id}
          className='space-y-3.5 bg-[#FFF3F0] rounded-2xl px-4 py-5'
          onClick={() => router.push(`/board/${post.id}`)}
        >
          <div className='flex items-center gap-1.5'>
            <h3 className='text-primary-400 body-semibold-12'>
              [{post.jobGroup || '공지'}]
            </h3>
            <span className='body-regular-12 text-gray-500'>00분 전</span>
          </div>
          <div>{post.title}</div>
        </div>
      ))}

      {/* Show message when no posts are found */}
      {filteredPosts.length === 0 && (
        <div className='text-center py-4 text-gray-500'>
          게시글이 없습니다.
        </div>
      )}
    </div>
  )
}

export default RecentBoard