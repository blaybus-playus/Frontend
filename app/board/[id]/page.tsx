'use client'

import { getPosts } from '@/api/board/api'
import BackHeader from '@/components/common/BackHeader'
import SkeletonView from '@/components/common/SkeletonUI'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Cookies } from 'react-cookie'

interface BoardDetailPageProps {
  params: {
    id: string
  }
}

export default function BoardDetailPage({ params }: BoardDetailPageProps) {
  const { id } = params
  const cookies = new Cookies();
  const token = cookies.get('accessToken')

  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(token)
  });

  if (isLoading) return <SkeletonView />
  if (error) return <div>에러가 발생했습니다</div>

  // 전체 게시글 중에서 현재 id와 일치하는 게시글 찾기
  const post = data?.result?.find((post: Post) => post.id === id);

  if (!post) return <div>게시글을 찾을 수 없습니다.</div>

  return (
    <div className='flex flex-col min-h-screen bg-[#F6F7F9]'>
      <BackHeader title='게시판' />
      <div className="flex-1 mb-[85px] w-auto mx-4 py-5">
        <div className='space-y-4 py-5 border-b'>
          <h1 className='title-semibold-18'>{post.title}</h1>
          <div className='text-gray-800 flex items-center body-semibold-14'>현장부서
            <span className='ml-1 caption-regular-11'>• 2024-01-01</span>
          </div>
        </div>
        <div className='pt-5 body-medium-16'>
          {post.content}
        </div>
      </div>
    </div>
  )
}
