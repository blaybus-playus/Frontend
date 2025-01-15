'use client'

import { getPosts } from '@/api/board/api'
import { loud_speaker } from '@/assets/images'
import Banner from '@/components/common/Banner'
import SkeletonView from '@/components/common/SkeletonUI'
import CategoryButton from '@/components/ui/CategoryButton'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Cookies } from 'react-cookie'

const Page = () => {
  const router = useRouter();
  const [category, setCategory] = useState("전체");
  const tabs = ['전체', '부서1', '부서2', '부서3'];

  const cookies = new Cookies();
  const token = cookies.get('accessToken')
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(token)
  })

  if (isLoading) {
    return <SkeletonView />
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
    <div className='space-y-5'>
      <Banner />
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
      <div className='flex items-center px-4 py-3.5 bg-primary-100 rounded-2xl gap-1 text-gray-800 body-medium-12'>
        <Image
          src={loud_speaker}
          alt='확성기'
          width={20}
          height={20}
        />
        <span className='body-semibold-12 text-gray-800'>[시스템공지]</span>
        DoStep 게시판 사용안내 ver.1.0
      </div>
      <div className='space-y-4'>
        {filteredPosts.map((post: Post) => (
          <div
            key={post.id}
            className='bg-gray-50 p-4 space-y-4 rounded-2xl'
            onClick={() => router.push(`/board/${post.id}`)}
          >
            <h2 className='body-semibold-14 text-gray-800'>{post.title}<span className='ml-1.5 caption-medium-11 text-gray-400'>•</span></h2>
            <div className='body-medium-14'>{post.content}</div>
          </div>
        ))}
      </div>

    </div >
  )
}

export default Page
